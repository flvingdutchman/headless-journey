import { ActivatedRoute } from "@angular/router";
import { Apollo } from "apollo-angular";

import { gqlQuery } from '../navigation/graphql/categories.query';
import { PAGE_BY_SLUG_QUERY } from './graphql/page.query';

export default (apollo: Apollo, route: ActivatedRoute) => () => {
  // Always load categories
  apollo.watchQuery({
    query: gqlQuery
  }).valueChanges.subscribe(() => {
  });

  const article = route.snapshot.paramMap.get('article');
  if (article) {
    apollo.watchQuery({
      query: PAGE_BY_SLUG_QUERY,
      variables: {
        locale: 'en',
        slug: article
      }
    }).valueChanges
      .subscribe(() => {
      });
  }
}
