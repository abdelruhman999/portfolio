"use client";

import { useTheme } from "next-themes";
import { Toaster as SonnerToaster } from "sonner";

type ToasterProps = React.ComponentProps<typeof SonnerToaster>;

const Sonner = ({ theme, ...props }: ToasterProps) => {
  const { theme: mode } = useTheme();

  return (
    <SonnerToaster
      theme={theme ?? (mode as ToasterProps["theme"])}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast +99999 text-center !rounded-full group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Sonner };