import { useState } from "react";
import LoginForm from "./LoginForm";
import ForgetPassword from "./ForgetPassword";

import SignUpForm from "./SignupForm";
export default function AuthenticationSkeleton() {
  const [loginType, setLoginType] = useState<string>("login");
  return (
    <div className="pb-48  bg-gray-100 pt-7 items-start md:pt-25 justify-center flex">
      <div className="flex gap-y-10 bg-white max-w-9/10 mx-auto md:max-w-sm  container rounded-md  p-7 flex-col">
        {loginType !== "forgetpassword" && (
          <div className="grid  cursor-pointer   rounded-md p-2 bg-gray-200 grid-cols-2">
            <button
              onClick={() => setLoginType("login")}
              className={` cursor-pointer ${loginType == "login" && "bg-white"} text-sm md:text-base p-2 md:p-3 rounded-md`}
            >
              ورود
            </button>
            <button
              className={` cursor-pointer ${loginType == "signup" && "bg-white"} text-sm md:text-base p-2 md:p-3 rounded-md`}
              onClick={() => setLoginType("signup")}
            >
              ثبت نام
            </button>
          </div>
        )}

        {loginType == "login" && <LoginForm select={setLoginType}></LoginForm>}
        {loginType == "signup" && <SignUpForm  select={setLoginType}></SignUpForm>}
        {loginType == "forgetpassword" && <ForgetPassword  select={setLoginType}></ForgetPassword>}
      </div>
    </div>
  );
}
