import CustomInput from "@/components/custom-input/CustomInput";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] my-10">
      <div className="p-5 bg-white shadow-lg rounded-md w-full md:w-2/3 lg:w-1/4 mt-5">
        <h5 className="text-3xl text-center mb-3">Login</h5>
        <div className="space-y-3">
          <div className="flex flex-col space-y-2">
            <label className="font-bold">Enter Email</label>
            <CustomInput placeholder="Ex: abc@gmail.com" type={"email"} />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-bold">Enter Password</label>
            <CustomInput
              placeholder="Use a strong password"
              type={"password"}
            />
          </div>
          <input
            className="inline-block primary_btn_bg px-5 py-2 rounded-md text-sm hover:bg-[#2a8a82] duration-150 transition-all w-full mt-5 md:mt-7 cursor-pointer"
            type="submit"
            value={"Login"}
          />
          <div>
            <p>
              Are you a new user? {""}
              <span>
                <Link className="text-[#27bfb3]" href="/registration">
                  Registration
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
