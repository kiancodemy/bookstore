import Watch from "./Watch";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import jwtDecoder from "@/constant/JwtDecoderFunction";
import useAuthStore from "@/store/useAuthStore";
type set = {
  select: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function AdminHeader({ select }: set) {
  const jwt = useAuthStore((s) => s.jwtToken);
  const username = jwt
    ? jwtDecoder(jwt).name + " " + jwtDecoder(jwt).lastName
    : "کاربر";

  return (
    <div className="flex flex-col bg-white p-3 rounded-md">
      <div className="max-w-full border-y border-gray-400   flex flex-row-reverse items-center justify-between container">
        <Watch></Watch>
        <div className="md:flex  gap-x-3 *:cursor-pointer justify-center items-center">
          <GiHamburgerMenu
            onClick={() => select((prev) => !prev)}
          ></GiHamburgerMenu>
          <div className="md:flex  hidden">
            <p className="p-4 border-b-2 border-b-transparent hover:border-b-blue-500 ">
              <Link to={"/login"}>صفحه اصلی</Link>
            </p>
            <p className="p-4 border-b-2 border-b-transparent hover:border-b-blue-500">
              <Link to={"/admin"}>راهنما</Link>
            </p>
            <p className="p-4 border-b-2 border-b-transparent hover:border-b-blue-500">
              <Link to={"/admin"}> عمومی</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end  py-1 items-center border-gray-300">
        <p className="rounded-md py-1 px-3 md:py-2 text-xs md:text-sm   md:px-6 font-semibold bg-blue-50 text-blue-950">
          {username}
        </p>
      </div>
    </div>
  );
}
