import { UiButton } from "@/shared/ui/ui-button";
import { useSignOut } from "../model/use-sign-out";

export function SignOutButton() {
  const { signOut, isLoading } = useSignOut();

  return (
    <UiButton
      onClick={() => signOut({})}
      disabled={isLoading}
      variant='secondary'
    >
      Sign Out
    </UiButton>
  );
}
