import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  profileForm: any;
  constructor() { }
  
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.minLength(4)),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
    });
  }
 
  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
