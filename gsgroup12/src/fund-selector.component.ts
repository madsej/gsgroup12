import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fund-selector',
  template: `
    <select [(ngModel)]="selectedTicker">
      <option *ngFor="let fund of mutualFunds" [value]="fund.ticker">{{ fund.ticker }}</option>
    </select>
  `
})
export class FundSelectorComponent implements OnInit {
  mutualFunds: any[] = [];
  selectedTicker: string = 'VFIAX';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('/api/mutual-funds').subscribe(data => this.mutualFunds = data);
  }
}
