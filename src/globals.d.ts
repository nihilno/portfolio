declare global {
  type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
  };
}

export {};
