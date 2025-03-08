import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-yumeyu-login',
  standalone: true,  // 標註為 standalone component
  imports: [RouterModule],  // 匯入 RouterModule
  templateUrl: './yumeyu-login.component.html',
  styleUrl: './yumeyu-login.component.css'
})
export class YumeyuLoginComponent {

}
