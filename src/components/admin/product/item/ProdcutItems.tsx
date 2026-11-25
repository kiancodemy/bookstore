import ErrorBoundry from "@/components/Error/ErrorBoundry";
import { useGetAllAdminBooks } from "@/hooks/product/admin/GetAllProdcuts";
import Empty from "@/components/Error/Empty";
import ProductItem from "./ProductItem";
import Pagination from "@/components/pagination/Pagination";
export default function ProdcutItems() {
  const { data, isLoading, isError, isSuccess, error } = useGetAllAdminBooks();

  const books = data?.data?.content ?? [];

  return (
    <div className="grow flex flex-col min-h-0 p-10 gap-y-6 bg-yellow-200">
      <ErrorBoundry
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        error={error?.response?.data?.message}
      >
        <div className="flex flex-col container gap-y-4">
          {books.length === 0 ? (
            <Empty message="محصولی موجود نمیباشد" />
          ) : (
            <div className="grid  bg-blue-300 overflow-hidden gap-5  rounded-md grid-cols-2 md:grid-cols-4">
              {books.map((item) => (
                <ProductItem key={item.title} item={item} />
              ))}
            </div>
          )}
        </div>
      </ErrorBoundry>
      {data?.data && (
        <Pagination pageNumber={data?.data?.totalPages} currenctpage={data?.data.page}></Pagination>
      )}
    </div>
  );
}
