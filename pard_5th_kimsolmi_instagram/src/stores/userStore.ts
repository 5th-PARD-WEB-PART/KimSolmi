import { create } from 'zustand';

interface UserState {
  phoneOrEmail: string;
  fullName: string;
  userName: string;
  password: string;
  setUserInfo: (data: {
    phoneOrEmail: string;
    fullName: string;
    userName: string;
    password: string;
  }) => void;
}

export const useUserStore = create<UserState>((set) => ({
  phoneOrEmail: '',
  fullName: '',
  userName: '',
  password: '',
  setUserInfo: ({ phoneOrEmail, fullName, userName, password }) =>
    set({ phoneOrEmail, fullName, userName, password }),
}));
