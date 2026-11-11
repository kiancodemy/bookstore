
import { useState } from "react";
import { useForm } from "react-hook-form";
type SelectType = {
select: React.Dispatch<React.SetStateAction<string>>
};
export default function ForgetPassword({select}:SelectType) {
  type LoginFormValues = {
    email: string;
   
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
    
      <button className="bg-blue-500 text-sm md:text-base py-2 px-6 text-white rounded-md cursor-pointer">
        درخواست تغییر رمز
      </button>
      
      <button onClick={()=>select("login")} className="bg-blue-500 text-sm md:text-base py-2 px-6 text-white rounded-md cursor-pointer">
        بازگشت
      </button>
    
    
    </form>
  );
}
