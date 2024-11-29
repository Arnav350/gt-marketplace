import { ReactNode, createContext, useEffect, useState } from "react";

type User = any;

interface IProviderChildren {
  children: ReactNode;
}

interface IAuthContext {
  currentUser: User | null | undefined;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

function AuthProvider({ children }: IProviderChildren) {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>();

  useEffect(() => {
    setCurrentUser(currentUser);
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
