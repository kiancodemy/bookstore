import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function SignUpForm() {
  type LoginFormValues = {
    email: string;
    name: string;
    lastname: string;
    password: string;
  };
  const [hide, setHide] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-full gap-y-3 md:gap-y-6 flex-col flex container"
    >
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <input
          placeholder="نام"
            {...register("name", {
              required: "نام الزامی است",
             
            })}
            className="p-2  placeholder:text-sm placeholder:md:text-base border-bordercolor border focus  focus:border-transparent  rounded-md focus:placeholder:text-transparent focus:outline-2 focus:outline-blue-500"
            type="text"
          />
          <span className="text-xs text-red-600  pt-2">
            {errors?.name?.message}
          </span>
        </div>
        <div className="flex flex-col">
          
          <input
          placeholder="نام خانوادگی"
            {...register("lastname", {
              required: "نام خانوادگی الزامی است",
             
            })}
            className="p-2  placeholder:text-sm placeholder:md:text-base border-bordercolor border focus  focus:border-transparent  rounded-md focus:placeholder:text-transparent focus:outline-2 focus:outline-blue-500"
            type="text"
          />
          <span className="text-xs text-red-600  pt-2">
            {errors?.lastname?.message}
          </span>
        </div>
        <div className="flex flex-col">
          
          <input
          placeholder="ایمیل"
            {...register("email", {
              required: "ایمیل الزامی است",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "ایمیل وارد شده معتبر نیست",
              },
            })}
            className="p-2  placeholder:text-sm placeholder:md:text-base border-bordercolor border focus  focus:border-transparent  rounded-md focus:placeholder:text-transparent focus:outline-2 focus:outline-blue-500"
            type="text"
          />
          <span className="text-xs text-red-600  pt-2">
            {errors?.email?.message}
          </span>
        </div>
        <div className=" flex flex-col">
          <div className="flex flex-col relative">
            <span
              onClick={() => setHide((prev) => !prev)}
              className="absolute  items-center justify-center cursor-pointer p-4 flex top-0 left-0 bottom-0"
            >
              {hide ? (
                <FiEyeOff className="text-lg"></FiEyeOff>
              ) : (
                <FiEye></FiEye>
              )}
            </span>

            <input
              {...register("password", {
                required: "رمز عبور الزامی است",
                minLength: {
                  value: 8,
                  message: "رمز عبور باید حداقل ۸ کاراکتر باشد",
                },
              })}
              className="p-2  placeholder:text-sm placeholder:md:text-base border-bordercolor border focus  focus:border-transparent  rounded-md focus:placeholder:text-transparent focus:outline-2 focus:outline-blue-500"
              type={hide ? "password" : "text"}
              placeholder="رمز عبور"
            />
          </div>
          <span className="text-xs text-red-600  pt-2">
            {errors?.password?.message}
          </span>
        </div>
      </div>

      <button className="bg-green text-sm md:text-base py-2 px-6 text-white rounded-md cursor-pointer">
        ثبت نام
      </button>
    </form>
  );
}
