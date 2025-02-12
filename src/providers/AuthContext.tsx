import { createContext } from "react";

type AuthContextType = {
  token: string | null;
  userId: string | null;
  login: (token: string, userId: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  token: null,
  userId: null,
  login: () => {},
  logout: () => {},
});
