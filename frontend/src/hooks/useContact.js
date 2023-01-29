import { ContactContext } from "@context/ContactContext";
import { useContext } from "react";

export const useContact = () => {
  const context = useContext(ContactContext);

  if (!context) {
    throw Error("useContactContext must be used inside an ContactProvider");
  }

  return context;
};
