import { z } from "zod";

import { UserCredentialsSchema } from "../../../entities/user";

export const BodySchema = z.object({
  credentials: UserCredentialsSchema
}).required()

export const ResponseSchema = z.object({
  token: z.string()
}).required()
