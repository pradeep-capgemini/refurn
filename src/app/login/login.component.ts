import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    
    this.contactForm = this.fb.group({
      username: ['', [Validators.required, this.noSpaceValidator]],
      password: ['', [Validators.required, Validators.minLength(6), this.noSpaceValidator]]
    });
  }

  noSpaceValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value && /\s/.test(control.value)) {
      return { noSpace: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const contactFormData = this.contactForm.value;
      this.loginService.login(contactFormData).subscribe({
        next: (response) => {
          console.log('Login details : ', response);
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('username',response.username);
          localStorage.setItem('userType',response.userType)
          localStorage.setItem('role',response.role)
          this.contactForm.reset();
          this.router.navigate(['/home']);
          this.snackBar.open('✅ Login successfully!', 'Close', {
            duration: 5000
          });
        },
        error: (error) => {
          console.error('Error submitting login form:', error);
          this.snackBar.open('❌ Failed to submit login form. Try again.', 'Dismiss', {
            duration: 3000
          });
        }
      });
    } else {
      this.snackBar.open('⚠️ Please fill all fields correctly.', 'OK', {
        duration: 3000
      });
    }
  }
}
