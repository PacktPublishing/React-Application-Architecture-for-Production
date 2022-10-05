import { Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/button';
import { InputField } from '@/components/form';

import { LoginData } from '../../types';

export type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({
  onSuccess,
}: LoginFormProps) => {
  const { register, handleSubmit, formState } =
    useForm<LoginData>();

  const onSubmit = (data: LoginData) => {
    console.log(data);
  };

  return (
    <Stack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      spacing="5"
      w="full"
    >
      <InputField
        label="Email"
        type="email"
        {...register('email', { required: 'Required' })}
        error={formState.errors['email']}
      />
      <InputField
        label="Password"
        type="password"
        {...register('password', {
          required: 'Required',
        })}
        error={formState.errors['password']}
      />
      <Button type="submit">Log in</Button>
    </Stack>
  );
};
