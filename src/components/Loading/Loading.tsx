export default function Loading() {
  return (
    <div className="fixed flex flex-col gap-y-2 inset-0 justify-center items-center">
      <div className="flex items-center justify-center gap-x-2">
        <span className="loading loading-infinity loading-xl text-blue-600"></span>
        <span className="loading loading-infinity loading-xl text-blue-600"></span>
        <span className="loading loading-infinity loading-xl text-blue-600"></span>
      </div>
      <p>در حال بازیابی اطلاعات</p>
    </div>
  );
}
