import { useState } from "react";
import { ShowPasswordButton } from "./show-password-button";
import { CopyPasswordButton } from "./copy-password-button";
import { RemovePasswordItemButton } from "./remove-password-item-button";

export type PasswordBlockProps = {
  passwordItem: any;
};

export function PasswordBlock({ passwordItem }: PasswordBlockProps) {
  const [isPasswordShowed, setPasswordShowed] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-2 w-full justify-between items-center border-b border-b-slate-300 pb-3 gap-16">
      <div className="flex items-center gap-12 justify-between">
        <div>{passwordItem.site}</div>
        <div>{passwordItem.login}</div>
      </div>

      <div className="flex items-center gap-10 justify-end">
        <div>{isPasswordShowed ? passwordItem.password : "***********"}</div>
        <div className="flex items-center gap-4">
          <RemovePasswordItemButton id={passwordItem.id} />
          <CopyPasswordButton password={passwordItem.password} />
          <ShowPasswordButton
            onClick={() => setPasswordShowed(!isPasswordShowed)}
            isPasswordShowed={isPasswordShowed}
          />
        </div>
      </div>
    </div>
  );
}
