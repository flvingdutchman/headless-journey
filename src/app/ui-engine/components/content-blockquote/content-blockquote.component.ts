import { Component, Input, OnInit } from '@angular/core';
import { ComponentContentBlockquoteView } from '@headless-world/graphql';

@Component({
  selector: 'app-content-blockquote',
  templateUrl: './content-blockquote.component.html',
  styleUrls: ['./content-blockquote.component.scss']
})
export class ContentBlockquoteComponent implements OnInit {

  @Input()
  public data!: ComponentContentBlockquoteView;

  constructor() { }

  ngOnInit(): void {
  }

}
