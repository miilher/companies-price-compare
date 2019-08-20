import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxMaskModule } from 'ngx-mask';
import { MzSelectModule } from 'ngx-materialize';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { PriceCompanyComponent } from './pages/price-company/price-company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailCompanyComponent } from './pages/price-company/detail-price/detail-company.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ChartistModule } from 'ng-chartist';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PriceCompanyComponent,
    DetailCompanyComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MzSelectModule,
    NgxMaskModule.forRoot(),
    ChartistModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
