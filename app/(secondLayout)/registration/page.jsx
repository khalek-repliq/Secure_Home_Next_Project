"use client";
import CustomInput from "@/components/custom-input/CustomInput";
import { signUPSchema } from "@/schema/yupSchema";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUPSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();

        const existingUser = JSON.parse(localStorage.getItem("user"));
        if (existingUser) {
          return toast.error("user already exist.");
        } else {
          localStorage.setItem("user", JSON.stringify(values));
          toast.success("User saved.");
        }
      },
    });

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] my-10">
      <div className="p-5 bg-white shadow-lg rounded-md w-full md:w-2/3 lg:w-2/4 xl:w-1/4 mt-5">
        <h5 className="text-3xl text-center mb-3">Registration</h5>
        <div className="space-y-3">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="font-bold">
                Enter Name
              </label>
              <CustomInput
                placeholder="Jhon Doe"
                type={"Text"}
                autoComplete={"off"}
                id={"name"}
                name={"name"}
                value={values.name}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="text-red-600">{errors.name}</p>
              ) : null}
            </div>
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

            <div className="flex flex-col space-y-2">
              <label htmlFor="confirm_password" className="font-bold">
                Confirm Password
              </label>
              <CustomInput
                type="password"
                autoComplete="off"
                name="confirm_password"
                id="confirm_password"
                placeholder="Confirm Password"
                value={values.confirm_password}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              {errors.confirm_password && touched.confirm_password ? (
                <p className="text-red-600">{errors.confirm_password}</p>
              ) : null}
            </div>

            <input
              className="inline-block primary_btn_bg px-5 py-2 rounded-md text-sm hover:bg-[#2a8a82] duration-150 transition-all w-full mt-5 md:mt-7 cursor-pointer"
              type="submit"
              value={"Submit"}
            />
            <div>
              <p>
                Already have an account?{" "}
                <span>
                  <Link className="text-[#27bfb3]" href="/login">
                    Login
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

export default Registration;
