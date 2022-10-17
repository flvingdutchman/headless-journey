import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentHost } from './directives/component-host.directive';
import { SimpleTextComponent } from './components/simple-text/simple-text.component';
import { COMPONENT_RESOLVER } from './component-resolver';
import { CmsComponent } from './components/cms-component/cms-component.component';
import { CmsComponentService } from './services/cms-components.service';
import { CommercialStoryTellingComponent } from './components/commercial-story-telling/commercial-story-telling.component';
import { ContentBlockquoteComponent } from './components/content-blockquote/content-blockquote.component';
import { CommercialHeroComponent } from './components/commercial-hero/commercial-hero.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    ComponentHost,
    SimpleTextComponent,
    CommercialStoryTellingComponent,
    ContentBlockquoteComponent,
    CommercialHeroComponent,
    CmsComponent
  ],
  imports: [
    CommonModule,
    MarkdownModule
  ],
  exports: [
    CmsComponent
  ],
  providers: [
    CmsComponentService,
    {
      provide: COMPONENT_RESOLVER,
      multi: true,
      useValue: {
        typeName: 'ComponentCommercialStoryTelling',
        component: CommercialStoryTellingComponent
      }
    },
    {
      provide: COMPONENT_RESOLVER,
      multi: true,
      useValue: {
        typeName: 'ComponentContentBlockquote',
        component: ContentBlockquoteComponent
      }
    },
    {
      provide: COMPONENT_RESOLVER,
      multi: true,
      useValue: {
        typeName: 'ComponentCommercialHero',
        component: CommercialHeroComponent
      }
    }
  ]
})
export class UiEngineModule {}
