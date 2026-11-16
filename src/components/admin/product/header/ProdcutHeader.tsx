import AddNewProductBotton from "../button/AddNewProductBotton";
import ProdcutHeaderFilter from "../filter/ProdcutHeaderFilter";
export default function ProdcutHeader() {
  return (
    <div className="bg-white p-4 flex flex-col rounded-md">
      <div className="flex flex-col gap-y-6">
        <div className="flex gap-x-2  divide-x items-center divide-gray-300 ">
          <h1 className="text-base md:block hidden md:text-xl p-2">محصولات</h1>
          <AddNewProductBotton></AddNewProductBotton>
        </div>

        <ProdcutHeaderFilter></ProdcutHeaderFilter>
      </div>
    </div>
  );
}
