import { Component, ViewChild, Input, OnInit } from "@angular/core";
import {ComponentHost} from '../../directives/component-host.directive';
import { CmsComponentService } from "../../services/cms-components.service";

interface GenericCmsComponent {
  data: any;
}


@Component({
  selector: 'app-cms-component',
  template: `
    <ng-template componentHost></ng-template>
  `
})
export class CmsComponent implements OnInit {
  @ViewChild(ComponentHost, {static: true})
  componentHost!: ComponentHost;

  @Input()
  componentData: any;

  constructor(private readonly componentService: CmsComponentService) {}

  ngOnInit(): void {
    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();

    const component = this.componentService.getComponentForType(this.componentData.__typename);
    if (component) {
      const componentRef = viewContainerRef.createComponent<GenericCmsComponent>(component);
      componentRef.instance.data = this.componentData;
    }
  }
}
