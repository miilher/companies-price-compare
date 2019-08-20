import { Component, OnInit, Renderer  } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PriceService } from '../../services/price/price.service';
import { Company } from '../../interface/icompany';

@Component({
  selector: 'app-price-company',
  templateUrl: './price-company.component.html',
  styleUrls: ['./price-company.component.scss']
})
export class PriceCompanyComponent implements OnInit {

  company;
  dataCompany: Company = null;
  error = null;
  loader = false;

  labels = null;
  prices = null;

  selectedValues = [];

  user = {
    codes: null
  };

  userForm: FormGroup;

  valuesCompany = [
    {
      title: 'Google',
      value: 'goog'
    },
    {
      title: 'Facebook',
      value: 'fb'
    },
    {
      title: 'Apple',
      value: 'AAPL'
    },
  ];

  constructor(private priceService: PriceService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.formBuilder.group({
      codes: [this.user.codes]
    });
  }

  searchButton() {
    if (!this.userForm.valid) {
      return;
    }
    this.error = null;
    if (this.userForm.value.codes.length > 1) {
      this.getCompany(this.userForm.value.codes);
    } else {
      this.error = 'Selecione a partir de duas!';
      this.dataCompany = null;
    }
  }

  getCompany(company) {
    this.loader = true;
    this.dataCompany = null;
    this.priceService.getPriceOnCompany(company).subscribe(
      response => {
        this.labels = null;
        this.prices = null;
        if (response.Error) {
          this.treatError(response.Error);
        } else if (response.companiesPriceList) {
          this.dataCompany = response;
          this.mountLabelsAndPrices(this.dataCompany.companiesPriceList);
        } else if (response.price) {
          this.treatError('É necessário 2 empresas ou mais para comparar');
        }
        this.loader = false;

      }, error => {
        this.loader = false;
        this.treatError(error.mensagem);
      }
    );
  }

  mountLabelsAndPrices(companyData: any) {
    this.labels = companyData.map(e => {
      return (e.symbol);
    });

    this.prices = companyData.map(f => {
      return (f.price);
    });

  }

  treatError(error) {
    this.dataCompany = null;
    this.error = error;
  }
}
