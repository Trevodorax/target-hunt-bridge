import { z } from "zod";
import { UserSchema } from "./user";

export const FriendRequestSchema = z.object({
  id: z.string(),
  sender: UserSchema,
  receiver: UserSchema,
})
