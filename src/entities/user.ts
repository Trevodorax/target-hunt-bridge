import { z } from 'zod'

export const UserPasswordSchema = z.string()
export const UserEmailSchema = z.string().email()

export const NewUserSchema = z.object({
  pseudo: z.string(),
  email: UserEmailSchema,
  password: UserPasswordSchema
})

export const UserCredentialsSchema = z.object({
  email: UserEmailSchema,
  password: UserPasswordSchema
})
