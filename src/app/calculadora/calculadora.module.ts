
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BotoesComponent } from './botoes/botoes.component';
import { CalculadoraComponent } from './calculadora.component';




@NgModule({
  declarations: [
    BotoesComponent,
    CalculadoraComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    BotoesComponent,
    CalculadoraComponent,

  ]
})
export class CalculadoraModule { }
