import { createContext, useContext, useState } from 'react';

type LayoutContextType = {
  isOpen: boolean;
  toggleOpen: () => void;
  intro: boolean;
  toggleIntro: () => void;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intro, setIntro] = useState(false);

  return (
    <LayoutContext.Provider
      value={{
        isOpen,
        toggleOpen: () => setIsOpen((p) => !p),
        intro,
        toggleIntro: () => setIntro((p) => !p),
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const ctx = useContext(LayoutContext);
  if (!ctx) throw new Error('useLayout must be used inside LayoutProvider');
  return ctx;
}
