import { ROUTES } from "@/shared/constans/routes";
import { UiButton } from "@/shared/ui/ui-button";
import { UiLink } from "@/shared/ui/ui-link";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useSignUpForm } from "../model/use-sign-up-form";

export function SignUpForm() {
  const { handleSubmit, isLoading, register, errorMessage } = useSignUpForm();

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
        Sign Up
      </UiButton>

      {errorMessage && <div className="text-rose-500 text-xs">{errorMessage}</div>}

      <UiLink className="text-center" href={ROUTES.SIGN_IN}>
        Sign In
      </UiLink>
    </form>
  );
}
