"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { setCookie } from "cookies-next";
import axios from "axios";
import { useRouter } from "next/navigation";

type User = {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  password: string | undefined;
};

interface Error {
  response: {
    data: {
      message: string;
    };
  };
}

export const useSignup = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const { dispatch } = useAuth();
  const router = useRouter();

  const signup = async (data: User) => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/users/signup`,
        data
      );

      if (response.status === 201) {
        //Saving info within localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            token: response.data.token,
            email: response.data.email,
          })
        );

        setCookie("token", response.data.token, {
          maxAge: 60 * 60,
        });

        //Updating the context
        dispatch({
          type: "LOGIN",
          payload: {
            token: response.data.token,
            email: response.data.email,
          },
        });

        setIsLoading(false);
        router.replace("/contacts");
      }
    } catch (error: any) {
      setIsLoading(false);
      setError(error);
    }
  };

  return {
    signup,
    error,
    isLoading,
  };
};
