import { Entity } from '@/types';

export type AuthUser = Entity & {
  email: string;
  organizationId: string;
};

export type LoginData = {
  email: string;
  password: string;
};
