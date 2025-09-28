import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(5, 'Field is Required'),
  email: z.email('Invalid email address'),
  message: z.string().min(10, 'This field is required'),
});

export type createContactInput = z.infer<typeof contactFormSchema>;

export const createContact = ({
  data,
}: {
  data: createContactInput;
}): Promise<createContactInput> => {
  return api.post('/contact-form', data);
};

export type UseCreateContactOptions = {
  mutationConfig?: MutationConfig<typeof createContact>;
};

export const useCreateContact = ({
  mutationConfig,
}: UseCreateContactOptions = {}) => {
  const queryClient = useQueryClient();
  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: ['contact'],
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: createContact,
  });
};
