import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora.component';
import { BotoesComponent } from './botoes/botoes.component';
import { NeoButtonModule } from '@neomorphism/ng-neomorphism/neo-button';



@NgModule({
  declarations: [
    BotoesComponent,
    CalculadoraComponent
  ],
  imports: [
    CommonModule,
    NeoButtonModule
  ],
  exports: [
    BotoesComponent,
    CalculadoraComponent,
    NeoButtonModule
  ]
})
export class CalculadoraModule { }
