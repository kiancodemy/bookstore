import { useSearchParams } from "react-router-dom";

interface PaginationProps {
  pageNumber: number;
  currenctpage:number
}

export default function Pagination({ pageNumber,currenctpage }: PaginationProps) {
  const [, setSearchParams] = useSearchParams();


  

  const handlePageChange = (page: number) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("page", String(page));
      return next;
    });
  };

  return (
    <div className="flex justify-center flex-wrap gap-3">
      {Array.from({ length: pageNumber }, (_, index) => {
        

        return (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={`px-4 py-2 rounded-full cursor-pointer flex justify-center ${
              currenctpage  === index
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {index+1}
          </button>
        );
      })}
    </div>
  );
}
