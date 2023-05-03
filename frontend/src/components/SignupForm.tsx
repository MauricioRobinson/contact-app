"use client";

import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import axios from "axios";
// import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import Link from "next/link";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useSignup } from "@/hooks/useSignup";

type User = {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  password: string | undefined;
};

const SignupForm = (): JSX.Element => {
  const [signupData, setSignupData] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const { error, isLoading, signup } = useSignup();

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
    await signup(signupData);
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
            <section className="flex flex-col items-center justify-center pl-10 gap-y-4">
              {error ? (
                <article className="bg-red-700 text-center p-4 rounded-lg">
                  <p>{error.response.data.message}</p>
                </article>
              ) : null}
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
                    isLoading={isLoading ? true : false}
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
                  You already have an account?{" "}
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
