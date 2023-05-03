"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { setCookie } from "cookies-next";
import axios from "axios";
import { useRouter } from "next/navigation";

interface User {
  email: string;
  password: string;
}

interface Error {
  response: {
    data: {
      message: string;
    };
  };
}

export const useLogin = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const { dispatch } = useAuth();
  const router = useRouter();

  const login = async (data: User) => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/users/login`,
        data
      );

      if (response.status === 201) {
        //Saving info inside localStorage
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
      setError(error);
      setIsLoading(false);
    }
  };

  return {
    login,
    error,
    isLoading,
  };
};
