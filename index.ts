import { z } from 'zod'

import {
  NewUserSchema,
  UserCredentialsSchema, 
  UserEmailSchema, 
  UserPasswordSchema
} from './src/entities/user'

import { 
  BodySchema as AuthLoginPostBodySchema
} from './src/routes/auth/login/post'

import { 
  BodySchema as AuthRegisterPostBodySchema
} from './src/routes/auth/register/post'

type NewUser = z.infer<typeof NewUserSchema>;
type UserCredentials = z.infer<typeof UserCredentialsSchema>;
type UserEmail = z.infer<typeof UserEmailSchema>;
type UserPassword = z.infer<typeof UserPasswordSchema>;
type AuthLoginPostBody = z.infer<typeof AuthLoginPostBodySchema>;
type AuthRegisterPostBody = z.infer<typeof AuthRegisterPostBodySchema>;



export {
  /* ===== TYPES ===== */
  UserEmailSchema,
  UserEmail,

  UserPasswordSchema,
  UserPassword,
  
  /* ===== DTOs ===== */
  NewUserSchema,
  NewUser,

  UserCredentialsSchema,
  UserCredentials,

  /* ===== ROUTES ===== */
  AuthLoginPostBodySchema,
  AuthLoginPostBody,

  AuthRegisterPostBodySchema,
  AuthRegisterPostBody
}