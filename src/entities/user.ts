import { z } from 'zod'

export const UserPasswordSchema = z.string().min(8)
export const UserEmailSchema = z.string().email().min(5)

export const NewUserSchema = z.object({
  pseudo: z.string().min(1),
  email: UserEmailSchema,
  password: UserPasswordSchema
}).required()

export const UserCredentialsSchema = z.object({
  email: UserEmailSchema,
  password: UserPasswordSchema
}).required()
