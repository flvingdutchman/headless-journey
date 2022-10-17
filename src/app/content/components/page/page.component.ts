import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PageView, ImageView } from '@headless-world/graphql';
import { Apollo } from 'apollo-angular';
import { PAGE_BY_SLUG_QUERY, PageDto } from '../../graphql/page.query';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  public page: PageView | null = null;
  public pageNotFound = false;

  constructor(private readonly activatedRoute: ActivatedRoute,
    private readonly apollo: Apollo,
    private readonly titleService: Title) {}

  ngOnInit(): void {
    const slug = this.activatedRoute.snapshot.paramMap.get('article');

    this.apollo.watchQuery<PageDto>({
      query: PAGE_BY_SLUG_QUERY,
      variables: {
        locale: 'en',
        slug
      }
    })
    .valueChanges
    .subscribe(({data}) => {
      if (data.pages.data.length > 0) {
        this.page = data.pages.data[0];
        this.titleService.setTitle(this.page.attributes.Title);
      } else {
        this.pageNotFound = true;
      }
    });
  }
}
