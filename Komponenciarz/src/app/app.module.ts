import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SynComponent } from 'src/components/syn.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KalkulatorService } from "../components/kalkulator.service";

@NgModule({
  declarations: [
    AppComponent,
    SynComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [KalkulatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
