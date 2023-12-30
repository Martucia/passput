import { ROUTES } from "@/shared/constans/routes";
import { UiButton } from "@/shared/ui/ui-button";
import { UiLink } from "@/shared/ui/ui-link";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useSignInForm } from "../model/use-sign-in-form";

export function SignInForm() {
  const { handleSubmit, isLoading, register, errorMessage } = useSignInForm();

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <UiTextField
        label="Email"
        inputProps={{
          type: "email",
          ...register("email", { required: true }),
        }}
      />
      <UiTextField
        label="Password"
        inputProps={{
          type: "password",
          ...register("password", { required: true }),
        }}
      />
      <UiButton disabled={isLoading} className="w-full" variant="primary">
        Sign In
      </UiButton>

      {errorMessage && <div className="text-rose-500 text-xs">{errorMessage}</div>}

      <UiLink className="text-center" href={ROUTES.SIGN_UP}>
        Sign Up
      </UiLink>
    </form>
  );
}
