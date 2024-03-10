import { z } from 'zod'

import {
  BodySchema as AuthLoginPostBodySchema,
  ResponseSchema as AuthLoginPostResponseSchema
} from './routes/auth/login/post'

import { 
  BodySchema as AuthRegisterPostBodySchema,
  ResponseSchema as AuthRegisterPostResponseSchema
} from './routes/auth/register/post'

import { ResponseSchema as AuthMeGetResponseSchema } from './routes/auth/me/get'

import { 
  BodySchema as AuthMePatchBodySchema, 
  ResponseSchema as AuthMePatchResponseSchema 
} from './routes/auth/me/patch'

type AuthLoginPostBody = z.infer<typeof AuthLoginPostBodySchema>;
type AuthLoginPostResponse = z.infer<typeof AuthLoginPostResponseSchema>;
type AuthRegisterPostBody = z.infer<typeof AuthRegisterPostBodySchema>;
type AuthRegisterPostResponse = z.infer<typeof AuthRegisterPostResponseSchema>;
type AuthMeGetResponse = z.infer<typeof AuthMeGetResponseSchema>
type AuthMePatchBody = z.infer<typeof AuthMePatchBodySchema>
type AuthMePatchResponse = z.infer<typeof AuthMePatchResponseSchema>


export {
  /* === AUTH === */
  AuthLoginPostBodySchema,
  AuthLoginPostBody,
  AuthLoginPostResponseSchema,
  AuthLoginPostResponse,

  AuthRegisterPostBodySchema,
  AuthRegisterPostBody,
  AuthRegisterPostResponseSchema,
  AuthRegisterPostResponse,

  AuthMeGetResponseSchema,
  AuthMeGetResponse,

  AuthMePatchBodySchema,
  AuthMePatchBody,
  AuthMePatchResponseSchema,
  AuthMePatchResponse
}