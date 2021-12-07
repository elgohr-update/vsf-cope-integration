export type TODO = unknown;

export type Setttings = {
  api: {
    url: string;
  }
};

export type Endpoints = TODO;

export type BillingAddress = TODO;

export type Cart = TODO;

export type CartItem = TODO;

export type Category = {
  path: string;
  category_id: number;
  name: string;
  slug: string;
};

export type Coupon = TODO;

export type Facet = TODO;

export type FacetSearchCriteria = TODO;

export type Order = TODO;

export type OrderItem = TODO;

export type PasswordResetResult = TODO;

export type ProductMedia = {
  image: string;
  pos: number;
  typ: string;
};

export type Product = {
  id: number;
  sku: string;
  name: string;
  attribute_set_id: number;
  price: number;
  status: number;
  visibility: number;
  type_id: string;
  created_at: string;
  final_price: number;
  regular_price: number;
  description: string;
  image: string;
  small_image: string;
  thumbnail: string;
  tax_class_id: string;
  category_ids: number[];
  url_key: string;
  new: string;
  slug: string;
  stock: {
    qty_increments: number;
    is_in_stock: boolean;
  },
  media_gallery: ProductMedia[];
  category: Category[];
  url_path: string;
};

export type ProductFilter = TODO;

export type Review = TODO;

export type ReviewItem = TODO;

export type User = TODO;

export type UserBillingAddress = TODO;

export type UserBillingAddressItem = TODO;

export type UserBillingAddressSearchCriteria = TODO;

export type UserShippingAddress = TODO;

export type UserShippingAddressItem = TODO;

export type UserShippingAddressSearchCriteria = TODO;

export type ShippingAddress = TODO;

export type ShippingMethod = TODO;

export type ShippingProvider = TODO;

export type Wishlist = TODO;

export type WishlistItem = TODO;
