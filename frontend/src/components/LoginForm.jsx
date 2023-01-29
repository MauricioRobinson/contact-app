import React, { useState } from "react";
import { useRouter } from "next/router";
import { Toast } from "@components/Toast";
import { ToastMessage } from "@components/ToastMessage";
import { CloseToast } from "@components/CloseToast";
import { Spinner } from "@components/Spinner";
import { useLogin } from "@hooks/useLogin";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const LoginForm = () => {
  const router = useRouter();
  const [send, setSend] = useState(false); //Controlls sending state
  const [sendError, setSendError] = useState(false); //Controlls the behavior of the toast message
  const [toast, setToast] = useState(false); //Controlls the open and close of the toast
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { login, error, isLoading } = useLogin();

  const handleChange = (e) => {
    setLoginData((prevState) => {
      const { name, type, value, checked } = e.target;

      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(loginData);
    // await fetchData();
  };

  const fetchData = async () => {
    const data = await JSON.stringify(loginData);

    const reqOpt = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/auth/login`,
      reqOpt
    );

    const result = await response.json();

    console.log("Response", response);
    console.log("Result", result);

    if (!response.ok) {
      setSendError((prevState) => (prevState = true));
      setSend((prevState) => (prevState = false));
      return;
    } else {
      setSend((prevState) => (prevState = false));
      setSendError((prevState) => (prevState = false));

      setTimeout(() => {
        router.push("/contacts");
      }, 2000);

      return result;
    }
  };

  return (
    <section className="px-4">
      <div className="w-full h-screen flex items-center justify-center">
        <div className="bg-gradient-to-tl from-orange-600 to-violet-600 max-w-md p-6 rounded-lg shadow-md shadow-white/10">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4">
            <div className="">
              <label
                htmlFor="email"
                className="sr-only">
                Email
              </label>
              <input
                type="email"
                className="pl-2 rounded-lg"
                id="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={loginData.email}
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
                className="pl-2 rounded-lg"
                id="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={loginData.password}
              />
            </div>
            <div className="mx-auto">
              <button
                type="submit"
                disabled={isLoading}
                className="rounded-md text-white bg-green-600 transition duration-500 ease-in-out hover:bg-green-700 hover:ring hover:ring-green-600 hover:ring-offset-2 hover:ring-offset-violet-600 px-4 py-1 font-bold mt-2">
                {isLoading ? (
                  <p className="w-full flex items-center justify-center gap-2">
                    <span>
                      <Spinner className="w-5 h-5 animate-spin fill-white stroke-yellow-500 stroke-2" />{" "}
                    </span>
                    <span>Login...</span>
                  </p>
                ) : (
                  <p className="w-full flex items-center justify-center gap-2">
                    <span>Login</span>
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
            message="Error while loggin"
          />
        ) : (
          <ToastMessage
            success
            message="Logged in successfully!"
          />
        )}
      </Toast>
    </section>
  );
};

export { LoginForm };
