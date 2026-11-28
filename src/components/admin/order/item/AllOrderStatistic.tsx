import ErrorBoundry from "@/components/Error/ErrorBoundry";
import { orderStatusFilter } from "@/constant/data/OrderStatus";
import { useAllOrderStatus } from "@/hooks/order/admin/AllOrderStatus";

export default function AllOrderStatistic() {
  const { data, isLoading, isError, error, isSuccess } = useAllOrderStatus();
  return (
    <ErrorBoundry
      isError={isError}
      error={error?.response?.data.message}
      isLoading={isLoading}
      isSuccess={isSuccess}
    >
      {data && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 py-2 md:py-4">
          {data?.data.map((item) => {
            return (
              <div
                key={item.status}
                className="md:p-3  p-2 text-xs md:text-sm rounded-md bg-white border border-gray-300 gap-y-1 md:gap-y-2 flex flex-col"
              >
                <div className="flex justify-between">
                  <>
                    {(() => {
                      const Icon =
                        orderStatusFilter[
                          item.status as keyof typeof orderStatusFilter
                        ]?.icon;

                      return Icon ? <Icon className="md:w-6 h-4 w-4 md:h-6" /> : null;
                    })()}
                  </>
                  <p>{orderStatusFilter[item.status]?.label}</p>
                </div>
                <div className="flex flex-row-reverse">
                  <h1>{new Intl.NumberFormat("fa-IR").format(item.Count)}</h1>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </ErrorBoundry>
  );
}
