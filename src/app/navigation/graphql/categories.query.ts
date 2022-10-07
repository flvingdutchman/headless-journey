import {gql} from 'apollo-angular';

export interface CategoriesDto {
  categories: {
    data: {
      attributes: {
        Name: string;
        Slug: string;
      }
    }[]
  }
}

export const gqlQuery = gql`
  query Categories {
      categories {
        data {
          attributes {
            Name
            Slug
          }
        }
      }
    }
`;
