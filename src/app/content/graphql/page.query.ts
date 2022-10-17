import {gql} from 'apollo-angular';
import { PagePreviewView, PageView } from '@headless-world/graphql';

export type ContentDto = {
  pages: {
    data: PagePreviewView[]
  }
}

export type PageDto = {
  pages: {
    data: PageView[]
  }
}

export const ALL_PAGES_QUERY = gql`
  query PageBySlug($locale: I18NLocaleCode!) {
    pages(locale: $locale, sort: "createdAt:desc") {
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

export const PAGE_BY_SLUG_QUERY = gql`
  query PageBySlug($locale: I18NLocaleCode!, $slug: String!) {
    pages(locale: $locale, filters: {Slug: {eq: $slug}}) {
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
          Blocks {
              __typename
              ... on ComponentContentBlockquote {
                  Text
              }
              ... on ComponentCommercialHero {
                  HeroText
                  HeroSubtext
                  HeroImage {
                      data {
                          attributes {
                              formats
                          }
                      }
                  }
              }
              ... on ComponentCommercialStoryTelling {
                  Text
                  Image {
                      data {
                           attributes {
                              formats
                          }
                      }
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
