import { Link } from "react-router-dom";
export default function Error({ message }: { message: string }) {
  return (
    <div className="p-12 flex justify-center items-center">
      <div className="flex *:text-center flex-col gap-y-4">
        <span className="self-center py-2 px-4 bg-red-500 text-white rounded-md">
          {message}
        </span>
        <Link className="p-2 bg-gray-500 text-white rounded-md" to={"/"}>
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
