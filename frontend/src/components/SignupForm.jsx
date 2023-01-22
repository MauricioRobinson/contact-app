import { useRouter } from "next/router";
import React, { useState } from "react";
import { Toast } from "@components/Toast";
import { ToastMessage } from "@components/ToastMessage";
import { CloseToast } from "@components/CloseToast";
import { Spinner } from "@components/Spinner";

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
    country: "",
    age: "",
  });

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
    await fetchData();
  };

  const fetchData = async () => {
    try {
      setSend((prevState) => (prevState = true));
      const data = JSON.stringify(signupData);

      const reqOpt = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/users`,
        reqOpt
      );
      const result = await response.json();

      setToast((prevState) => (prevState = true));

      if (!response.ok) {
        setSendError((prevState) => (prevState = true));
        setSend((prevState) => (prevState = false));
        return;
      } else {
        setSend((prevState) => (prevState = false));
        setSendError((prevState) => (prevState = false));

        setTimeout(() => {
          router.push("/login");
        }, 2000);

        return result;
      }
    } catch (error) {
      console.log("Error", error);
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
            <div className="">
              <label
                htmlFor="country"
                className="sr-only">
                Country
              </label>
              <input
                type="text"
                className="pl-2 rounded-lg w-full"
                id="country"
                name="country"
                placeholder="Country"
                onChange={handleChange}
                value={signupData.country}
              />
            </div>
            <div className="">
              <label
                htmlFor="age"
                className="sr-only">
                Age
              </label>
              <input
                type="number"
                className="pl-2 rounded-lg w-full"
                id="age"
                name="age"
                placeholder="Age"
                onChange={handleChange}
                value={signupData.age}
              />
            </div>
            <div className="mx-auto md:col-span-2 md:mr-0 lg:col-span-4">
              <button
                type="submit"
                className="rounded-md text-white bg-green-600 transition duration-500 ease-in-out hover:bg-green-700 hover:ring hover:ring-green-600 hover:ring-offset-2 hover:ring-offset-violet-600 px-4 py-1 font-bold mt-2">
                {send ? (
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
