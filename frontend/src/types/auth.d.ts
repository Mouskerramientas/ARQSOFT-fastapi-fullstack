export type userInfoT = {
  username: string;
  is_admin: boolean;
};

export type useAuthT = {
  userToken: string;
  userInfo: userInfoT;
  login: (username: string, password: string) => Promise<boolean>;
  testToken: () => void;
  logOut: () => void;
};
