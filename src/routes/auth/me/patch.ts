import { UserEmailSchema, UserPasswordSchema, UserPseudoSchema } from "src/entities/user";
import { z } from "zod";

export const BodySchema = z.object({
  pseudo: UserPseudoSchema,
  email: UserEmailSchema,
  password: UserPasswordSchema
})

export const ResponseSchema = z.object({
  pseudo: UserPseudoSchema,
  email: UserEmailSchema
})
