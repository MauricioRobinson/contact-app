import { useContext } from "react";
import { AuthContext } from "@context/AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuth must be use inside an AuthProvider");
  }
  return context;
};

export default useAuth;
