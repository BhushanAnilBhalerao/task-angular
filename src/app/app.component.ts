import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-management';
  constructor(private router: Router, private apiService: ApiService) {
  }

  ngOnInit() {
    this.router.navigate(['../login']);
  }

}
