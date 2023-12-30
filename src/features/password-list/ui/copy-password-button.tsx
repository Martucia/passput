import { showModal } from "@/shared/lib/use-modal";
import { UiAlert } from "@/shared/ui/ui-alert";
import { useState } from "react";

export function CopyPasswordButton({ password }: { password: string }) {
  const [isAlertShowing, setAlertShowing] = useState<boolean>(false);

  const handleCopyPassword = () => {
    showModal((val) => setAlertShowing(val));
    navigator.clipboard.writeText(password);
  };

  return (
    <>
      <button onClick={handleCopyPassword} className="w-5 h-5 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7 18V2h13v16zm2-2h9V4H9zm-6 6V6h2v14h11v2zm6-6V4z"
          />
        </svg>
      </button>
      {isAlertShowing && <UiAlert text="Password was copied" />}
    </>
  );
}
