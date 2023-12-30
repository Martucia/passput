import clsx from "clsx";
import { ReactNode } from "react";

export function UiModalPageLayout({
  title,
  inner,
  className,
  close
}: {
  title: string;
  inner?: ReactNode;
  className?: string;
  close: () => void
}) {
  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 bg-slate-500 bg-opacity-70 flex justify-center p-8 z-10 scroll-auto items-center">
      <div className={clsx("bg-white rounded-lg px-8 py-12 max-w-[700px] w-full h-max", className)}>
        <div className="flex items-center justify-between pb-10">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button onClick={close}>
            <Close />
          </button>
        </div>

        {inner}
      </div>
    </div>
  );
}

function Close() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m8.382 17.025l-1.407-1.4L10.593 12L6.975 8.4L8.382 7L12 10.615L15.593 7L17 8.4L13.382 12L17 15.625l-1.407 1.4L12 13.41z"
      />
    </svg>
  );
}
