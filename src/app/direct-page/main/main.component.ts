import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrls: [
    './main.component.css',
    './main_ex.component.css'  // 這樣就會載入兩個 CSS 檔案
  ]
})
export class MainComponent implements OnInit {
  title = 'WillyChen';

  // FAQ項目數據
  faqItems = [
    {
      question: '自我介紹：',
      answer: '大學就讀文化大學大氣科學系。' +
              '退伍曾嘗試考公職、颱風展解說、手機客服、國小安親導師，因薪水考量到資策會學習C#、.net、MSSQL、HTML等基礎知識。<br/>'+
              '第一份工作就任榮利科技(5年)，<br/>'+
              ''
      ,
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
