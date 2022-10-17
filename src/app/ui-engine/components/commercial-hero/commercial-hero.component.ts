import { Component, OnInit, Input } from '@angular/core';
import { ComponentCommercialHeroView } from '@headless-world/graphql';

@Component({
  selector: 'app-commercial-hero',
  templateUrl: './commercial-hero.component.html',
  styleUrls: ['./commercial-hero.component.scss']
})
export class CommercialHeroComponent implements OnInit {

  @Input()
  public data!: ComponentCommercialHeroView;

  constructor() { }

  ngOnInit(): void {
  }

}
