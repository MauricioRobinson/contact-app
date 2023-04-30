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
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";

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

      // console.log(response);

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
        <div className="w-full max-w-xs sm:max-w-lg lg:max-w-3xl bg-gradient-to-tl from-gray-800 to-gray-700 p-6 rounded-lg shadow-md shadow-white/10">
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
            <section className="flex flex-col items-center justify-center pl-10">
              <form
                onSubmit={handleSubmit}
                className="">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <FormControl isRequired>
                    <FormLabel mb={"0"}>First name</FormLabel>
                    <Input
                      name="firstName"
                      pl={"2"}
                      value={signupData.firstName}
                      onChange={handleChange}
                      variant={"flushed"}
                      focusBorderColor={"lime"}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel mb={"0"}>Last name</FormLabel>
                    <Input
                      name="lastName"
                      pl={"2"}
                      value={signupData.lastName}
                      onChange={handleChange}
                      variant={"flushed"}
                      focusBorderColor={"lime"}
                    />
                  </FormControl>
                  <FormControl
                    className="lg:col-span-2"
                    isRequired>
                    <FormLabel mb={"0"}>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      pl={"2"}
                      value={signupData.email}
                      onChange={handleChange}
                      variant={"flushed"}
                      focusBorderColor={"lime"}
                    />
                  </FormControl>
                  <FormControl
                    className="lg:col-span-2"
                    isRequired>
                    <FormLabel mb={"0"}>Password</FormLabel>
                    <Input
                      type="password"
                      name="password"
                      pl={"2"}
                      value={signupData.password}
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
                    Signup
                  </Button>
                </article>
              </form>

              <article className="mt-10">
                <small>
                  You alredy have an account?{" "}
                  <Link
                    className="text-green-500 font-semibold transition duration-300 ease-out hover:text-green-600"
                    href={"/login"}>
                    Login
                  </Link>{" "}
                </small>
              </article>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
};

export { SignupForm };
