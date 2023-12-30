import { useAddPasswordItemMutation } from "@/entities/password-list/queries";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function usePasswordItemForm() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const { handleSubmit, register, reset } = useForm<{
    login: string;
    password: string;
    site: string;
  }>();

  const addPasswordItemMutation = useAddPasswordItemMutation();

  return {
    handleSubmit: handleSubmit((data) => {
      addPasswordItemMutation.mutate(
        { ...data, data: "lol" },
        {
          onSuccess() {
            reset();
          },
        },
      );
    }),
    isLoading: addPasswordItemMutation.isPending,
    register,
    isModalOpen,
    closeModal: () => setModalOpen(false),
    openModal: () => setModalOpen(true),
  };
}
