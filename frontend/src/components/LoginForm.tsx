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
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";

type Login = {
  email: string | undefined;
  password: string | undefined;
};

const LoginForm = (): JSX.Element => {
  // const router = useRouter();
  // const [send, setSend] = useState(false); //Controlls sending state
  // const [sendError, setSendError] = useState(false); //Controlls the behavior of the toast message
  // const [toast, setToast] = useState(false); //Controlls the open and close of the toast
  const [loginData, setLoginData] = useState<Login>({
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
        <div className="w-full max-w-xs sm:max-w-lg lg:max-w-3xl bg-gradient-to-tl from-gray-800 to-gray-700 p-6 rounded-lg shadow-md shadow-white/10">
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
            <section className="lg:pl-16">
              <section className="flex flex-col items-center justify-center">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4">
                  <FormControl isRequired>
                    <FormLabel mb={"0"}>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      pl={"2"}
                      value={loginData.email}
                      onChange={handleChange}
                      variant={"flushed"}
                      focusBorderColor={"lime"}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel mb={"0"}>Password</FormLabel>
                    <Input
                      type="password"
                      name="password"
                      pl={"2"}
                      value={loginData.password}
                      onChange={handleChange}
                      variant={"flushed"}
                      focusBorderColor={"lime"}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    size={"lg"}
                    variant={"outline"}
                    colorScheme={"whatsapp"}>
                    Login
                  </Button>
                </form>

                <article className="mt-10">
                  <small>
                    You do not have an account?{" "}
                    <Link
                      className="text-green-500 font-semibold transition duration-300 ease-out hover:text-green-600"
                      href={"/signup"}>
                      Create account
                    </Link>{" "}
                  </small>
                </article>
              </section>
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
