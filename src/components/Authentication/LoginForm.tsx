import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FiEyeOff } from "react-icons/fi";
import useAuthStore from "@/store/useAuthStore";

import { FcGoogle } from "react-icons/fc";
import { useState,useEffect } from "react";
import { type LoginType } from "@/type/Authnetication.Type";
import { useLogin } from "@/hooks/logIn";
import { useForm } from "react-hook-form";
import toasters from "@/utility/toaster";


type SelectType = {
  select: React.Dispatch<React.SetStateAction<string>>;
};
export default function LoginForm({ select }: SelectType) {

  /// navigation fucntion
  const navigate = useNavigate(); 


  // zustand wjt token setterr //
  const setJwtToken=useAuthStore((s)=>s.setJwtToken);
  


  const [hide, setHide] = useState(true);
  //// react hook form setting ////
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    mode: "onTouched",
  });

  
  

  /// login request  by react router////
  const { mutate, isPending, isError, data, error,isSuccess } = useLogin();

  const onSubmit = (datas: LoginType) => {
    mutate(datas);
  };
  /// handling error or succes message ////
  useEffect(()=>{
    if(isError){
      toasters("error",error.response?.data.message)
    }
    if(isSuccess){
      toasters("success",data.message)
      setJwtToken(typeof data.data==="string"?data.data:null);
      navigate("/admin"); 
    }
  },[isError,error,isSuccess,data?.message,navigate,setJwtToken,data?.data])

  return (
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
      <div className=" flex flex-col">
        <div className="flex flex-col relative">
          <span
            onClick={() => setHide((prev) => !prev)}
            className="absolute  items-center justify-center cursor-pointer p-4 flex top-0 left-0 bottom-0"
          >
            {hide ? <FiEyeOff className="text-lg"></FiEyeOff> : <FiEye></FiEye>}
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
      <button disabled={isPending} className="bg-blue-500 disabled:bg-gray-400 shadow-lg text-sm md:text-base py-2 px-6 text-white rounded-md cursor-pointer">
        ورود
      </button>
      <button
       onClick={()=>select("forgetpassword")}
        className="hover:underline  underline-offset-7 decoration-solid decoraion-1 self-start text-sm cursor-pointer "
      >
        فراموشی رمز عبور
      </button>
      <button
        type="submit"
        className="flex cursor-pointer text-base hover:bg-gray-100 justify-center items-center gap-x-2.5 border-bordercolor border rounded-md py-2 px-6"
      >
        <span className="text-sm md:text-base ">ورود با گوگل</span>
        <span className="text-2xl">
          <FcGoogle></FcGoogle>
        </span>
       
      </button>
    </form>
  );
}
