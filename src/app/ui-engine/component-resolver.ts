import { InjectionToken } from "@angular/core";
import { ComponentResolver } from "./types";

export const COMPONENT_RESOLVER = new InjectionToken<ComponentResolver[]>('COMPONENT_RESOLVER');
