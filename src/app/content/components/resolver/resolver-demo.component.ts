import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-resolver-demo',
  template: `
    <div *ngFor="let component of components">
      <app-cms-component [componentData]="component"></app-cms-component>
    </div>
  `
})
export class ResolverDemoComponent implements OnInit {

  public components = [{
    type: 'simple_text',
    data: {
      name: 'Vasily'
    }
  }, {
    type: 'simple_text',
    data: {
      name: 'Michael'
    }
  }];

  ngOnInit(): void {
  }
}
