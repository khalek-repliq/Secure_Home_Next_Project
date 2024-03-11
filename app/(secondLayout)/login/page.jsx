"use client";
import CustomInput from "@/components/custom-input/CustomInput";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const router = useRouter();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit: (values, { resetForm }) => {
        resetForm();
        const existingUser = JSON.parse(localStorage.getItem("user"));
        if (
          values.email === existingUser.email &&
          values.password === existingUser.password
        ) {
          router.push("/");
          toast.success("login successfully.");
        } else {
          router.push("/registration");
          return toast.error("user not exist.");
        }
      },
    });

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] my-10">
      <div className="p-5 bg-white shadow-lg rounded-md w-full md:w-2/3 lg:w-1/4 mt-5">
        <h5 className="text-3xl text-center mb-3">Login</h5>
        <div className="space-y-3">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="font-bold">
                Enter Email
              </label>
              <CustomInput
                placeholder="Ex: abc@gmail.com"
                type={"email"}
                autoComplete={"off"}
                id={"email"}
                name={"email"}
                value={values.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="text-red-600">{errors.email}</p>
              ) : null}
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="password" className="font-bold">
                Enter Password
              </label>
              <CustomInput
                autoComplete="off"
                placeholder="Use a strong password"
                type={"password"}
                name="password"
                id="password"
                value={values.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="text-red-600">{errors.password}</p>
              ) : null}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
