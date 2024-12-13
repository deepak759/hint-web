import { configureStore } from '@reduxjs/toolkit';
import userReducer, { UserState } from './userSlice';

// Load state from sessionStorage
const loadState = (): { user: UserState } | undefined => {
  if (typeof window === 'undefined') return undefined; // SSR guard
  const serializedState = sessionStorage.getItem('reduxState');
  return serializedState ? JSON.parse(serializedState) : undefined;
};

// Save state to sessionStorage
const saveState = (state: { user: UserState }) => {
  if (typeof window === 'undefined') return; // SSR guard
  const serializedState = JSON.stringify(state);
  sessionStorage.setItem('reduxState', serializedState);
};

// Preload state only on the client
const preloadedState = typeof window !== 'undefined' ? loadState() : undefined;

// Configure the Redux store
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState,
});

// Save the Redux state to sessionStorage on state changes (client-side only)
if (typeof window !== 'undefined') {
  store.subscribe(() => {
    saveState(store.getState());
  });
}

// Type definitions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
