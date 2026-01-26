import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Investment } from '../data/Investment.Interface';
import { InvestmentService } from '../investment-details/investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  initialInvestment = signal<number>(0);
  annualInvestment = signal<number>(0);
  duration = signal<number>(0);
  expectedReturn = signal<number>(0);
  investmentDetailsToShow = output<any>();

  investmentService = inject(InvestmentService);

  onSubmit() {
    let investmentData: Investment = {
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      duration: this.duration(),
      expectedReturn: this.expectedReturn(),
    };

    let investment = this.investmentService.calculateInvestmentResults(investmentData);
    this.investmentDetailsToShow.emit(investment);
  }
}
