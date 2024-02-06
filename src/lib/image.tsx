"use client";

import NextImage, { ImageProps, ImageLoader } from "next/image";

export const contentfulImageLoader: ImageLoader = ({ src, width, quality }) =>
  `${src}?w=${width}&q=${quality || 95}&fm=webp`;

export const Image: React.FC<ImageProps> = (props) => {
  const { src } = props;
  const loader =
    src && typeof src === "string" && src.includes("contentful.com")
      ? contentfulImageLoader
      : undefined;

  return <NextImage loader={loader} {...props} />;
};
