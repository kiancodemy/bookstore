import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toasters from "@/utility/toaster";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useResetPassword } from "@/hooks/resetPassword";
export default function ResetPassword() {

  const navigate=useNavigate();
  /// get token query params  ///
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // "309159"
  type ResetPassword = {
    password: string;
  };
  const [hide, setHide] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPassword>({
    mode: "onTouched",
  });

  const { mutate, isPending, isError, data, error, isSuccess } =
    useResetPassword();

  const onSubmit = (data: ResetPassword) => {
    
    console.log({ token: token || null, newPassword: data.password });
    mutate({ token: token || null, newPassword: data.password });
  };
  useEffect(() => {
    if (isError) {
    
      toasters("error", error.response?.data.message);
    }
    if (isSuccess) {
      toasters("success", data.message);
      navigate("/")
    }
  }, [isError, error, isSuccess, data?.message,navigate]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-full gap-y-3 md:gap-y-6 flex-col flex container"
    >
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
          <Link
          
            to={"/login"}
            className="bg-green text-center text-sm md:text-base py-2 px-6 text-white rounded-md cursor-pointer"
          >
            درخواست مجدد
          </Link>
        </div>
      </div>
    </form>
  );
}
