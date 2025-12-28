import { create } from 'zustand';

interface AdminAuthState {
  isAdminLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const useAdminAuthStore = create<AdminAuthState>((set) => ({
  isAdminLoggedIn: false,
  login: () => set({ isAdminLoggedIn: true }),
  logout: () => set({ isAdminLoggedIn: false }),
}));
