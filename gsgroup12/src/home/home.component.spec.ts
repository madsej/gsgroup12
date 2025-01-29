
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // Mutual Funds List
  mutualFunds = [
    { ticker: 'VFIAX', name: 'Vanguard 500 Index Fund' },
    { ticker: 'FCNTX', name: 'Fidelity Contrafund' },
    { ticker: 'AGTHX', name: 'American Funds Growth Fund' },
  ];

  // User Inputs
  selectedTicker: string = this.mutualFunds[0].ticker; // Default selection
  principal: number = 0;
  years: number = 0;

  // Investment Result
  futureValue: number | null = null;

  // Hardcoded risk-free rate (US Treasury Rate)
  riskFreeRate: number = 0.04; // Example: 4%

  // Sample beta values for each mutual fund
  betaValues: { [key: string]: number } = {
    VFIAX: 1.02,
    FCNTX: 1.15,
    AGTHX: 1.10,
  };

  // Sample market return rate (Historical S&P 500 return)
  marketReturnRate: number = 0.08; // Example: 8%

  // Calculation Method
  calculateInvestment(): void {
    if (this.principal <= 0 || this.years <= 0) {
      alert('Please enter a valid investment amount and duration.');
      return;
    }

    // Get Beta Value for Selected Mutual Fund
    const beta = this.betaValues[this.selectedTicker] || 1;

    // Calculate Expected Rate of Return using CAPM Formula
    const r = this.riskFreeRate + beta * (this.marketReturnRate - this.riskFreeRate);

    // Future Value Formula: FV = P * e^(r * t)
    this.futureValue = this.principal * Math.exp(r * this.years);
  }
}
