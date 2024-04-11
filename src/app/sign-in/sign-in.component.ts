import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user!: User; 
  signInForm: FormGroup;
  errorInput: string = 'this input is required'
  errorInSing: string = ''

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router) {
    this.signInForm = this.fb.group({
      userName: ['', Validators.required], 
      passWord: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.user = this.signInForm.value;
    this.auth.getUser().subscribe(users => {
         const matchingUser = users.find(user => user.userName === this.signInForm.get('userName')?.value
        && user.passWord === this.signInForm.get('passWord')?.value
        );
       if (matchingUser) {
         this.router.navigate(['/cats']);
       } else {
        this.errorInSing = 'Invalid username or password';
       }
    });
   }
}