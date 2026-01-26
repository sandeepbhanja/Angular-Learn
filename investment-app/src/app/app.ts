import { Component, signal } from '@angular/core';
import { Investment } from './data/Investment.Interface';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { InvestmentDetails } from "./investment-details/investment-details";

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentDetails],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('investment-app');

  showInvestmentTable = signal<boolean>(false);
  investDetails = signal<Investment>({});

  detailsReceived(investmentDetails:any) {
    console.log("detailsRecevied",investmentDetails)
    this.showInvestmentTable.set(true);
    this.investDetails.set(investmentDetails);
  }
}
