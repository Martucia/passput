import { useSessionQuery } from "@/entities/session/queries";
import { SignOutButton } from "@/features/auth";

export function Profile() {
  const { data } = useSessionQuery();

  return (
    <div className="flex gap-4 items-center">
      {data?.email}
      <SignOutButton />
    </div>
  );
}
