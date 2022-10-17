import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UiEngineModule } from '@headless-world/ui-engine';
import { CategoryComponent } from './components/category/category.component';
import { MarkdownModule } from 'ngx-markdown';
import { NgTruncatePipeModule } from 'angular-pipes';
import { PagePreviewComponent } from './components/page-preview/page-preview.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PageComponent } from './components/page/page.component';
import { ResolverDemoComponent } from './components/resolver/resolver-demo.component';

const routes: Routes = [{
  path: '',
  component: HomepageComponent
},{
  path: 'category/:category',
  component: CategoryComponent
}, {
  path: 'article/:article',
  component: PageComponent
}, {
  path: 'test',
  component: ResolverDemoComponent
}];

@NgModule({
  declarations: [
    CategoryComponent,
    PagePreviewComponent,
    HomepageComponent,
    PageComponent,
    ResolverDemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MarkdownModule.forRoot(),
    NgTruncatePipeModule,
    UiEngineModule
  ]
})
export class ContentModule { }
