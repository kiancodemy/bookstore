import menuItems from "@/type/Dashboard";
import { Link } from "react-router-dom";
export default function Dashboard({ open }: { open: boolean }) {
  return (
    <div
      className={`transition-[width] md:block hidden pt-14 gap-y-3 bg-blue-950 top-0 overflow-hidden duration-300 ease-in-out sticky rounded-md h-screen ${open ? " w-1/6" : "w-0 "}`}
    >
      <div className=" flex flex-col px-4 gap-y-6">
        {menuItems.map((item) => (
          <Link
            to={item.direction}
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
