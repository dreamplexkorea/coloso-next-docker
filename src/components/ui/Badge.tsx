import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "default";
  className?: string;
}

/** 배지 컴포넌트 — easy to modify */
export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-[4px] px-[6px] py-[2px] text-[1.1rem] font-semibold leading-tight",
        {
          "bg-primary text-white": variant === "primary",
          "bg-accent text-white": variant === "accent",
          "bg-grey-700 text-grey-300": variant === "default",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
