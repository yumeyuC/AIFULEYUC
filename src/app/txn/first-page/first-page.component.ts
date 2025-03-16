import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  imports: [],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent implements OnInit {
  ngOnInit(): void {
    console.log("FirstPageComponent ngOnInit");
  }
}
