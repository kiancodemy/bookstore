export type LoginType = {
  email: string;
  password: string;
};
export type signInType = {
  name: string;
  lastname: string;
  email: string;
  password: string;
};
export type LoginResponse = {
  message: string;
  data: unknown;
};

export type forgetpassword = {
  email: string;
};

export type resetpassword = {
  token: string|null;
  newPassword: string;
};
