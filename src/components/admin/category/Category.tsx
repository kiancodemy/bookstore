import { useAllCategory } from "@/hooks/category/AllCategory";
import CategoryItem from "./CategoryItem";
import AddItemButton from "./AddItemButton";
export default function Category() {
  const { data } = useAllCategory();

  return (
    <div className="p-4 shadow-lg   rounded-md flex bg-white gap-y-4 md:gap-y-8 flex-col">
      <AddItemButton></AddItemButton>

      {data?.data.map((category) => {
        return <CategoryItem category={category}></CategoryItem>;
      })}
    </div>
  );
}
