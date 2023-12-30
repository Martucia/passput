import clsx from "clsx";
import { UiLogo } from "./ui-logo";
import { ReactNode } from "react";
import Link from "next/link";

export function UiHeader({
  className,
  right,
}: {
  className?: string;
  right?: ReactNode;
}) {
  return (
    <header
      className={clsx(
        "px-12 py-5 border-b border-b-slate-300 flex justify-between items-center bg-teal-600 text-white",
        className,
      )}
    >
      <Link href="/">
        <UiLogo />
      </Link>

      {right}
    </header>
  );
}
