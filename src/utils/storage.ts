const tokenKey = 'authData';

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    authenticationType: string;
    scope: string;
    managerId?: number;
    managerName?: string;
    userId?: number;
    userName?: string;
};

export const saveAuthData = (obj: LoginResponse) => {
  localStorage.setItem(tokenKey, JSON.stringify(obj));
};

export const getAuthData = () => {
  const str = localStorage.getItem(tokenKey) ?? '{}';
  return JSON.parse(str) as LoginResponse;
};

export const removeAuthData = () => {
  localStorage.removeItem(tokenKey);
};