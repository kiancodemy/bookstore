import type { product } from "@/type/Product";
import { Link } from "react-router-dom";
export default function ProductItem({ item }: { item: product }) {
  return (
    <div className="p-6 md:text-base text-sm bg-white text-center rounded-md flex flex-col gap-y-3 md:gap-y-6">
      <p>{item.title}</p>
      {item.inStock ? (
        <p className="bg-green p-2 rounded-md text-white">موجود</p>
      ) : (
        <p className="bg-red-600 p-2 **: rounded-md text-white">نا موجود</p>
      )}
      <div className="flex gap-x-0.5 text-sm md:text-base justify-center">
        <p>قیمت :</p>
        <p>{new Intl.NumberFormat("fa-IR").format(item.price)}</p>
        <p>تومان</p>
      </div>

      <Link
        className="bg-blue-500 cursor-pointer  p-2 rounded-md text-white"
        to={`/admin/updateItem/${item.id}`}
      >
        به روز رسانی
      </Link>
    </div>
  );
}
