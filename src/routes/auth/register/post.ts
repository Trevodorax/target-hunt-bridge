import { z } from "zod";

import { NewUserSchema } from "$/src/entities/user";

export const BodySchema = z.object({
  user: NewUserSchema
})
