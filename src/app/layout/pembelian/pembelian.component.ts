import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

import { HeaderComponent } from '../shared/header.component';

@Component({
  selector: 'app-pembelian',
  styleUrls: ['./pembelian.component.css'],
  templateUrl: './pembelian.component.html',
})
export class PembelianComponent {
  date: DateModel;
  options: DatePickerOptions;

  constructor() {
    this.options = new DatePickerOptions();
  }
}