import { z } from "zod";
import { UserEmailSchema, UserPasswordSchema, UserPseudoSchema } from "../../../entities/user";

export const BodySchema = z.object({
  pseudo: UserPseudoSchema.optional(),
  email: UserEmailSchema.optional(),
  password: UserPasswordSchema.optional()
})

export const ResponseSchema = z.object({
  pseudo: UserPseudoSchema,
  email: UserEmailSchema
})
