import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageView, ImageView } from '@headless-world/graphql';
import { Apollo } from 'apollo-angular';
import { PAGE_BY_SLUG_QUERY, ContentDto } from '../../graphql/page.query';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  public page: PageView | null = null;
  public heroImage: ImageView | null = null;
  public pageNotFound = false;

  constructor(private readonly activatedRoute: ActivatedRoute,
    private readonly apollo: Apollo) {}

  ngOnInit(): void {
    const slug = this.activatedRoute.snapshot.paramMap.get('article');

    this.apollo.watchQuery<ContentDto>({
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
        this.heroImage = this.page.attributes.hero_image;
      } else {
        this.pageNotFound = true;
      }
    });
  }
}
