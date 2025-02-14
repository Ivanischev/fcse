export interface LoginResponse {
  login: {
    jwt: string;
    user: {
      id: string;
    };
  };
}

export interface LoginVariables {
  input: {
    identifier: string;
    password: string;
    provider: string;
  };
}
