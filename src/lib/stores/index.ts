// Store utilities and middleware
import { StoreApi, UseBoundStore } from 'zustand';

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

export const createSelectors = <S extends UseBoundStore<StoreApi<any>>>(
  store: S
) => {
  const selectors = {} as { [key: string]: () => any };
  const storeState = store.getState();

  for (const key in storeState) {
    selectors[key] = () => store((state: any) => state[key]);
  }

  return {
    ...store,
    use: selectors,
  } as WithSelectors<S>;
};