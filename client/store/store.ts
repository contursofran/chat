import { Subscription } from "@/types";
import { create } from "zustand";

interface UserState {
  user: string | null;
  setUser: (user: string) => void;
}

interface SubscriptionState {
  subscriptions: Subscription[];
  setSubscriptions: (subscriptions: Subscription[]) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscriptions: [],
  setSubscriptions: (subscriptions) => set({ subscriptions }),
}));
