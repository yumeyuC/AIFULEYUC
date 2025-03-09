import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  // 標註為 standalone component
  imports: [RouterModule, CommonModule],  // 如果需要 RouterModule
  templateUrl: './app.component.html',
  // template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
  // imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IFULEYUC';

  // FAQ項目數據
  faqItems = [
    {
      question: '如何辦理退換貨？',
      answer: '請參考退貨服務頁面。',
      open: false
    },
    {
      question: '退款方式及退款時間？',
      answer: '約7-8個工作天完成退款作業。',
      open: false
    },
    {
      question: '未退回的退款，是否可直接折抵新訂單？',
      answer: '很抱歉，重新訂購時無法直接於新訂單扣抵。',
      open: false
    },
    {
      question: '發票遺失是否仍能辦理退換貨？',
      answer: '很抱歉，需要有發票才能辦理退換貨。',
      open: false
    },
    {
      question: '什麼情況無法辦理退換貨？',
      answer: '超過7天退貨期限，就無法辦理。',
      open: false
    }
  ];

  // 用來切換答案的顯示與隱藏
  toggleAnswer(item: any): void {
    item.open = !item.open;
  }

  ngOnInit() {
    console.log(this.faqItems);
  }
}
