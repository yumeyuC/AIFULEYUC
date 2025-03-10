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
      question: '就職前經歷',
      answer: '大學就讀文化大學大氣科學系。<br/>' +
              '退伍曾嘗試考公職、颱風展解說、手機客服、國小安親導師，因薪水考量到資策會學習C#、.net、MSSQL、HTML等基礎知識。<br/>'
      ,
      open: false
    },
    {
      question: '第一份工作就任榮利科技(5年)',
      answer: '<ol class="numbered-list">'+
              '<li>開發富邦國外匯款系統(Java、Git操作)，</li>'+
              '<li>維護集保證券系統(COBOL)，</li>'+
              '<li>開發新證券平台(Typescript、Devops、SA工作)，</li>'+
              '</ol>'+
              '因加班頻繁決定離職，到現任的「博訊科技」。',
      open: false
    },
    {
      question: '第二份工作就任博訊科技(約2年)',
      answer: '<ol class="numbered-list">'+
              '<li>維護採購系統。</li>'+
              '<li>維護網站(串接webService、串接ELK資料、維護Batch程式)</li>'+
              '<li>開發、維護工時系統。</li>'+
              '<li>開發、維護出勤(加班)系統。(擔任PG、SA、PM)</li>'+
              '</ol>'+
              '因即將搬至通勤時間來回增加兩小時的地點，<br/>通勤時間考量，決定尋找新公司。',
      open: false
    },
    {
      question: 'window form小工具',
      answer: '<a target="_blank" href="https://github.com/atmos9521/CutTelString">讀取EXCEL檔案切電文工具</a><br/>' +
              '<a target="_blank" href="https://github.com/atmos9521/PicBackup">爬蟲下載圖片</a><br/>'+
              '<a target="_blank" href="https://github.com/atmos9521/GoogleService">取得google Excel資料</a><br/>'
              ,
      open: false
    },
    {
      question: '近期計畫',
      answer: '<ul>'+
              '<li>在gitHub架設靜態網站。</li>'+
              '<li>4月底日本自由行。</li>'+
              '<ul/>'
              ,
      open: false
    },
    {
      question: '長期學習目標',
      answer: '設置伺服器，網站改為動態網站。'
              ,
      open: false
    },
    {
      question: '休閒興趣',
      answer: '<ul>'+
              '<li>程式編輯。</li>'+
              '<li>甜點製作。</li>'+
              '<ul/>'
              ,
      open: false
    },
  ];

  // 用來切換答案的顯示與隱藏
  toggleAnswer(item: any): void {
    item.open = !item.open;
  }

  ngOnInit() {
    console.log(this.faqItems);
  }
}
