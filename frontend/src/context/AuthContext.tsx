"use client";

import { useReducer, createContext, useEffect, Dispatch } from "react";

export interface Payload {
  token?: string | undefined;
  email: string | undefined;
}

type AuthContextType = {
  user: Payload | null;
  dispatch: Dispatch<{ type: string; payload: Payload }>;
};

export interface User {
  user: Payload | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const initialState: User = {
  user: null,
};

export const authReducer = (
  state: User,
  action: { type: string; payload: Payload }
) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return {
        user: payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    const user = localStorage.getItem("user") || null;

    if (user) {
      const data = JSON.parse(user);
      dispatch({ type: "LOGIN", payload: data });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
