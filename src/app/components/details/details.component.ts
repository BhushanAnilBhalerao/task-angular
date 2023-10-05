import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent {
  completeData : any
  cols = [
    { field: 'id', header: 'Id' },
    { field: 'name', header: 'Name' },
    { field: 'username', header: 'Username' },
];
  
  constructor(private router: Router, private apiService : ApiService) {}

  ngOnInit() {
    this.apiService.getCompleteUserData().subscribe(
      (result) => {
        if (result) {
          this.completeData = result
        }
      },
    );
  }

}
