import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrls: [
    './main.component.css',
    './main_ex.component.css'  // 這樣就會載入兩個 CSS 檔案
  ]
})
export class MainComponent {
  title = 'WillyChen';

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
