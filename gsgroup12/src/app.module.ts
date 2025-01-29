import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,   // Import AppComponent here (instead of declarations)
    HomeComponent,  // Import HomeComponent here (instead of declarations)
  ],
  providers: [],
  bootstrap: [AppComponent],  // Bootstrap the AppComponent
})
export class AppModule {}
