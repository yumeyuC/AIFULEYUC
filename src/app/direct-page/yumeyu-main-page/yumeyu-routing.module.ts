import { NgModule } from '@angular/core';
import { FirstPageComponent } from '../../txn/first-page/first-page.component';
import { SecPageComponent } from '../../txn/sec-page/sec-page.component';
import { Route, RouterModule, Routes } from '@angular/router';

const routes: Routes =  [
  { path: 'fir', component: FirstPageComponent },
  { path: 'sec', component: SecPageComponent },
  { path: '**', redirectTo: '/sec' },
] as Route[];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // ✅ 使用 forChild()
  exports: [RouterModule]
})
export class YumeyuRoutingModule { }
