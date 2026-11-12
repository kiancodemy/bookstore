import toasters from "@/utility/toaster";
import { type forgetpassword } from "@/type/Authnetication.Type";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForgetPassword } from "@/hooks/forgetPassword";
type selectType = {
  select: React.Dispatch<React.SetStateAction<string>>;
};
export default function ForgetPassword({ select }: selectType) {
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<forgetpassword>({
    mode: "onTouched",
  });
  /// react querty settting ///
  const { mutate, isPending, isError, data, error, isSuccess } =
    useForgetPassword();
  const onSubmit = (data: forgetpassword) => {
    mutate(data);
  };
  /// handling error or succes message ////
  useEffect(() => {
    if (isError) {
      toasters("error", error.response?.data.message);
    }
    if (isSuccess) {
      toasters("success", data.message);
      navigate("/")
    }
  }, [isError, error, isSuccess, data?.message, navigate]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-full gap-y-3 md:gap-y-6  flex flex-col container"
    >
      <div className="flex flex-col">
        <p className="text-center pb-6">بازیابی رمز عبور</p>
        <input
          placeholder="ایمیل خود را وارد کنید"
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

      <button
        disabled={isPending}
        className="bg-blue-500 disabled:bg-gray-300 text-sm md:text-base py-2 px-6 text-white rounded-md cursor-pointer"
      >
        درخواست تغییر رمز
      </button>

      <button
        onClick={() => select("login")}
        className="bg-blue-500 text-sm md:text-base py-2 px-6 text-white rounded-md cursor-pointer"
      >
        بازگشت
      </button>
    </form>
  );
}
