import { z } from "zod";

import { NewUserSchema, UserCredentialsSchema } from "@entities/user";

export const BodySchema = z.object({
  user: NewUserSchema
})
