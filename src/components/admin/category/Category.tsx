import { useAllCategory } from "@/hooks/category/AllCategory";
import CategoryItem from "./CategoryItem";
import { FaPlus } from "react-icons/fa6";
export default function Category() {
  const { data } = useAllCategory();
  return (
    <div className="p-4 shadow-lg   rounded-md flex bg-white gap-y-4 md:gap-y-8 flex-col">
      <button className="cursor-pointer md:py-2 md:px-6 gap-x-2 hover:bg-blue-900 py-1 px-3 text-white bg-blue-500 rounded-md flex items-center justify-center self-start">
        <p className="text-base">دسته جديد</p>
        <FaPlus></FaPlus>
      </button>
      {data?.data.map((category) => {
        return <CategoryItem category={category}></CategoryItem>;
      })}
    </div>
  );
}
