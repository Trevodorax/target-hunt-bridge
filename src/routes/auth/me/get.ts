import { z } from "zod";

export const ResponseSchema = z.object({
  id: z.string(),
  pseudo: z.string(),
  email: z.string()
}).required()
