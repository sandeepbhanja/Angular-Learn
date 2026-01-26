import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-investment-details',
  imports: [],
  templateUrl: './investment-details.html',
  styleUrl: './investment-details.css',
})
export class InvestmentDetails {
  investmentDetailsReceived = input<any>();
  investmenTableData = computed(() => this.investmentDetailsReceived());
}
