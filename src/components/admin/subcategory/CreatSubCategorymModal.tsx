import { useForm, Controller } from "react-hook-form";
import type { CreateSubCategory } from "@/type/SubCategory";
import useModalHanlder from "@/store/useModals";
import { useAllCategory } from "@/hooks/category/AllCategory";
import Select from "react-select";
import { useCreatSubCategory } from "@/hooks/subCategory/createSubCategory";
export default function CreateSubCategoryModal() {
  const state = useModalHanlder();

  /// reactr query ///
  const { mutate, isPending } = useCreatSubCategory();
  const { data } = useAllCategory();

  //. react select conmfig///
  const option = data?.data.map((item) => ({
    value: item.id,
    label: item.name,
  }));
  //. react select conmfig///
  const activptions = [
    { value: true, label: "فعال" },
    { value: false, label: "غیر فعال" },
  ];

  // reacrt hook form setting ///
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateSubCategory>({
    mode: "onTouched",
    defaultValues: {
      categoryId: option && option[0].value,
      active:activptions[0].value
    },
  });
  /// react querty settting ///

  // submit form ///
  const onSubmit = (data: CreateSubCategory) => {
    mutate(data);
  };
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/10 flex items-center justify-center">
      <div className="flex flex-col  shadow-2xl bg-white overflow-hidden rounded-md">
        <h1 className="bg-gray-300 text-center p-2 text-white">زیر دسته جدید</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-full gap-y-2  shadow-lg md:gap-y-4  p-10 rounded-md md:py-12 md:px-16  flex flex-col container"
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
                isSearchable
                options={activptions}
                value={activptions.find((o) => o.value === field.value)}
                onChange={(option) => field.onChange(option?.value)}
                onBlur={field.onBlur}
                closeMenuOnSelect
                placeholder="وضعیت را انتخاب کنید"
              />
            )}
          />
          <Controller
            control={control}
            name="categoryId"
            render={({ field }) => (
              <Select
                className="basic-single"
                isRtl
                isSearchable
                options={option}
                value={option?.find((o) => o.value === field.value) ?? null}
                onChange={(option) => field.onChange(option?.value)}
                onBlur={field.onBlur}
                closeMenuOnSelect
                placeholder="دسته را انتخاب کنید"
              />
            )}
          />

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
              onClick={() => state.setSubcategoryModal(false)}
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
