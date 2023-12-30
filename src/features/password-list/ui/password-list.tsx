import { PasswordListDto } from "@/shared/api/generated";
import { PasswordBlock } from "..";
import { PasswordListHeader } from "@/widgets/password-list-header";

export function PasswordList({ list }: { list: PasswordListDto }) {
  return (
    <main className="py-12 px-16 flex flex-col gap-8">
      <PasswordListHeader />

      {list?.items.length === 0 ? (
        <div className="flex items-center justify-center pt-12 font-medium text-2xl text-slate-400">
          No password yet
        </div>
      ) : (
        list?.items.map((item) => <PasswordBlock passwordItem={item} />)
      )}
    </main>
  );
}
