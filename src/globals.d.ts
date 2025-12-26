declare global {
  type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
  };

  type ParticlesState = {
    left: string;
    top: string;
    animation: string;
    animationDelay: string;
  };
}

export {};
