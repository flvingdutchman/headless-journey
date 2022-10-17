import { Injectable, Injector } from '@angular/core';
import { COMPONENT_RESOLVER } from '../component-resolver';
import { ComponentResolver } from '../types';

@Injectable()
export class CmsComponentService {
  private componentsMap: {[key: string]: any} = {};

  constructor(private readonly injector: Injector) {
    const availableComponents = this.injector.get(COMPONENT_RESOLVER) as ComponentResolver[];

    for (const resolver of availableComponents) {
      this.componentsMap[resolver.typeName] = resolver.component;
    }
  }

  public getComponentForType(type: string) {
    return this.componentsMap[type];
  }
}
