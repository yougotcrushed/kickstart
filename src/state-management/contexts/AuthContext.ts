import react, { Dispatch } from "react";
import { AuthAction } from "../reducers/authReducer";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = react.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
