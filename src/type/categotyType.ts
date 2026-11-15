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
  active:boolean 
}

export interface updateCategory{
  id:number,
  setopen:React.Dispatch<React.SetStateAction<boolean>>,
  key:number,
  active:boolean,
  name:string 
}