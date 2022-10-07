export interface ImageFormat {
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
export interface ImageWithFormats {
  thumbnail: ImageFormat;
  large: ImageFormat;
  medium: ImageFormat;
  small: ImageFormat;
}
