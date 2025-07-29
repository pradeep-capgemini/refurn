import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { }



  ngOnInit(): void {
    this.contactForm = this.fb.group({
      city: ['', Validators.required],
      pinCode: ['', Validators.required],
      address: ['', Validators.required],
      contactNo: ['', Validators.required,
        Validators.pattern(/^[0-9]{10}$/) // Only 10 digits
      ],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit():void {
    
  }

}
