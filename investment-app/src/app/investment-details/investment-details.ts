import { CurrencyPipe,DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
@Component({
  selector: 'app-investment-details',
  imports: [CurrencyPipe,DatePipe],
  templateUrl: './investment-details.html',
  styleUrl: './investment-details.css',
})
export class InvestmentDetails {
  investmentDetailsReceived = input<any>();
  investmenTableData = computed(() => this.investmentDetailsReceived());
}
