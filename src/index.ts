import { z } from 'zod'

import {
  NewUserSchema,
  UserCredentialsSchema, 
  UserEmailSchema, 
  UserPasswordSchema
} from './entities/user'

import { 
  BodySchema as AuthLoginPostBodySchema,
  ResponseSchema as AuthLoginPostResponseSchema
} from './routes/auth/login/post'

import { 
  BodySchema as AuthRegisterPostBodySchema,
  ResponseSchema as AuthRegisterPostResponseSchema
} from './routes/auth/register/post'

type NewUser = z.infer<typeof NewUserSchema>;
type UserCredentials = z.infer<typeof UserCredentialsSchema>;
type UserEmail = z.infer<typeof UserEmailSchema>;
type UserPassword = z.infer<typeof UserPasswordSchema>;
type AuthLoginPostBody = z.infer<typeof AuthLoginPostBodySchema>;
type AuthLoginPostResponse = z.infer<typeof AuthLoginPostResponseSchema>;
type AuthRegisterPostBody = z.infer<typeof AuthRegisterPostBodySchema>;
type AuthRegisterPostResponse = z.infer<typeof AuthRegisterPostResponseSchema>;


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
  AuthLoginPostResponseSchema,
  AuthLoginPostResponse,

  AuthRegisterPostBodySchema,
  AuthRegisterPostBody,
  AuthRegisterPostResponseSchema,
  AuthRegisterPostResponse,
}