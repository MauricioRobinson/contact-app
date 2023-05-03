"use client";

import { useAuth } from "@/hooks/useAuth";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();
  const { dispatch } = useAuth();

  const logout = () => {
    localStorage.removeItem("user");
    deleteCookie("token");
    dispatch({
      type: "LOGOUT",
      payload: {
        token: undefined,
        email: undefined,
      },
    });

    router.push("/login");
  };

  return { logout };
};
