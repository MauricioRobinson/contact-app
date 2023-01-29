import { useRouter } from "next/router";
import React, { useState } from "react";
import { Toast } from "@components/Toast";
import { ToastMessage } from "@components/ToastMessage";
import { CloseToast } from "@components/CloseToast";
import { Spinner } from "@components/Spinner";
import axios from "axios";
import useAuth from "@hooks/useAuth";
import { useSignup } from "@hooks/useSignup";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const SignupForm = () => {
  const router = useRouter();
  const [send, setSend] = useState(false); //Controlls sending state
  const [sendError, setSendError] = useState(false); //Controlls the behavior of the toast message
  const [toast, setToast] = useState(false); //Controlls the open and close of the toast
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { signup, error, isLoading } = useSignup();

  const { user, dispatch } = useAuth();

  const handleChange = (e) => {
    setSignupData((prevState) => {
      const { name, type, value, checked } = e.target;

      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(signupData);
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

      dispatch({
        type: "LOGIN",
        payload: {
          token: response.data.token,
          username: response.data.user.email,
        },
      });

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
        <div className="bg-gradient-to-tl from-orange-600 to-violet-600 max-w-md md:max-w-2xl lg:max-w-4xl p-6 rounded-lg shadow-md shadow-white/10">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2">
              <label
                htmlFor="firstName"
                className="sr-only">
                First name
              </label>
              <input
                type="text"
                className="pl-2 rounded-lg w-full"
                id="firstName"
                name="firstName"
                placeholder="First name"
                onChange={handleChange}
                value={signupData.firstName}
              />
            </div>
            <div className="lg:col-span-2">
              <label
                htmlFor="lastName"
                className="sr-only">
                Last name
              </label>
              <input
                type="text"
                className="pl-2 rounded-lg w-full"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                onChange={handleChange}
                value={signupData.lastName}
              />
            </div>
            <div className="md:col-span-2 lg:col-span-3">
              <label
                htmlFor="email"
                className="sr-only">
                Email
              </label>
              <input
                type="email"
                className="pl-2 rounded-lg w-full"
                id="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={signupData.email}
              />
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="sr-only">
                Password
              </label>
              <input
                type="password"
                className="pl-2 rounded-lg w-full"
                id="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={signupData.password}
              />
            </div>
            <div className="mx-auto md:col-span-2 md:mr-0 lg:col-span-4">
              <button
                type="submit"
                disabled={isLoading}
                className="rounded-md text-white bg-green-600 transition duration-500 ease-in-out hover:bg-green-700 hover:ring hover:ring-green-600 hover:ring-offset-2 hover:ring-offset-violet-600 px-4 py-1 font-bold mt-2">
                {isLoading ? (
                  <p className="w-full flex items-center justify-center gap-2">
                    <span>
                      <Spinner className="w-5 h-5 animate-spin fill-white stroke-yellow-500 stroke-2" />{" "}
                    </span>
                    <span>Signing up...</span>
                  </p>
                ) : (
                  <p className="w-full flex items-center justify-center gap-2">
                    <span>Signup</span>
                  </p>
                )}
              </button>
            </div>
            {error && (
              <div className="mx-auto border rounded-md px-4 py-2 bg-red-400">
                <p className="flex items-center gap-x-2">
                  <ExclamationTriangleIcon className="text-red-600 w-5 h-5" />{" "}
                  {error}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>

      <Toast open={toast}>
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
      </Toast>
    </section>
  );
};

export { SignupForm };
