"use client";

import { useRouter } from "next/router";
import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Toast } from "@/components/Toast";
import { ToastMessage } from "@/components/ToastMessage";
import { CloseToast } from "@/components/CloseToast";
import { Spinner } from "@/components/Spinner";
import axios from "axios";
// import useAuth from "@/hooks/useAuth";
import { useSignup } from "@/hooks/useSignup";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type ISignup = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const SignupForm = (): JSX.Element => {
  // const router = useRouter();
  // const [send, setSend] = useState(false); //Controlls sending state
  // const [sendError, setSendError] = useState(false); //Controlls the behavior of the toast message
  // const [toast, setToast] = useState(false); //Controlls the open and close of the toast
  const [signupData, setSignupData] = useState<ISignup>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  // const { signup, error, isLoading } = useSignup();

  // const { user, dispatch } = useAuth();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSignupData((prevState) => {
      const { name, type, value, checked } = e.target;

      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // await signup(signupData);
    console.log(signupData);
    // await fetchData();
  };

  const fetchData = async () => {
    try {
      // setSend(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/users/signup`,
        signupData
      );

      console.log(response);

      // setToast(true);

      // if (response.statusText !== "OK") {
      //   setSendError(true);
      //   setSend(false);
      //   return response;
      // }

      // setSend(false);
      // setSendError(false);

      // dispatch({
      //   type: "LOGIN",
      //   payload: {
      //     token: response.data.token,
      //     username: response.data.user.email,
      //   },
      // });

      // const interval = setTimeout(() => {
      //   router.push("/contacts");
      // }, 2000);

      // clearInterval(interval);
      // router.push("/contacts");
      // return response;
    } catch (error) {
      console.log("Error", error);
      throw Error("Unable to signup");
    }
  };

  return (
    <section className="px-4">
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-full max-w-xs sm:max-w-lg lg:max-w-3xl bg-gradient-to-tl from-orange-600 to-violet-600 p-6 rounded-lg shadow-md shadow-white/10">
          <section className="grid grid-cols-1 lg:grid-cols-2 p-8">
            <article className="lg:border-r lg:border-r-gray-800">
              <h2 className="text-xl font-semibold tracking-wide text-center">
                Signup
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
            <section className="flex items-center justify-center pl-10">
              <form
                onSubmit={handleSubmit}
                className="">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <article className="lg:col-span-1">
                    <label
                      htmlFor="firstName"
                      className="sr-only">
                      First name
                    </label>
                    <input
                      type="text"
                      className="pl-2 rounded-lg outline-none focus:bg-gray-200 text-black h-10 w-full"
                      id="firstName"
                      name="firstName"
                      placeholder="First name"
                      onChange={handleChange}
                      value={signupData.firstName}
                    />
                  </article>
                  <article className="lg:col-span-1">
                    <label
                      htmlFor="lastName"
                      className="sr-only">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="pl-2 rounded-lg outline-none focus:bg-gray-200 text-black h-10 w-full"
                      id="lastName"
                      name="lastName"
                      placeholder="Last name"
                      onChange={handleChange}
                      value={signupData.lastName}
                    />
                  </article>
                  <article className="lg:col-span-2">
                    <label
                      htmlFor="email"
                      className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      className="pl-2 rounded-lg outline-none focus:bg-gray-200 text-black h-10 w-full"
                      id="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      value={signupData.email}
                    />
                  </article>
                  <article className="lg:col-span-2">
                    <label
                      htmlFor="password"
                      className="sr-only">
                      Password
                    </label>
                    <input
                      type="password"
                      className="pl-2 rounded-lg outline-none focus:bg-gray-200 text-black h-10 w-full"
                      id="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      value={signupData.password}
                    />
                  </article>
                </article>
                <div className="mx-auto flex items-center justify-center lg:justify-start mt-4">
                  <button
                    type="submit"
                    aria-label="button"
                    className="rounded-md text-white bg-green-600 transition duration-500 ease-in-out hover:bg-green-700 hover:ring hover:ring-green-600 hover:ring-offset-1 hover:ring-offset-transparent px-4 py-2 font-bold mt-2">
                    Signup
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
            message="Error while creating the account"
          />
        ) : (
          <ToastMessage
            success
            message="Account created successfully!"
          />
        )}
      </Toast> */}
    </section>
  );
};

export { SignupForm };
