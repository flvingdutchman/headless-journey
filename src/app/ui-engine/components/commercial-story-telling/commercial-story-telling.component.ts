import { Component, OnInit, Input } from '@angular/core';
import { ComponentCommercialStoryTellingView } from '@headless-world/graphql';

@Component({
  selector: 'app-commercial-story-telling',
  templateUrl: './commercial-story-telling.component.html',
  styleUrls: ['./commercial-story-telling.component.scss']
})
export class CommercialStoryTellingComponent implements OnInit {

  @Input()
  data!: ComponentCommercialStoryTellingView;

  constructor() { }

  ngOnInit(): void {
  }

}
