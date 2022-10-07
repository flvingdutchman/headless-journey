import {gql} from 'apollo-angular';
import { PageView } from '@headless-world/graphql';

export type ContentDto = {
  pages: {
    data: PageView[]
  }
}

export const CONTENT_IN_CATEGORIES_QUERY = gql`
  query CategpryContent($locale: I18NLocaleCode!, $category: String!) {
    pages(locale: $locale, filters: {category: {Slug: {eq : $category}}}) {
      data {
        attributes {
          hero_image {
              data {
                  attributes {
                      formats
                  }
              }
          }
          Title
          Content
          Slug
          category {
            data {
                attributes {
                    Slug
                    Name
                }
            }
          }
        }
      }
    }
  }
`;
