import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, ɵHttpInterceptorHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedPrimengModule } from './shared-primeng.module';

// import { MainComponent } from './direct-page/main/main.component';
// import { YumeyuLoginComponent } from './direct-page/yumeyu-login/yumeyu-login.component';

@NgModule({
  declarations: [    
    // MainComponent,
    // YumeyuLoginComponent
  ],
  imports: [
    AppComponent,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedPrimengModule,
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ɵHttpInterceptorHandler,
      multi:true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
