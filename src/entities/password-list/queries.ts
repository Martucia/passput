import {
  passwordItemControllerCreate,
  passwordItemControllerRemovePasswordItem,
  passwordListControllerGetPasswordList,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const passwordListKey = ["password-list"] as unknown[];

export function usePasswordListQuery({ q }: { q: string }) {
  return useQuery({
    queryKey: passwordListKey,
    queryFn: () => passwordListControllerGetPasswordList({ q }),
  });
}

export function useAddPasswordItemMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: passwordItemControllerCreate,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: passwordListKey });
    },
  });
}

export function useRemovePasswordItemMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: passwordItemControllerRemovePasswordItem,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: passwordListKey });
    },
  });
}
