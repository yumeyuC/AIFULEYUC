import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  // 標註為 standalone component
  imports: [RouterModule],  // 如果需要 RouterModule
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
  // imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IFULEYUC';
}
