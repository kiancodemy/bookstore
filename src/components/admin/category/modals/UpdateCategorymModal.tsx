import { useForm, Controller } from "react-hook-form";
import type { updateCategory } from "@/type/categotyType";
import { useUpdateCategory } from "@/hooks/category/admin/updateCategory";
import { activityOptions } from "@/type/categotyType";
import Select from "react-select";
import { useEffect } from "react";

export default function UpdateCategoryModal({
  id,
  active,
  setopen,
  key,
  name,
}: updateCategory) {
  // zustand settng ////

  // reacrt hook form setting ///
  const {
    register,
    control,

    handleSubmit,
    formState: { errors },
  } = useForm<updateCategory>({
    mode: "onTouched",
    defaultValues: {
      id,
      name,
      active,
    },
  });
  /// react querty settting ///
  const { isSuccess, mutate, isPending } = useUpdateCategory();
  const onSubmit = (data: updateCategory) => {
    mutate(data);
  };
  useEffect(() => {
    if (isSuccess) {
      setopen(false);
    }
  }, [isSuccess, setopen]);

  return (
    <div
      key={key}
      className="fixed inset-0 backdrop-blur-sm bg-black/10 flex items-center justify-center"
    >
      <div className="flex flex-col shadow-2xl bg-white overflow-hidden rounded-md">
        <h1 className="bg-gray-300 text-center p-2 text-white">
          به روزرسانی دسته بندی
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

          <Controller
            control={control}
            name="active"
            render={({ field }) => (
              <Select
                className="basic-single"
                isRtl
                options={activityOptions}
                value={
                  activityOptions.find((o) => o.value === field.value) ?? null
                }
                onChange={(option) => field.onChange(option?.value)}
                onBlur={field.onBlur}
                closeMenuOnSelect
                placeholder="وضعیت را انتخاب کنید"
              />
            )}
          />

          <div className="flex gap-y-3  flex-col">
            <button
              type="submit"
              disabled={isPending}
              className="bg-green-500  disabled:bg-gray-400 shadow-lg text-sm md:text-base py-2 px-6 text-white rounded-md cursor-pointer"
            >
              اعمال تغییرات
            </button>
            <button
              type="button"
              onClick={() => setopen(false)}
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
