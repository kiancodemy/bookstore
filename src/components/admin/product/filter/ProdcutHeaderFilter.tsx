import { LuArrowDownUp } from "react-icons/lu";
import { HeaderFilterItems } from "@/type/Product";
import { useSearchParams } from "react-router-dom";
export default function ProdcutHeaderFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSort = searchParams.get("sort"); // "asc" | "desc" | null

  const handleClick = (query: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("direction", query);
      next.set("sortBy", "price");
      return next;
    });
  };
  return (
    <div className="flex gap-x-1">
      <div className="flex gap-x-2 items-center">
        <LuArrowDownUp className="w-5 text-gray-500 h-5"></LuArrowDownUp>

        <p className="md:text-sm text-xs"> مرتب سازی بر اساس :</p>
      </div>
      <div className="flex items-center gap-x-2">
        {HeaderFilterItems.map((item) => {
          return (
            <button
              onClick={() => handleClick(item.query)}
              className={`text-sm py-2 px-4 rounded-md cursor-pointer ${activeSort == item.query ? "bg-blue-500 text-white" : "bg-gray-100 text-black"}`}
              key={item.id}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
