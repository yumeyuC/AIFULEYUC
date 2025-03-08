import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccessGuard } from './shared/service/access.guard';

import { MainComponent } from './direct-page/main/main.component';
import { YumeyuLoginComponent } from './direct-page/yumeyu-login/yumeyu-login.component';

const routes: Routes = [  
  { path: '', component: YumeyuLoginComponent },         // 根頁面，顯示 MainComponent
  { path: 'login', component: MainComponent },           // /login 路徑，顯示 LoginComponent
  { path: 'yu', component: YumeyuLoginComponent },  // /yulogin 路徑，顯示 YumeyuLoginComponent
  {
    path: 'protected',
    component: MainComponent,
    canActivateChild: [AccessGuard],
    children: [
      { path: 'login', component: MainComponent },
      { path: 'yulogin', component: YumeyuLoginComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
