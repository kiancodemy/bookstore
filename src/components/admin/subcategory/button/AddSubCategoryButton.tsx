import { lazy, Suspense } from "react";
import { FaPlus } from "react-icons/fa6";

import useModalHanlder from "@/store/useModals";

const CreatSubCategorymModal = lazy(
  () => import("@/components/admin/subcategory/modals/CreatSubCategorymModal"),
);

export default function AddSubCategoryButton() {
  const setSubcategoryModal = useModalHanlder().setSubcategoryModal;
  const isopen = useModalHanlder().subcategoryModal;

  return (
    <div>
      <button
        onClick={() => setSubcategoryModal(true)}
        className="cursor-pointer md:py-2 md:px-6 gap-x-2 hover:bg-blue-900 py-1 px-3 text-white bg-blue-500 rounded-md flex items-center justify-center self-start"
      >
        <p className="text-base">زیر دسته جديد</p>
        <FaPlus></FaPlus>
      </button>
      {isopen && (
        <Suspense>
          <CreatSubCategorymModal></CreatSubCategorymModal>
        </Suspense>
      )}
    </div>
  );
}
