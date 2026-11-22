import ProdcutHeader from "./header/ProdcutHeader";
import ProdcutItems from "./item/ProdcutItems";
import ProductFilter from "./filter/ProductFilter";
import { useSearchParams } from "react-router-dom";
export default function Product() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get);
  return (
    <div className="flex container gap-x-2  max-w-full">
      <div className="md:flex md:flex-col hide basis-2/8 ">
        <ProductFilter></ProductFilter>
      </div>
      <div className="flex flex-col  grow  gap-y-4 overflow-hidden">
        <ProdcutHeader></ProdcutHeader>
        <ProdcutItems></ProdcutItems>
      </div>
    </div>
  );
}
