export interface HeaderFilterItem {
  id: number,
  name: string
  query: string
};

export const HeaderFilterItems: HeaderFilterItem[] = [
  { id: 1, name: "ارزان ترین", query: "asc" },
  { id: 2, name: "گران ترین", query: "desc" },
];



//// createt book  setting////
export const Languages = {
  PERSIAN: "PERSIAN",
  ENGLISH: "ENGLISH",
  ARABIC: "ARABIC",
  FRENCH: "FRENCH",
  GERMAN: "GERMAN",
} as const;

export type SelectOption<T extends string | number = string> = {
  value: T;
  label: string;
};

export const languageOptions: SelectOption<Language>[] = [
  { value: Languages.PERSIAN, label: "فارسی" },
  { value: Languages.ENGLISH, label: "انگلیسی" },
  { value: Languages.ARABIC, label: "عربی" },
  { value: Languages.FRENCH, label: "فرانسوی" },
  { value: Languages.GERMAN, label: "آلمانی" },
];

export type Language = (typeof Languages)[keyof typeof Languages];
// => "PERSIAN" | "ENGLISH" | "ARABIC" | "FRENCH" | "GERMAN"

export type CreateBookType = {
  title: string;
  description: string|null;
  publisher:string|null;
  translator:string|null;
  language: Language;
  publicationYear: number;
  pages: number;
  price: number;
  costPrice: number;
  stock: number;
  categoryId: number;
  subcategoryId: number;
};
export type product = {
  id:number;
  title: string;
  coverImageUrl: string | null;
  price: number;
  inStock: boolean;
};

type Page = {
  content: product[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
 
};

export type productResponse={
  message:string,
  data:Page
}