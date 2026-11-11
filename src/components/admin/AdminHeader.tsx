import Watch from "./Watch";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
type set = {
  select: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function AdminHeader({ select }: set) {
  return (
    <div className="max-w-full border-y border-gray-400   flex flex-row-reverse items-center justify-between container">
      <Watch></Watch>
      <div className="md:flex  gap-x-3 *:cursor-pointer justify-center items-center">
        <GiHamburgerMenu
          onClick={() => select((prev) => !prev)}
        ></GiHamburgerMenu>
        <div className="md:flex  hidden">
          <p className="p-4 border-b-2 border-b-transparent hover:border-b-blue-500 ">
            <Link to={"/admin"}>صفحه اصلی</Link>
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
  );
}
