import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User, registerUser } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user !: registerUser;
  signUpForm: FormGroup;
  errorInput: string = 'this input is required'

  constructor(private fb: FormBuilder,
    private auth: AuthService) {
     this.signUpForm = this.fb.group({
      userName: ['', Validators.required], 
      passWord: ['', Validators.required],
      passWordCheck: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(user: User) {
    if (this.signUpForm.get('passWord')?.value === this.signUpForm.get('passWordCheck')?.value &&
     this.signUpForm.get('passWord')?.value < 0 ) {
      this.user = this.signUpForm.value;
      this.auth.addUser(user).subscribe()
    }
   }
}
