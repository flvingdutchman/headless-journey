import {gql} from 'apollo-angular';
import { PageView } from '@headless-world/graphql';

export type ContentDto = {
  pages: {
    data: PageView[]
  }
}

export const ALL_PAGES_QUERY = gql`
  query PageBySlug($locale: I18NLocaleCode!) {
    pages(locale: $locale, sort: "createdAt:desc") {
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
          Slug
          Content
          category {
            data {
                attributes {
                    Slug,
                    Name
                }
            }
          }
        }
      }
    }
  }
`;

export const PAGE_BY_SLUG_QUERY = gql`
  query PageBySlug($locale: I18NLocaleCode!, $slug: String!) {
    pages(locale: $locale, filters: {Slug: {eq: $slug}}) {
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
          Slug
          Content
          category {
            data {
                attributes {
                    Slug,
                    Name
                }
            }
          }
        }
      }
    }
  }
`;
