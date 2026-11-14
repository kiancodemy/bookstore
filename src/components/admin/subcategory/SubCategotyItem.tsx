import type { SubCategory } from "@/type/categotyType";
type subCategory = {
  subCategories: SubCategory[];
};
export default function SubCategotyItem({ subCategories }: subCategory) {
  return (
    <div className="flex flex-col gap-y-2">
      {subCategories.length === 0 ? (
        <h1 className="text-red-500">زير دسته موجود نيست</h1>
      ) : (
        subCategories.map((sub) => {
          return (
            <div key={sub.id} className="flex  items-center gap-x-4">
              <div className="flex items-center bg-blue-400 rounded-md">
                <p className=" text-white p-1 rounded-md">نام :</p>
                <p className=" text-white p-1">{sub.name}</p>
              </div>
              <div className="flex items-center rounded-md overflow-hidden">
                <p className="bg-blue-100 py-1 text-black px-3  rounded-md">
                  وضعيت :
                </p>
                {sub.status ? (
                  <p className="bg-green-500 py-1 px-3 text-white ">فعال</p>
                ) : (
                  <p className="bg-red-500 py-1 px-3 text-white ">غير فعال</p>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
