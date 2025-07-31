

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RefurnServiceService } from '../services/refurn-service.service';
import { AbstractControl, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})



export class SignupComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private refurnService: RefurnServiceService
  ) { }

  ngOnInit(): void {
    
this.contactForm = this.fb.group({
      city: ['', Validators.required],
      pinCode: ['', Validators.required],
      address: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email, this.noSpaceValidator]],
      username: ['', [Validators.required, this.noSpaceValidator]],
      password: ['', [Validators.required, Validators.minLength(6), this.noSpaceValidator]],
      userType: ['', Validators.required]
    });

  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const contactFormData = this.contactForm.value;
      console.log('formData:',contactFormData);
      this.refurnService.register(contactFormData).subscribe({
        next: (response) => {
          console.log('SignUp details submitted successfully:', response);
          this.contactForm.reset();
          this.router.navigate(['/login']);
          this.snackBar.open('✅ SignUp Details submitted successfully!', 'Close', {
            duration: 5000
          });
        },
        error: (error) => {
          console.error('Error submitting contact form:', error);
          this.snackBar.open('❌ Failed to submit contact form. Try again.', 'Dismiss', {
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



  noSpaceValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value && /\s/.test(control.value)) {
      return { noSpace: true };
    }
    return null;
  }
}

