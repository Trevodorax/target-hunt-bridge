import { z } from "zod";

import { UserCredentialsSchema } from "@entities/user";

export const BodySchema = z.object({
  credentials: UserCredentialsSchema
})
