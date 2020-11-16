import React, { useState, useCallback, createContext, useContext } from "react";
import { toast } from "react-toastify";

// import { Container } from './styles';

import api from "../services/api";

interface IUser {
  name: string;
  email: string;
  cnpj: string;
}

interface ISignCredentials {
  email: string;
  password: string;
}

interface IAuthState {
  user: IUser;
  token: string;
}

interface IAuthContextData {
  user: IUser;
  signIn(credentials: ISignCredentials): Promise<void>;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<IAuthState>(() => {
    const token = localStorage.getItem("@star-money:token");
    const user = localStorage.getItem("@star-money:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      // api.get("/me").catch(() => {
      //   localStorage.removeItem("@central-calcario:token");
      //   localStorage.removeItem("@central-calcario:user");

      //   toast.info("Sua sessão expirou. Faça login novamente.", {
      //     toastId: "Sua sessão expirou. Faça login novamente.",
      //   });

      //   return setAuthData({} as IAuthState);
      // });

      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }: ISignCredentials) => {
    try {
      const response = await api.post("/sessions", { email, password });

      const { user, token } = response.data;

      const token_formatted = token.token;

      localStorage.setItem("@star-money:user", JSON.stringify(user));
      localStorage.setItem("@star-money:token", token_formatted);

      api.defaults.headers.authorization = `Bearer ${token_formatted}`;

      setAuthData({ token: token_formatted, user });
    } catch (error) {
      toast.error("Não foi possível fazer login");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user: authData.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
