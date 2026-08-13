import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// Define the available locales
const AVAILABLE_LOCALES = ['en', 'ar'] as const;
export type Locale = typeof AVAILABLE_LOCALES[number];

// Define the store state and actions
interface LocaleState {
  locale: Locale;
  isLoading: boolean;
  setLocale: (locale: Locale) => Promise<void>;
  initializeLocale: (serverLocale: Locale) => void;
}

// Create the store with persistence
export const useLocaleStore = create<LocaleState>()(
  persist(
    (set, get) => ({
      locale: 'en', // Default locale
      isLoading: false,
      
      // Initialize locale with server value on first load
      initializeLocale: (serverLocale) => {
        const currentLocale = get().locale;
        if (currentLocale !== serverLocale) {
          set({ locale: serverLocale });
        }
      },
      
      // Set locale with loading state and persistence
      setLocale: async (locale: Locale) => {
        if (!AVAILABLE_LOCALES.includes(locale)) {
          console.warn(`Invalid locale: ${locale}`);
          return;
        }

        set({ isLoading: true });
        
        try {
          set({ locale });
        } catch (error) {
          console.error('Failed to save locale to storage:', error);
          // Fallback to current locale if storage fails
          set({ locale: get().locale });
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: 'locale-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ locale: state.locale }), // Only persist locale
    }
  )
);