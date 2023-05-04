import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoreComponent } from './bore/bore.component';
import { CatComponent } from './cat/cat.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BoreComponent,
    CatComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass : LoaderInterceptor, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
