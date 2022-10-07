import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { filter, map, tap } from 'rxjs';
import { Category } from '../../types';
import { CategoriesDto, gqlQuery } from '../../graphql/categories.query';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit, OnDestroy {
  public loading = true;
  public categories: Category[] = [];

  private querySubscription: Subscription | null = null;

  constructor(private readonly apollo: Apollo) {}

  ngOnInit(): void {
    this.querySubscription = this.apollo.watchQuery<CategoriesDto>({query: gqlQuery})
      .valueChanges
      .pipe(
        filter((result: ApolloQueryResult<CategoriesDto>) => {
          return !result.loading;
        }),
        map(({data}: ApolloQueryResult<CategoriesDto>) => {
          return data.categories.data.map(item => item.attributes);
        })
      ).subscribe((items: Category[]) => {
        this.loading = false;
        this.categories = items;
      })
  }

  ngOnDestroy(): void {
      this.querySubscription?.unsubscribe();
  }
}
