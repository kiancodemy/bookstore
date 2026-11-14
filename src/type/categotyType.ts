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


export interface CreateCategory{
  name:string 
}

export interface updateCategory{
  id:number,
  active:boolean,
  name:string 
}