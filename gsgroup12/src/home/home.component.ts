import { Component, OnInit } from '@angular/core';
import { InvestmentService } from '../service/investment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  mutualFunds = [
    { ticker: 'VFIAX', name: 'Vanguard 500 Index Fund' },
    { ticker: 'FCNTX', name: 'Fidelity Contrafund' },
    { ticker: 'AGTHX', name: 'American Funds Growth Fund' },
  ];

  selectedTicker: string = this.mutualFunds[0].ticker;
  principal: number = 0;
  years: number = 0;
  futureValue: number | null = null;

  riskFreeRate: number = 0.04; // Hardcoded risk-free rate (US Treasury Rate)
  beta: number = 1; // Default value before fetching from API
  marketReturnRate: number = 0.08; // Default S&P 500 return before API call

  constructor(private investmentService: InvestmentService) {}

  ngOnInit(): void {
    this.fetchMarketReturnRate();
    this.fetchBetaValue();
  }

  // Fetch Beta Value from API
  fetchBetaValue(): void {
    this.investmentService.getBetaValue(this.selectedTicker).subscribe(
      (data) => {
        this.beta = data.beta || 1; // Default to 1 if API fails
      },
      (error) => {
        console.error('Error fetching beta:', error);
      }
      
    );
  }

  // Fetch Market Return Rate from API
  fetchMarketReturnRate(): void {
    this.investmentService.getMarketReturnRate().subscribe(
      (data) => {
        const observations = data.observations;
        if (observations.length >= 2) {
          // Calculate market return rate using first & last values of the year
          const firstValue = parseFloat(observations[0].value);
          const lastValue = parseFloat(observations[observations.length - 1].value);
          this.marketReturnRate = (lastValue - firstValue) / firstValue;
        }
      },
      (error) => {
        console.error('Error fetching market return rate:', error);
      }
    );
  }

  // Calculate Future Investment Value
  calculateInvestment(): void {
    if (this.principal <= 0 || this.years <= 0) {
      alert('Please enter a valid investment amount and duration.');
      return;
    }

    const r = this.riskFreeRate + this.beta * (this.marketReturnRate - this.riskFreeRate);
    this.futureValue = this.principal * Math.exp(r * this.years);
  }
}
