import { useAllCategory } from "@/hooks/category/AllCategory";
import CategoryItem from "./CategoryItem";
import AddItemButton from "./AddItemButton";
import AddSubCategoryButton from "../subcategory/AddSubCategoryButton";
export default function Category() {
  const { data, isLoading } = useAllCategory();

  return (
    <div className="p-4 shadow-lg   rounded-md flex bg-white gap-y-4 md:gap-y-8 flex-col">
      <div className="flex gap-x-2">
        <AddItemButton></AddItemButton>
        {data && data?.data?.length > 0 && (
          <AddSubCategoryButton></AddSubCategoryButton>
        )}
      </div>
      {isLoading && (
        <div className="p-12 font-farsi flex items-center justify-center">
          <button className="py-2 px-4 bg-blue-500 text-white rounded-md">
            در حال بارگزاری
          </button>
        </div>
      )}
      {data?.data?.length == 0 && (
        <div className="p-12  font-farsi flex items-center justify-center">
          <button className="py-2 px-4 bg-blue-500 text-white rounded-md">
            دسته موجود نیست
          </button>
        </div>
      )}
      {data?.data?.length != 0 &&
        data?.data.map((category) => {
          return <CategoryItem category={category}></CategoryItem>;
        })}
    </div>
  );
}
