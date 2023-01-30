import { useAuth } from "@hooks/useAuth";
import { useContact } from "@hooks/useContact";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";

export const useLogout = () => {
  const router = useRouter();
  const { dispatch } = useAuth();
  const { dispatch: contactsDispatch } = useContact();

  const logout = () => {
    localStorage.removeItem("user");
    deleteCookie("token");
    dispatch({ type: "LOGOUT" });
    contactsDispatch({ type: "SET_CONTACTS", payload: null });

    router.push("/login");
  };

  return { logout };
};
