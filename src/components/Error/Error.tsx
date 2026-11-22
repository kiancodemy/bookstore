import { Link } from "react-router-dom";
export default function Error({ message }: { message: string }) {
  return (
    <div className="p-20  max-w-full  border-gray-300">
      <div className="flex items-center justify-center  *:text-center flex-col gap-y-4">
        <span className="self-center py-2 px-4 bg-red-500 text-white rounded-md">
          {message}
        </span>
        <Link className="p-3 bg-blue-500 text-white text-white rounded-md" to={"/"}>
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
