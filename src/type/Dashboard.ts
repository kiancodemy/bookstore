const menuItems: MenuItem[] = [
  { id: 1, label: "محصولات", key: "products", direction: "products" },
  { id: 2, label: "گروه", key: "groups", direction: "category" },
  { id: 3, label: "زیر گروه", key: "subgroups", direction: "subcategory" },
  { id: 4, label: "سفارشات", key: "orders", direction: "orders" },
  { id: 6, label: "کاربران", key: "users", direction: "users" },
  { id: 7, label: "دسترسی", key: "access", direction: "access" },
];

interface MenuItem {
  id: number;
  label: string;
  key: string;
  direction: string;
}

export default menuItems;
