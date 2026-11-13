import { type forgetpassword } from "@/type/Authnetication.Type";
import { useForm } from "react-hook-form";
import { useForgetPassword } from "@/hooks/authentication/forgetPassword";
type selectType = {
  select: React.Dispatch<React.SetStateAction<string>>;
};
export default function CategoryModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<forgetpassword>({
    mode: "onTouched",
  });
  /// react querty settting ///
  const { mutate, isPending } = useForgetPassword();
  const onSubmit = (data: forgetpassword) => {
    mutate(data);
  };
  return (
    <div className="absolute inset-0 backdrop-blur-sm bg-gray-50 flex items-center justify-center">
      <div className="flex flex-col p-3 rounded-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-full gap-y-3 md:gap-y-6  flex flex-col container"
        >
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

          <div className="flex">
            <button
              disabled={isPending}
              className="bg-blue-500 disabled:bg-gray-400 shadow-lg text-sm md:text-base py-2 px-6 text-white rounded-md cursor-pointer"
            >
              ورود
            </button>
            <button
              disabled={isPending}
              className="bg-red-500 disabled:bg-gray-400 shadow-lg text-sm md:text-base py-2 px-6 text-white rounded-md cursor-pointer"
            >
              بستن            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
