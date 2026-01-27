"use client";

import Link from "next/link";
import type { FC, MouseEvent, ReactNode } from "react";

type ScrollToTopLinkProps = Omit<
  React.ComponentProps<typeof Link>,
  "onClick" | "scroll"
> & {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  scroll?: boolean;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

export const ScrollToTopLink: FC<ScrollToTopLinkProps> = ({
  onClick,
  scroll = false,
  ...props
}) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    scrollToTop();
  };

  return <Link {...props} scroll={scroll} onClick={handleClick} />;
};

