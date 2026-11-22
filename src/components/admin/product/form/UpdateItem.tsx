import { useState, useMemo } from "react";
import { useAllCategory } from "@/hooks/category/admin/AllCategory";
import ErrorBoundry from "@/components/Error/ErrorBoundry";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { languageOptions } from "@/type/Product";
import { type CreateBookType } from "@/type/Product";
import { useCreateNewBook } from "@/hooks/product/admin/CreateNewBook";
import { useGetBookById } from "@/hooks/product/admin/GetBookById";
import { useParams } from "react-router-dom";
/* ------------------------------------------------------------------ */
/*  Options                                                            */
/* ------------------------------------------------------------------ */
type subcategory = {
  value: number;
  label: string;
};

/*  Component */

export default function UpdateItem() {
  const { id } = useParams();
  const [subcategory, setSubctegory] = useState<subcategory[]>([]);

  /// fetch single book
  const {
    data: book,
    isLoading: bookLoading,
    error: bookErrorMessage,
    isError: bookError,
    isSuccess: isBookSuccess,
  } = useGetBookById(id);
  /// fetch all category ////
  const { data, isLoading, isError, error, isSuccess, isPending } =
    useAllCategory();

  //// uplaod new book ////
  const { mutate } = useCreateNewBook();
  console.log(book);

  /// memoize category becasue it is constant
  const category = useMemo(() => {
    return (
      data?.data
        ?.filter((item) => item.subCategories.length > 0)
        .map((item) => ({
          value: item.id,
          label: item.name,
        })) ?? []
    );
  }, [data]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateBookType>({
    mode: "onTouched",
    defaultValues: { description: null, publisher: null, translator: null },
  });

  const onSubmit = (datas: CreateBookType) => {
    mutate(datas);
  };

  const handleSubCategory = (id: number) => {
    const selectedCategory = data?.data.find((item) => item.id === id);
    if (selectedCategory) {
      const subcategory = selectedCategory.subCategories.map((item) => ({
        value: item.id,
        label: item.name,
      }));
      setSubctegory(subcategory);
    }
  };

  const inputClass =
    "p-2 placeholder:text-sm placeholder:md:text-base border-bordercolor border focus focus:border-transparent rounded-md focus:placeholder:text-transparent focus:outline-2 focus:outline-blue-500";
  const labelClass = "text-sm mb-1 text-gray-700";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-full bg-white rounded-md p-4 gap-y-3  md:gap-y-6 flex flex-col container"
    >
      {/* Title */}
      <p className="text-center rounded-md bg-orange-500 md:text-base text-sm text-white py-4">
        فرم به روز رسانی محصول
      </p>
      <ErrorBoundry
        isError={isError || bookError}
        isLoading={isLoading || bookLoading}
        isSuccess={isSuccess && isBookSuccess}
        error={
          error?.response?.data.message ||
          bookErrorMessage?.response?.data.message
        }
      >
        <div className="md:container md:grid md:grid-cols-2 md:gap-5 ">
          {/* Category (react-select) */}
          <div className="flex flex-col">
            <label className={labelClass}>دسته‌بندی *</label>
            <Controller
              name="categoryId"
              control={control}
              rules={{ required: "انتخاب دسته‌بندی الزامی است" }}
              render={({ field }) => (
                <Select
                  inputId="categoryId"
                  options={category}
                  placeholder="انتخاب دسته‌بندی"
                  isRtl
                  name={field.name}
                  ref={field.ref}
                  value={category?.find((o) => o.value === field.value) ?? null}
                  onChange={(opt) => {
                    field.onChange(opt?.value);
                    handleSubCategory(opt.value);
                  }}
                  onBlur={field.onBlur}
                />
              )}
            />
            <span className="text-xs text-red-600 pt-2">
              {errors?.categoryId?.message}
            </span>
          </div>

          {/* Subcategory (react-select) */}
          <div className="flex flex-col">
            <label className={labelClass}>زیردسته *</label>
            <Controller
              name="subcategoryId"
              control={control}
              rules={{ required: "انتخاب زیردسته الزامی است" }}
              render={({ field }) => (
                <Select
                  inputId="subcategoryId"
                  options={subcategory}
                  placeholder="انتخاب زیردسته"
                  isRtl
                  name={field.name}
                  ref={field.ref}
                  value={
                    subcategory.find((o) => o.value === field.value) ?? null
                  }
                  onChange={(opt) => {
                    field.onChange(opt?.value);
                  }}
                  onBlur={field.onBlur}
                />
              )}
            />
            <span className="text-xs text-red-600 pt-2">
              {errors?.subcategoryId?.message}
            </span>
          </div>
          <div className="flex  flex-col">
            <label className={labelClass}>عنوان کتاب *</label>
            <input
              placeholder="عنوان کتاب"
              {...register("title", {
                required: "عنوان کتاب الزامی است",
                maxLength: {
                  value: 255,
                  message: "عنوان کتاب نمی‌تواند بیشتر از ۲۵۵ کاراکتر باشد",
                },
              })}
              className={inputClass}
              type="text"
            />
            <span className="text-xs text-red-600 pt-2">
              {errors?.title?.message}
            </span>
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className={labelClass}>توضیحات</label>
            <textarea
              placeholder="توضیحات کتاب"
              rows={4}
              {...register("description", {
                maxLength: {
                  value: 400,
                  message: "توضیحات نمی‌تواند بیشتر از ۴۰۰ کاراکتر باشد",
                },
              })}
              className={inputClass}
            />
            <span className="text-xs text-red-600 pt-2">
              {errors?.description?.message}
            </span>
          </div>

          {/* Publisher */}
          <div className="flex flex-col">
            <label className={labelClass}>ناشر</label>
            <input
              placeholder="نام ناشر"
              {...register("publisher", {
                maxLength: {
                  value: 200,
                  message: "نام ناشر نمی‌تواند بیشتر از ۲۰۰ کاراکتر باشد",
                },
              })}
              className={inputClass}
              type="text"
            />
            <span className="text-xs text-red-600 pt-2">
              {errors?.publisher?.message}
            </span>
          </div>

          {/* Translator */}
          <div className="flex flex-col">
            <label className={labelClass}>مترجم</label>
            <input
              placeholder="نام مترجم"
              {...register("translator", {
                maxLength: {
                  value: 40,
                  message: "نام مترجم نمی‌تواند بیشتر از ۴۰ کاراکتر باشد",
                },
              })}
              className={inputClass}
              type="text"
            />
            <span className="text-xs text-red-600 pt-2">
              {errors?.translator?.message}
            </span>
          </div>

          {/* Language (react-select) */}
          <div className="flex flex-col">
            <label className={labelClass}>زبان کتاب *</label>
            <Controller
              name="language"
              control={control}
              rules={{ required: "زبان کتاب الزامی است" }}
              render={({ field }) => (
                <Select
                  inputId="language"
                  options={languageOptions}
                  placeholder="انتخاب زبان"
                  isRtl
                  name={field.name}
                  ref={field.ref}
                  value={
                    languageOptions.find((o) => o.value === field.value) ?? null
                  }
                  onChange={(opt) => field.onChange(opt?.value)}
                  onBlur={field.onBlur}
                />
              )}
            />
            <span className="text-xs text-red-600 pt-2">
              {errors?.language?.message}
            </span>
          </div>

          {/* Publication Year */}
          <div className="flex flex-col">
            <label className={labelClass}>سال انتشار *</label>
            <input
              placeholder="مثلاً ۱۴۰۳"
              {...register("publicationYear", {
                required: "سال انتشار الزامی است",

                min: {
                  value: 1000,
                  message: "سال انتشار باید حداقل ۱۰۰۰ باشد",
                },
                max: {
                  value: 2100,
                  message: "سال انتشار باید حداکثر ۲۱۰۰ باشد",
                },
                valueAsNumber: true,
              })}
              className={inputClass}
              type="number"
            />
            <span className="text-xs text-red-600 pt-2">
              {errors?.publicationYear?.message}
            </span>
          </div>

          {/* Pages */}
          <div className="flex flex-col">
            <label className={labelClass}>تعداد صفحات *</label>
            <input
              placeholder="تعداد صفحات"
              {...register("pages", {
                required: "تعداد صفحات کتاب الزامی است",
                min: { value: 1, message: "تعداد صفحات باید حداقل ۱ باشد" },
                valueAsNumber: true,
              })}
              className={inputClass}
              type="number"
            />
            <span className="text-xs text-red-600 pt-2">
              {errors?.pages?.message}
            </span>
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label className={labelClass}>قیمت کتاب *</label>
            <input
              placeholder="قیمت فروش"
              {...register("price", {
                required: "قیمت کتاب الزامی است",
                min: {
                  value: 0.01,
                  message: "قیمت کتاب باید بیشتر از صفر باشد",
                },
                validate: (v) =>
                  Number.isInteger(v) || "قیمت باید بدون اعشار باشد",
                valueAsNumber: true,
              })}
              className={inputClass}
              type="number"
              step="1"
            />
            <span className="text-xs text-red-600 pt-2">
              {errors?.price?.message}
            </span>
          </div>

          {/* Cost Price */}
          <div className="flex flex-col">
            <label className={labelClass}>قیمت تمام‌شده *</label>
            <input
              placeholder="قیمت خرید / تمام‌شده"
              {...register("costPrice", {
                required: "قیمت تمام‌شده کتاب الزامی است",
                min: {
                  value: 0.01,
                  message: "قیمت تمام‌شده باید بیشتر از صفر باشد",
                },
                validate: (v) =>
                  Number.isInteger(v) || "قیمت تمام‌شده باید بدون اعشار باشد",
                valueAsNumber: true,
              })}
              className={inputClass}
              type="number"
              step="1"
            />
            <span className="text-xs text-red-600 pt-2">
              {errors?.costPrice?.message}
            </span>
          </div>

          {/* Stock */}
          <div className="flex flex-col">
            <label className={labelClass}>موجودی *</label>
            <input
              placeholder="موجودی کتاب"
              {...register("stock", {
                required: "موجودی کتاب الزامی است",
                min: { value: 0, message: "موجودی کتاب نمی‌تواند منفی باشد" },
                valueAsNumber: true,
              })}
              className={inputClass}
              type="number"
            />
            <span className="text-xs text-red-600 pt-2">
              {errors?.stock?.message}
            </span>
          </div>
        </div>
        <div className="p-2 flex   flex-col md:justify-center md:items-center  gap-y-6">
          {/* Submit */}
          <button
            disabled={isPending || isLoading || isError}
            type="submit"
            className="bg-blue-500 disabled:bg-gray-400 shadow-lg text-sm md:text-base py-2 px-6 text-white rounded-md cursor-pointer"
          >
            {isPending ? "در حال ذخیره..." : "به  روز رسانی"}
          </button>

          {/* Back / Cancel */}
          <Link
            to={"/admin/products"}
            className="hover:underline text-center  bg-blue-500 underline-offset-7 decoration-solid  shadow-lg text-sm md:text-base py-2 px-6 text-white rounded-md cursor-pointer"
          >
            بازگشت
          </Link>
        </div>
      </ErrorBoundry>
    </form>
  );
}
