import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { MarkdownModule } from 'ngx-markdown';
import { NgTruncatePipeModule } from 'angular-pipes';
import { PagePreviewComponent } from './components/page-preview/page-preview.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [{
  path: '',
  component: HomepageComponent
},{
  path: 'category/:category',
  component: CategoryComponent
}, {
  path: 'article/:article',
  component: PageComponent
}];

@NgModule({
  declarations: [
    CategoryComponent,
    PagePreviewComponent,
    HomepageComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MarkdownModule.forRoot(),
    NgTruncatePipeModule
  ]
})
export class ContentModule { }
