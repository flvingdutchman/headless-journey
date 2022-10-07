import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { PageView } from '@headless-world/graphql';
import { CONTENT_IN_CATEGORIES_QUERY, ContentDto } from '../../graphql/category-content.query';
import { filter } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public categoryName: string | null = null;
  public pages: PageView[] = [];
  public loading: boolean = true;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly apollo: Apollo,
    private readonly titleService: Title
  ) { }

  ngOnInit(): void {
    this.categoryName = this.activatedRoute.snapshot.paramMap.get('category');
    this.titleService.setTitle(`Content in category ${this.categoryName}`);

    this.apollo.watchQuery<ContentDto>({
      query: CONTENT_IN_CATEGORIES_QUERY,
      variables: {
        locale: 'en',
        category: this.categoryName
      }
    })
    .valueChanges
    .pipe(
      filter(({loading}) => !loading)
    )
    .subscribe(({loading, data}) => {
      this.loading = loading;
      this.pages = data.pages.data;
    });
  }
}
