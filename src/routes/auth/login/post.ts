import { z } from "zod";

import { UserCredentialsSchema } from "$/src/entities/user";

export const BodySchema = z.object({
  credentials: UserCredentialsSchema
})
