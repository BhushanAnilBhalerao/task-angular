import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { catchError, throwError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  faSignIn = faSignIn;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private router: Router, private apiService: ApiService) {
  }


  onSubmit() {

    if (this.loginForm.valid) {
      this.apiService.login(this.loginForm.value).pipe(
        catchError(error => {
          console.error('Error:', error);
          if (error.status === 401) {
            alert('User Not Found. Please Sign Up.');
            this.router.navigate(['/registration']);
          } else if (error.status === 500) {
            alert('An error occurred. Please try again later.');
          }
          return new error
        })
      ).subscribe({
        next: (result) => {
          console.log(result);
          if (result.success) {
            this.router.navigate(['/details']);
          }
        }
      });
    }
  }

}


