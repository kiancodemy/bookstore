import ErrorBoundry from "@/components/Error/ErrorBoundry";
import { useGetAllAdminBooks } from "@/hooks/product/admin/GetAllProdcuts";
import Empty from "@/components/Error/Empty";
import ProductItem from "./ProductItem";

export default function ProdcutItems() {
  const { data, isLoading, isError, isSuccess, error } = useGetAllAdminBooks();

  const books = data?.data?.content ?? [];

  return (
    <ErrorBoundry
      isLoading={isLoading}
      isError={isError}
      isSuccess={isSuccess}
      error={error?.response?.data?.message}
    >
      <div>
        {books.length === 0 ? (
          <Empty message="محصولی موجود نمیباشد" />
        ) : (
          <div className="grid bg-gray-200 overflow-hidden p-2 rounded-md grid-cols-2 md:grid-cols-4">
            {books.map((item) => (
              <ProductItem key={item.title} item={item} />
            ))}
          </div>
        )}
      </div>
    </ErrorBoundry>
  );
}
