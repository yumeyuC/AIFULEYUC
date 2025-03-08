import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrls: [
    './main.component.css',
    './main_ex.component.css'  // 這樣就會載入兩個 CSS 檔案
  ]
})
export class MainComponent {
  title = 'WillyChen';
}
