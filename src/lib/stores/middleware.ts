// Zustand middleware
import { StateStorage, createJSONStorage } from 'zustand/middleware';

// Storage middleware for persisting state
export const storageMiddleware = <T extends object>(
  config: (set: any, get: any, api: any) => T,
  storage: StateStorage = localStorage
): any => {
  return (set: any, get: any, api: any) => {
    const persistConfig = {
      name: 'app-storage', // unique name for the storage
      storage: createJSONStorage(() => storage),
    };

    const persistedState = persistConfig.storage?.getItem(persistConfig.name);
    
    const store = config(
      (args: any) => {
        set(args);
        persistConfig.storage?.setItem(persistConfig.name, get());
      },
      get,
      api
    );

    if (persistedState) {
      set(persistedState);
    }

    return store;
  };
};