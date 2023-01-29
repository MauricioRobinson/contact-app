import { useState } from "react";
import useAuth from "@hooks/useAuth";
import axios from "axios";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuth();

  const signup = async (data) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/users/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const json = await response.json();

    // const response = await axios.post(
    //   `${process.env.NEXT_PUBLIC_API}/users/signup`,
    //   data
    // );

    console.log(response);
    console.log(json);

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
          email: json.user.email,
        })
      );

      //Updating the context
      dispatch({
        type: "LOGIN",
        payload: {
          token: json.token,
          email: json.user.email,
        },
      });
      setIsLoading(false);
    }
  };

  return {
    signup,
    error,
    isLoading,
  };
};
