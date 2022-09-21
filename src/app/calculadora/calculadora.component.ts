import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  @Input() result: string;

  OnMudouValor(evento) {

    if (evento.valorDigitado != '0' && this.result.slice(0, 1) === '0') {
      this.result = this.result.substring(0, this.result.length - (this.result.length + 1))
    };


    this.result += evento.valorDigitado;
    console.log(evento.valorDigitado);
  }
  calc() {
    var result = eval(this.result);
    this.result = result;
  }
  clear() {
    this.result = "0";
  }
  constructor () { }


  ngOnInit(): void {
  }

}
