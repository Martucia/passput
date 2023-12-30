import { SignUpForm } from "@/features/auth";
import { UiHeader } from "../ui-header";
import { ReactNode } from "react";

export function UiFormPageLayout({
  header,
  form,
  title,
}: {
  header?: ReactNode;
  form?: ReactNode;
  title: string;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      {header}

      <main className="grow flex flex-col pt-24">
        <div className="rounded-xl border border-slate-300 px-14 py-14 max-w-[400px] w-full bg-white self-center">
          <h1 className="text-2xl mb-8">{title}</h1>
          {form}
        </div>
      </main>
    </div>
  );
}
