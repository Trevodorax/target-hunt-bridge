import { z } from "zod";

import { NewUserSchema } from "../../../entities/user";

export const BodySchema = z.object({
  user: NewUserSchema
})

export const ResponseSchema = z.object({
  token: z.string()
})
