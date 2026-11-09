import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ResetPassword() {
  type LoginFormValues = {
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
      {" "}
      <div className="pb-48  bg-gray-100 pt-7 items-start md:pt-25 justify-center flex">
        <div className="flex gap-y-6 bg-white max-w-9/10 mx-auto md:max-w-sm  container rounded-md  p-7 flex-col">
          <p className="text-center text-sm md:text-base">تغییر رمز عبور</p>
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
                placeholder="رمز عبور جدید را وارد کنید"
              />
            </div>
            <span className="text-xs text-red-600  pt-2">
              {errors?.password?.message}
            </span>
          </div>

          <button className="bg-green text-sm md:text-base py-2 px-6 text-white rounded-md cursor-pointer">
            تغییر رمز عبور
          </button>
        </div>
      </div>
    </form>
  );
}
