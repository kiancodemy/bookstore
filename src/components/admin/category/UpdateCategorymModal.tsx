import { useForm } from "react-hook-form";
import type { updateCategory } from "@/type/categotyType";
import { useUpdateCategory } from "@/hooks/category/updateCategory";
import useModalHanlder from "@/store/useModals";
export default function CategoryModal() {
  // close the modal ///

  const state = useModalHanlder();

  // reacrt hook form setting ///
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm< updateCategory>({
    mode: "onTouched",
  });
  /// react querty settting ///
  const { mutate, isPending } =  useUpdateCategory();
  const onSubmit = (data:updateCategory) => {
    mutate(data);
  };
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/10 flex items-center justify-center">
      <div className="flex flex-col shadow-2xl bg-white overflow-hidden rounded-md">
        <h1 className="bg-gray-300 text-center p-2 text-white">
          دسته بندی ها
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-full gap-y-2 shadow-lg md:gap-y-4  p-10 rounded-md md:py-12 md:px-16  flex flex-col container"
        >
          <div className="flex  flex-col">
            <input
              placeholder="نام دسته را وارد کنید"
              {...register("name", {
                required: "نام الزامی است",
              })}
              className="p-2  placeholder:text-sm e border-bordercolor border focus  focus:border-transparent  rounded-md focus:placeholder:text-transparent focus:outline-2 focus:outline-blue-500"
              type="text"
            />
            <span className="text-xs text-red-600 pt-2">
              {errors?.name?.message}
            </span>
          </div>

          <div className="flex gap-y-3  flex-col">
            <button
              type="submit"
              disabled={isPending}
              className="bg-green-500  disabled:bg-gray-400 shadow-lg text-sm md:text-base py-2 px-6 text-white rounded-md cursor-pointer"
            >
              افزودن
            </button>
            <button
              type="button"
              onClick={() => state.setcategoryModal(false)}
              disabled={isPending}
              className="bg-red-500 disabled:bg-gray-400 shadow-lg text-sm md:text-base py-2 px-4 text-white rounded-md cursor-pointer"
            >
              بستن
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
