import { clsx } from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "main";
}

/** max-width wrapper — easy to modify */
export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={clsx("mx-auto w-full max-w-[1120px] px-[20px] sm:px-[24px] lg:px-[32px]", className)}>
      {children}
    </Tag>
  );
}
