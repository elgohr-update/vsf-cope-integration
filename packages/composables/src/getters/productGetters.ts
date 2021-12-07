import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters
} from '@vue-storefront/core';
import type { Product, ProductFilter } from '../../../api-client';

function getName(product: Product): string {
  return product.name;
}

function getSlug(product: Product): string {
  return product.slug;
}

function getPrice(product: Product): AgnosticPrice {
  return {
    regular: product.regular_price,
    special: product.final_price
  };
}

function getGallery(product: Product): AgnosticMediaGalleryItem[] {
  return product.media_gallery.map(media => ({
    small: media.image,
    normal: media.image,
    big: media.image
  }));
}

function getCoverImage(product: Product): string {
  return product.image;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFiltered(products: Product[], filters: ProductFilter): Product[] {
  return products;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAttributes(products: Product[] | Product, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> {
  return {};
}

function getDescription(product: Product): string {
  return product.description;
}

function getCategoryIds(product: Product): string[] {
  return product.category_ids.map(String);
}

function getId(product: Product): string {
  return String(product.id);
}

function getFormattedPrice(price: number): string {
  return String(price);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalReviews(product: Product): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAverageRating(product: Product): number {
  return 0;
}

export const productGetters: ProductGetters<Product, ProductFilter> = {
  getName,
  getSlug,
  getPrice,
  getGallery,
  getCoverImage,
  getFiltered,
  getAttributes,
  getDescription,
  getCategoryIds,
  getId,
  getFormattedPrice,
  getTotalReviews,
  getAverageRating
};
