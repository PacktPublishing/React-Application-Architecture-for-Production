import { ReactNode } from 'react';

export type ProtectedProps = {
  children: ReactNode;
};

export const Protected = ({
  children,
}: ProtectedProps) => {
  return <>{children}</>;
};
