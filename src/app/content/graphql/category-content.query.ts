import {gql} from 'apollo-angular';
import { PagePreviewView } from '@headless-world/graphql';

export type ContentDto = {
  pages: {
    data: PagePreviewView[]
  }
}

export const CONTENT_IN_CATEGORIES_QUERY = gql`
  query CategpryContent($locale: I18NLocaleCode!, $category: String!) {
    pages(locale: $locale, filters: {category: {Slug: {eq : $category}}}) {
      data {
        attributes {
          Title
          Slug
          PreviewText
          PreviewImage {
              data {
                  attributes {
                      formats
                  }
              }
          }
          category {
              data {
                  attributes {
                      Slug
                  }
              }
          }
        }
      }
    }
  }
`;
