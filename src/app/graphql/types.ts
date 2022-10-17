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

export type PagePreviewView = {
  attributes: {
    PreviewImage: ImageView;
    Title: string;
    PreviewText: string;
    Slug: string;
    category: CategoryView
  }
}

export type ComponentCommercialHeroView = {
  __typename: string;
  HeroText: string;
  HeroSubtext: string;
  HeroImage: ImageView
}

export type ComponentContentBlockquoteView = {
  __typename: string;
  Text: string;
}

export type ComponentCommercialStoryTellingView = {
  __typename: string;
  Text: string;
  Image: ImageView;
}

export type BlockView = ComponentCommercialHeroView | ComponentContentBlockquoteView | ComponentCommercialStoryTellingView;

export type PageView = {
  attributes: {
    Title: string;
    Slug: string;
    category: CategoryView;
    Blocks: BlockView[]
  }
}

export type EntityView = ImageView | PagePreviewView | CategoryView | PageView;
