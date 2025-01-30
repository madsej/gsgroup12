import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calculator',
  template: `
    <input [(ngModel)]="principal" placeholder="Initial Investment">
    <input [(ngModel)]="years" placeholder="Years">
    <button (click)="calculate()">Calculate</button>
    <div>Future Value: ${{ futureValue | number:'1.2-2' }}</div>
  `
})
export class CalculatorComponent {
  principal: number = 200000;
  years: number = 3;
  futureValue: number = 0;

  constructor(private http: HttpClient) {}

  calculate() {
    const url = `/api/investment/future-value?ticker=VFIAX&principal=${this.principal}&years=${this.years}`;
    this.http.get<number>(url).subscribe(result => this.futureValue = result);
  }
}
