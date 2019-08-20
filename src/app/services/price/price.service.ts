import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../../interface/icompany';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  baseURL = 'https://financialmodelingprep.com/api/v3/stock/real-time-price/';
  constructor(public http: HttpClient) {}

  getPriceOnCompany(company) {
    return this.http.get<Company>(this.baseURL + company);
  }

}
