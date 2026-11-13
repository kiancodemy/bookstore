export interface SubCategory {
  id: number;
  name: string;
  status: boolean;
  // add whatever fields your API actually returns
}

export interface Category {
  id: number;
  name: string;
  status: boolean;
  subCategories: SubCategory[];
}

export interface CategoryResponse {
  message: string;
  data: Category[];
}