import { usePasswordListQuery } from "@/entities/password-list/queries";
import { PasswordList } from "@/features/password-list/ui/password-list";
import { UiHeader } from "@/shared/ui/ui-header";
import { Profile } from "@/widgets/profile";

export default function HomePage() {
  const { data } = usePasswordListQuery({ q: "" });

  return (
    <div className={`min-h-screen`}>
      <UiHeader right={<Profile />} />

      {data && <PasswordList list={data} />}
    </div>
  );
}
