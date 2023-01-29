import { useState } from "react";
import useAuth from "@hooks/useAuth";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuth();

  const login = async (data) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.message);
    }
    if (response.ok) {
      //Saving info inside localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: json.token,
          email: json.email,
        })
      );

      //Updating the context
      dispatch({
        type: "LOGIN",
        payload: {
          token: json.token,
          email: json.email,
        },
      });
      setIsLoading(false);
    }
  };

  return {
    login,
    error,
    isLoading,
  };
};
