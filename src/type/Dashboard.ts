///// dashvoard items
const menuItems: MenuItem[] = [
  { id: 1, label: "محصولات", key: "products", direction: "products" },
  { id: 2, label: "دسته بندی", key: "groups", direction: "category" },
  { id: 4, label: "سفارشات", key: "orders", direction: "orders" },

  { id: 7, label: "دسترسی", key: "access", direction: "access" },
];

interface MenuItem {
  id: number;
  label: string;
  key: string;
  direction: string;
}

export default menuItems;
