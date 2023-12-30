import { AddPasswordItemForm } from "@/features/password-list";
import { UiModalPageLayout } from "@/shared/ui/layouts/ui-modal-layout";
import { UiButton } from "@/shared/ui/ui-button";
import { useState } from "react";

export function PasswordListHeader() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      {isModalOpen && (
        <UiModalPageLayout
          title="Add new password"
          close={() => setModalOpen(false)}
          inner={<AddPasswordItemForm />}
        />
      )}
      <div className="mb-7 pb-6 flex justify-between items-center border-b border-b-slate-300">
        <h1 className="text-2xl">Password List</h1>

        <UiButton onClick={() => setModalOpen(true)} variant="primary">
          Add new
        </UiButton>
      </div>
    </>
  );
}
