export type userSessionT = {
  token: string;
  username: string;
};

export type useAuthT = {
  userToken: string;
  username: string;
  login: (username: string, password: string) => boolean;
  validateLogin: () => boolean;
};
