import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { PagePreviewView } from '@headless-world/graphql';
import { ALL_PAGES_QUERY, ContentDto } from '../../graphql/page.query';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  private contentSubscription: Subscription | null = null;
  public loading = true;
  public pages: PagePreviewView[] = [];

  constructor(private readonly apollo: Apollo) { }

  ngOnInit(): void {
    this.contentSubscription = this.apollo.watchQuery<ContentDto>({
      query: ALL_PAGES_QUERY,
      variables: {
        locale: 'en'
      }
    })
    .valueChanges
    .subscribe(({data}) => {
        this.pages = data.pages.data;
        this.loading = false;
    });
  }

  ngOnDestroy(): void {
      this.contentSubscription?.unsubscribe();
  }
}
