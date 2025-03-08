import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,  // 標註為 standalone component
  imports: [RouterModule],  // 匯入 RouterModule
  templateUrl: './main.component.html',
  styleUrls: [
    './main.component.css',
    './main_ex.component.css'  // 這樣就會載入兩個 CSS 檔案
  ]
})
export class MainComponent {
  title = 'WillyChen';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    const questions = document.querySelectorAll('.question');

    function toggleOpen(event: Event) {
      const list = (event.target as HTMLElement).closest('li');
      if (list) {
        const answer = list.querySelector('.answer');
        if (list.classList.contains('open')) {
          answer?.classList.remove('slide-down');
          answer?.classList.add('slide-up');
          list.classList.remove('open');
        } else {
          answer?.classList.remove('slide-up');
          answer?.classList.add('slide-down');
          list.classList.add('open');
        }
      }
    }

    questions.forEach(question => {
      question.addEventListener('click', toggleOpen);
    });
  }
}
