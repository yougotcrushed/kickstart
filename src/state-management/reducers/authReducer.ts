interface Action {
  type: "Login" | "Logout";
}

interface LoginAction {
  type: "Login";
  username: string;
}

interface LogoutAction {
  type: "Logout";
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (user: string, action: AuthAction): string => {
  if (action.type === "Login") return action.username;
  if (action.type === "Logout") return "";
  return user;
};

export default authReducer;
