"use client";

import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useRouter } from "next/router";
// import { Toast } from "@/components/Toast";
// import { ToastMessage } from "@/components/ToastMessage";
// import { CloseToast } from "@/components/CloseToast";
import { Spinner } from "@/components/Spinner";
import { useLogin } from "@/hooks/useLogin";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type ILogin = {
  email: string;
  password: string;
};

const LoginForm = (): JSX.Element => {
  // const router = useRouter();
  // const [send, setSend] = useState(false); //Controlls sending state
  // const [sendError, setSendError] = useState(false); //Controlls the behavior of the toast message
  // const [toast, setToast] = useState(false); //Controlls the open and close of the toast
  const [loginData, setLoginData] = useState<ILogin>({
    email: "",
    password: "",
  });

  // const { login, error, isLoading } = useLogin();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLoginData((prevState) => {
      const { name, type, value, checked } = e.target;

      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // await login(loginData);

    console.log(loginData);
    // await fetchData();
  };

  // const fetchData = async () => {
  //   const data = await JSON.stringify(loginData);

  //   const reqOpt = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: data,
  //   };

  //   const response = await fetch(
  //     `${process.env.NEXT_PUBLIC_API}/auth/login`,
  //     reqOpt
  //   );

  //   const result = await response.json();

  //   console.log("Response", response);
  //   console.log("Result", result);

  //   if (!response.ok) {
  //     setSendError((prevState) => (prevState = true));
  //     setSend((prevState) => (prevState = false));
  //     return;
  //   } else {
  //     setSend((prevState) => (prevState = false));
  //     setSendError((prevState) => (prevState = false));

  //     setTimeout(() => {
  //       router.push("/contacts");
  //     }, 2000);

  //     return result;
  //   }
  // };

  return (
    <section className="px-4">
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-full max-w-xs sm:max-w-lg lg:max-w-3xl bg-gradient-to-tl from-orange-600 to-violet-600 p-6 rounded-lg shadow-md shadow-white/10">
          <section className="grid grid-cols-1 lg:grid-cols-2 p-8">
            <article className="lg:border-r lg:border-r-gray-800">
              <h2 className="text-xl font-semibold tracking-wide text-center">
                Login
              </h2>
              <figure className="relative w-full h-72 overflow-hidden">
                <Image
                  src={
                    "https://res.cloudinary.com/marsdev/image/upload/v1682552763/Projects/contact-app/User_interface_Flatline_h4rcg2.png"
                  }
                  alt="Login image"
                  fill={true}
                  className="object-contain"
                />
              </figure>
            </article>
            <section className="flex items-center justify-center">
              <form
                onSubmit={handleSubmit}
                className="space-y-4">
                <article className="mx-auto">
                  <label
                    htmlFor="email"
                    className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    className="pl-2 rounded-lg outline-none focus:bg-gray-200 text-black h-10"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={loginData.email}
                  />
                </article>
                <article className="mx-auto">
                  <label
                    htmlFor="password"
                    className="sr-only">
                    Password
                  </label>
                  <input
                    type="password"
                    className="pl-2 rounded-lg outline-none focus:bg-gray-200 text-black h-10"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={loginData.password}
                  />
                </article>
                <div className="mx-auto flex items-center justify-center lg:justify-start">
                  <button
                    type="submit"
                    className="rounded-md text-white bg-green-600 transition duration-500 ease-in-out hover:bg-green-700 hover:ring hover:ring-green-600 hover:ring-offset-1 hover:ring-offset-transparent px-4 py-2 font-bold mt-2">
                    Login
                  </button>
                </div>
                {/* {error && (
              <div className="mx-auto border rounded-md px-4 py-2 bg-red-400">
                <p className="flex items-center gap-x-2">
                  <ExclamationTriangleIcon className="text-red-600 w-5 h-5" />{" "}
                  {error}
                </p>
              </div>
            )} */}
              </form>
            </section>
          </section>
        </div>
      </div>

      {/* <Toast open={toast}>
        <CloseToast setToast={setToast} />
        {sendError ? (
          <ToastMessage
            error
            message="Error while loggin"
          />
        ) : (
          <ToastMessage
            success
            message="Logged in successfully!"
          />
        )}
      </Toast> */}
    </section>
  );
};

export { LoginForm };
