import { z } from "zod";

import { NewUserSchema } from "../../../entities/user";

export const BodySchema = z.object({
  user: NewUserSchema
})
