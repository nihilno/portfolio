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

  type SectionTitleProps = {
    children: React.ReactNode;
    label: string;
    title: string;
    titleAccent: string;
    center?: boolean;
  };
}

export {};
