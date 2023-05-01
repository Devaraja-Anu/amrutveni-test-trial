export type ProductCard = {
  id: number;
  image: string;
  title: string;
  cost: number;
  cartQty:number
  children?: React.ReactNode;
};
