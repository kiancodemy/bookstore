import { useSearchParams } from "react-router-dom";
import { TbWorldSearch } from "react-icons/tb";
import { useState, useEffect } from "react";
export default function Search() {
  const [,setSearchParams] = useSearchParams();
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
  
    const timer = setTimeout(() => {
  
      if (search && search.length > 0) {
        setSearchParams((prev) => {
          const next = new URLSearchParams(prev);
          next.set("Search", String(search));
          next.delete("page");
          return next;
        });
      } else {
          setSearchParams((prev) => {
          const next = new URLSearchParams(prev);
          next.delete("Search");
      
          return next;
        });
        
      
      }
    }, 600);
    return () => {
      clearTimeout(timer);
    };
  }, [search, setSearchParams]);
  return (
    <div className="flex flex-col container">
      <div className="flex  relative flex-col">
        <TbWorldSearch className="text-gray-400 absolute h-3 w-3 md:w-5  md:h-5 -translate-y-1/2 top-1/2 left-2"></TbWorldSearch>

        <input
          placeholder="جستجو ....."
          type="text"
          className="p-2  placeholder:text-sm placeholder:md:text-base border-bordercolor border focus  focus:border-transparent  rounded-md focus:placeholder:text-transparent focus:outline-2 focus:outline-blue-500"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
    </div>
  );
}
