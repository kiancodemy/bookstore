import menuItems from "@/type/Dashboard";
import { Link } from "react-router-dom";
export default function Dashboard({ open }: { open: boolean }) {
  return (
    <div
      className={`transition-[width] md:block hidden pt-14 gap-y-3 bg-blue-950 top-0 overflow-hidden duration-300 ease-in-out sticky rounded-md h-screen ${open ? " w-1/6" : "w-0 "}`}
    >
      <div className=" flex flex-col *:text-sm p-2 md:p-4 gap-y-6">
        {menuItems.map((item) => (
          <Link
            to={item.direction}
            key={item.id}
            className="flex hover:bg-primarys hover:*:text-white cursor-pointer bg-white p-2 rounded-md items-center justify-center"
          >
            <p key={item.id} className="text-center rounded-md">
              {item.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
