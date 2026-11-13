import type { Category } from "@/type/categotyType";
import { useState } from "react";
export default function CategoryItem({ category }: { category: Category }) {
  const [modal, setModal] = useState(false);
  return (
    <div
      key={category.id}
      className="flex border-2 gap-y-2 bg-blue-900 md:border-gray-400 flex-col md:bg-gray-100 p-3 md:px-3 md:py-6 rounded-md"
    >
      <div className="flex md:flex-row flex-col items-start gap-y-5 gap-x-4 bg-blue-100 md:bg-blue-900 text-white md:justify-start  rounded-md p-4  ">
        <div className="flex text-black  bg-white rounded-md overflow-hidden items-center">
          <h1 className=" p-1 rounded-md">نام دسته :</h1>
          <p className=" p-1 rounded-md">{category.name}</p>
        </div>
        <div className="flex bg-white rounded-md overflow-hidden">
          <p className=" py-1 text-black px-3  rounded-md">وضعيت :</p>
          {category.status ? (
            <p className="bg-green-500 py-1 px-3 text-white ">فعال</p>
          ) : (
            <p className="bg-red-500 py-1 px-3 text-white ">غير فعال</p>
          )}
        </div>
        <button className="flex cursor-pointer text-white px-3 bg-orange-500 rounded-md overflow-hidden items-center">
          <p className=" p-1 rounded-md لال-خقش">به روز رساني</p>
        </button>
      </div>
      <div className="flex-col bg-white rounded-md p-2 gap-y-2">
        <h1 className="justify-self-start py-2 ">نام زيردسته ها :</h1>

        <div className="flex flex-col gap-y-2">
          {category.subCategories.length === 0 ? (
            <h1 className="text-red-500">زير دسته موجود نيست</h1>
          ) : (
            category.subCategories.map((sub) => {
              return (
                <div className="flex  items-center gap-x-4">
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
                      <p className="bg-red-500 py-1 px-3 text-white ">
                        غير فعال
                      </p>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
