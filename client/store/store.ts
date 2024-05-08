import { create } from "zustand";

interface UserState {
  user: string | null;
  setUser: (user: string) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  user: "client",
  setUser: (user) => set({ user }),
}));
