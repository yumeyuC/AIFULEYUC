import { Routes } from '@angular/router';
import { MainComponent } from './direct-page/main/main.component';
import { YumeyuLoginComponent } from './direct-page/yumeyu-login/yumeyu-login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // 設定根路徑的首頁
  { path: 'login', component: MainComponent }, // 設定 /login 路由，顯示 MainComponent
  { path: 'yu', component: YumeyuLoginComponent }, // 設定 /yulogin 路由，顯示 YumeyuLoginComponent
];
