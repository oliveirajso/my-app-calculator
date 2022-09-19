import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  @Input() result: any;
  
  clicou(evento) {
    console.log(evento);
  }

  constructor () { }


  ngOnInit(): void {
  }

}
