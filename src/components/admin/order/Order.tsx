import OrderHeader from "./header/OrderHeader";
import AllOrderStatistic from "./item/AllOrderStatistic";
export default function Order() {
  return (
    <div className="flex flex-col max-w-full container">
      <OrderHeader></OrderHeader>
      <AllOrderStatistic></AllOrderStatistic>
    </div>
  );
}
