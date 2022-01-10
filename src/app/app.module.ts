import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdformComponent } from './tdform/tdform.component';
import { RdformComponent } from './rdform/rdform.component';
import { BusinessComponent } from './business/business.component';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { HttpComponent } from './http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    TdformComponent,
    RdformComponent,
    BusinessComponent,
    ShortenPipe,
    FilterPipe,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
