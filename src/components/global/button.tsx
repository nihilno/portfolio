import { cn } from "@/lib/utils";

function Button({
  children,
  className,
  disabled = false,
  size = "sm",
}: ButtonProps) {
  const baseClasses =
    "focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/25 relative shrink-0 cursor-pointer overflow-hidden rounded-full font-medium shadow-lg transition-colors focus:outline-none focus-visible:ring-2";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size]}`;

  return (
    <button disabled={disabled} className={cn(classes, className)}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}

export default Button;
