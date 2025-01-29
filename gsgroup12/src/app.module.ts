// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { HomeComponent } from './home/home.component';

// @NgModule({
//   imports: [
//     BrowserModule,
//     AppComponent,   // Import AppComponent here (instead of declarations)
//     HomeComponent,  // Import HomeComponent here (instead of declarations)
//   ],
//   providers: [],
//   bootstrap: [AppComponent],  // Bootstrap the AppComponent
// })
// export class AppModule {}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule here
import { AppComponent } from './app.component';
import { FundSelectorComponent } from './fund-selector.component';
import { CalculatorComponent } from './calculator.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FundSelectorComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,         // Add FormsModule here
    HttpClientModule     // If not already imported
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
