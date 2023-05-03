"use client";

import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useLogin } from "@/hooks/useLogin";
import Image from "next/image";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import Link from "next/link";

type Login = {
  email: string;
  password: string;
};

const LoginForm = (): JSX.Element => {
  const [loginData, setLoginData] = useState<Login>({
    email: "",
    password: "",
  });

  const { error, login, isLoading } = useLogin();

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
    await login(loginData);
  };

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
              <section className="flex flex-col items-center justify-center gap-y-4">
                {error ? (
                  <article className="bg-red-700 text-center p-4 rounded-lg">
                    <p>{error.response.data.message}</p>
                  </article>
                ) : null}
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
                    isLoading={isLoading ? true : false}
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
    </section>
  );
};

export { LoginForm };
