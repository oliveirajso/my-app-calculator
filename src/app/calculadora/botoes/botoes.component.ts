import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.css']
})
export class BotoesComponent implements OnInit {

  constructor () { }
  @Input() classe: string;
  @Input() value: number | string;
  @Output('digitou') digitou = new EventEmitter();
  ngOnInit(): void {
  }

  clicou(event) {
    console.log(event)
    this.digitou.emit({ valorDigitado: event })
  }
}
