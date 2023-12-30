import { UiTextField } from "@/shared/ui/ui-text-field";
import { usePasswordItemForm } from "../model/use-password-item-form";
import { UiButton } from "@/shared/ui/ui-button";

export function AddPasswordItemForm() {
  const { handleSubmit, register, isLoading } = usePasswordItemForm();

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <UiTextField
        label="Web-site"
        inputProps={{ ...register("site", { required: true }) }}
      />
      <UiTextField
        label="Login"
        inputProps={{ ...register("login", { required: true }) }}
      />

      <UiTextField
        label="Password"
        inputProps={{
          type: "password",
          ...register("password", { required: true }),
        }}
      />
      <UiButton disabled={isLoading} variant="primary">
        Add password
      </UiButton>
    </form>
  );
}
