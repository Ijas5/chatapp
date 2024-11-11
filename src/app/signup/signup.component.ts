import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  

    email: string = '';
    password: string = '';
    remember: boolean = false;
  
    constructor(private router: Router) {}
  
    onSubmit() {
      // Handle login logic here, for now just logging the data
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      console.log('Remember me:', this.remember);
  
      // After successful login, navigate to the dashboard or another route
      this.router.navigate(['/dashboard']);
    }
  }
  
 
  
