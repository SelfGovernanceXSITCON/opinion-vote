import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [],
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.css',
})
export class VoteComponent {
  dc_id!: string;
  users!: Array<string>;
  error = '';
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.queryParams.subscribe((params) => {
      this.dc_id = params['dc_id'];
      console.log(this.dc_id);
    });
    this.getUsers();
  }

  getUsers() {
    this.http
      .get<any[]>('http://localhost:3000/api/event/candidates')
      .subscribe({
        next: (data) => {
          this.users = data; // Assign fetched data to opinions array
        },
        error: (error) => {
          console.error('Error fetching opinions:', error); // Handle errors
        },
        // Add a completion handler if necessary (e.g., cleanup logic)
        // complete: () => console.log('Opinions fetched successfully')
      });
  }

  vote(candidateNumber: number) {
    this.http
      .post<any[]>(
        `http://localhost:3000/api/vote/${this.dc_id}/${candidateNumber}`,
        {}
      )
      .subscribe({
        next: (data) => {
          // Assign fetched data to opinions array
          this.users = [];
        },
        error: (error) => {
          console.error('Error fetching opinions:', error); // Handle errors
          this.error = error;
        },
        // Add a completion handler if necessary (e.g., cleanup logic)
        // complete: () => console.log('Opinions fetched successfully')
      });
  }
}
