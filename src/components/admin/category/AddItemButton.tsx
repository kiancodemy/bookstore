import { lazy, Suspense } from "react";
import { FaPlus } from "react-icons/fa6";

import useModalHanlder from "@/store/useModals";
const CategoryModals = lazy(
  () => import("@/components/admin/category/CategoryModal"),
);

export default function AddItemButton() {
  const setcategoryModal = useModalHanlder().setcategoryModal;
  const isopen = useModalHanlder().categoryModal;


  return (
    <div>
      <button
        onClick={() => setcategoryModal(true)}
        className="cursor-pointer md:py-2 md:px-6 gap-x-2 hover:bg-blue-900 py-1 px-3 text-white bg-blue-500 rounded-md flex items-center justify-center self-start"
      >
        <p className="text-base">دسته جديد</p>
        <FaPlus></FaPlus>
      </button>
      {isopen && (
        <Suspense>
          <CategoryModals></CategoryModals>
        </Suspense>
      )}
    </div>
  );
}
