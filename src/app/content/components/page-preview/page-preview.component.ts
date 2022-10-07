import { Component, Input, OnInit } from '@angular/core';
import { PageView } from '@headless-world/graphql';

@Component({
  selector: 'app-page-preview',
  templateUrl: './page-preview.component.html',
  styleUrls: ['./page-preview.component.scss']
})
export class PagePreviewComponent implements OnInit {
  @Input()
  public page: PageView | null = null;

  ngOnInit(): void {
  }
}
