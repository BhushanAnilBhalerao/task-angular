import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUserPlus, } from '@fortawesome/free-solid-svg-icons';
import { catchError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  faUserPlus = faUserPlus
  registrationForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
  });


  constructor(private router: Router, private apiService: ApiService) { }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.apiService.register(this.registrationForm.value).pipe(
        catchError(error => {
          console.error('Error:', error);
          if (error.status === 400) {
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
