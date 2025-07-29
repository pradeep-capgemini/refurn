import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  contactForm!:FormGroup

  constructor(private fb: FormBuilder) { }
  
  
    ngOnInit(): void {
      this.contactForm = this.fb.group({
        userName: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }

  onSubmit():void {
    
  }

}
