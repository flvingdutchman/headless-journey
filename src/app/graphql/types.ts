export type ImageFormatView = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

export type ImageFormatsView = {
  formats: {
    thumbnail: ImageFormatView;
    large: ImageFormatView;
    medium: ImageFormatView;
    small: ImageFormatView;
  }
}

export type CategoryView = {
  data: {
    attributes: {
      Slug: string;
      Name: string;
    }
  }
}

export type ImageView = {
  data: {
    attributes: ImageFormatsView
  }
}

export type PageView = {
  attributes: {
    hero_image: ImageView;
    Title: string;
    Content: string;
    Slug: string;
    category: CategoryView
  }
}

export type EntityView = ImageView | PageView | CategoryView;
