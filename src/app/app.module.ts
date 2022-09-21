import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalculadoraModule } from "./calculadora/calculadora.module";
import { NeoButtonModule } from "@neomorphism/ng-neomorphism/neo-button";
import "@angular/compiler";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NeoButtonModule,
    CalculadoraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
