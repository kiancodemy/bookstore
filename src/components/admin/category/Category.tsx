import { useAllCategory } from "@/hooks/category/admin/AllCategory";
import CategoryItem from "./CategoryItem";
import AddItemButton from "./button/AddItemButton";
import ErrorBoundry from "@/components/Error/ErrorBoundry";
import AddSubCategoryButton from "../subcategory/button/AddSubCategoryButton";
export default function Category() {
  const { data, isLoading, isError, isSuccess, error } = useAllCategory();

  return (
    <div className="p-4 shadow-lg   rounded-md flex bg-white gap-y-4 md:gap-y-8 flex-col">
      <ErrorBoundry
        isError={isError}
        isLoading={isLoading}
        isSuccess={isSuccess}
        error={error?.response?.data.message}
      >
        <div className="flex gap-x-2">
          <AddItemButton></AddItemButton>

          <AddSubCategoryButton></AddSubCategoryButton>
        </div>

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
      </ErrorBoundry>
    </div>
  );
}
