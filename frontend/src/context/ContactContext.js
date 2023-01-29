import { createContext, React, useReducer } from "react";

export const ContactContext = createContext();

const initialState = {
  contacts: null,
};

export const contactReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CONTACTS":
      return {
        contacts: payload,
      };
    case "CRETAE_CONTACT":
      return {
        contacts: [payload, ...state.contacts],
      };
    default:
      return state;
  }
};

export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};