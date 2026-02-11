import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

export function ButtonLink({ variant = "primary", children, className, ...rest }: Props) {
  return (
    <a
      className={["btn", `btn--${variant}`, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </a>
  );
}


