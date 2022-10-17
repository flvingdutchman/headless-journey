import { Component, Input, OnInit } from '@angular/core';
import { PagePreviewView } from '@headless-world/graphql';

@Component({
  selector: 'app-page-preview',
  templateUrl: './page-preview.component.html',
  styleUrls: ['./page-preview.component.scss']
})
export class PagePreviewComponent implements OnInit {
  @Input()
  public page: PagePreviewView | null = null;

  ngOnInit(): void {
  }
}
