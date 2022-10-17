import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-text',
  templateUrl: './simple-text.component.html',
  styleUrls: ['./simple-text.component.scss']
})
export class SimpleTextComponent implements OnInit {

  @Input()
  data!: {
    name: string;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
