interface RootObject {
  status: Status;
  pagination: Pagination;
  data: Datum[];
  errors: any[];
}

interface Datum {
  name: string;
  slug: string;
  url: string;
  uuid: string;
  product: Product;
  brand: string;
  image: string;
  gallery: string[];
  wishlisted: boolean;
  in_stock: boolean;
  sale_price: number;
  max_retail_price: number;
  is_active: boolean;
  cartQty:number;
}

interface Product {
  uuid: string;
  name: string;
  slug: string;
  metadata: Metadata;
  category: any[];
  is_active: boolean;
}

interface Metadata {
  desc: string;
  usage: string;
  features: string;
}

interface Pagination {
  next?: any;
  previous?: any;
  count: number;
}

interface Status {
  code: number;
  text: string;
  flag: string;
  message: string;
}