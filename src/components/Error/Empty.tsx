export default function Empty({ message }: { message: string }) {
  return (
    <div className="p-20  max-w-full border-2 rounded-md border-gray-300">
      <div className="flex text-sm items-center justify-center  *:text-center flex-col gap-y-4">
        <span className="self-center py-2 px-4 bg-blue-500 text-white rounded-md">
          {message}
        </span>
      </div>
    </div>
  );
}
