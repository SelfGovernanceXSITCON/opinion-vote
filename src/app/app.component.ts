import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IssuesComponent } from "./issues/issues.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, IssuesComponent]
})
export class AppComponent {
  title = 'opinion-vote';
}
