export interface HeaderFilterItem {
  id: number,
  name: string
  query: string
};

export const HeaderFilterItems: HeaderFilterItem[] = [
  { id: 1, name: "ارزان ترین", query: "asc" },
  { id: 2, name: "گران ترین", query: "desc" },
];