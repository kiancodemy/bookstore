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

export interface CategoryResponse {
  message: string;
  data: Category[];
}
type orderStatus={
  status:string,
  Count:number

}
export interface allOrderStatusResponse{
  message:string,
  data:orderStatus[];
}

export interface updateCategory {
  id: number;
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
  key: number;
  active: boolean;
  name: string;
}
export const activityOptions = [
  { value: true, label: "فعال" },
  { value: false, label: "غیر فعال" },
];
