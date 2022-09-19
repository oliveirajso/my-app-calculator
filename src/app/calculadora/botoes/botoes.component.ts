import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.css']
})
export class BotoesComponent implements OnInit {

  constructor () { }
  @Input() classe: string;
  @Input() value: number | string;
  @Output()
  ngOnInit(): void {
  }

  clicou(event) {
    console.log(event.value)
    console.log(this.value)
  }
}
