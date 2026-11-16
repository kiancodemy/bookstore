import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function AddNewProductBotton() {
  return (
    <Link to={"/admin/prodcuts/newProduct"} className="cursor-pointer md:py-2 md:px-6 gap-x-2 hover:bg-blue-900 py-1 px-3 text-white bg-blue-500 rounded-md flex items-center justify-center self-start">
      <p className="text-base">محصول جدید</p>
      <FaPlus></FaPlus>
    </Link>
  );
}
