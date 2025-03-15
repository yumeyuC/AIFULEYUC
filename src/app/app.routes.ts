import { Routes } from '@angular/router';
import { MainPageComponent } from './direct-page/main-page/main-page.component';

export const routes: Routes = [
    { 
        path: '',
        // component: YumeyuMainPageComponent,
        loadComponent: () => import('./direct-page/yumeyu-main-page/yumeyu-main-page.component').then(m=>m.YumeyuMainPageComponent),
        loadChildren: () => import('./direct-page/yumeyu-main-page/yumeyu-routing.module').then(m=>m.YumeyuRoutingModule),
    },
    { 
        path: 'yu',
        // component: YumeyuMainPageComponent,
        loadComponent: () => import('./direct-page/yumeyu-main-page/yumeyu-main-page.component').then(m=>m.YumeyuMainPageComponent),
        loadChildren: () => import('./direct-page/yumeyu-main-page/yumeyu-routing.module').then(m=>m.YumeyuRoutingModule),
    },
    { path: 'login', component: MainPageComponent },  // 設定 /login 路由，顯示 MainPageComponent
    { path: '**', redirectTo: '/yu' },
    
];
