import menuItems from "@/type/Dashboard";
import { Link } from "react-router-dom";
type select = {
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function MobileDashboar({ setopen }: select) {
  return (
    <div onClick={()=>setopen(false)} className="absolute  md:hidden inset-0 flex justify-start  bg-black/10 ">
      <div className=" flex flex-col pt-8 px-4 gap-y-6 bg-blue-900 z-200 p-4">
        {menuItems.map((item) => (
          <Link
            to={item.direction}
            onClick={() => setopen(false)}
            key={item.id}
            className="bg-white hover:bg-primarys hover:text-white cursor-pointer rounded-md py-2 px-12"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
