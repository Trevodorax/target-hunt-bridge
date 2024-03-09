"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCredentialsSchema = exports.NewUserSchema = exports.UserEmailSchema = exports.UserPasswordSchema = void 0;
var zod_1 = require("zod");
exports.UserPasswordSchema = zod_1.z.string().min(8);
exports.UserEmailSchema = zod_1.z.string().email().min(5);
exports.NewUserSchema = zod_1.z.object({
    pseudo: zod_1.z.string().min(1),
    email: exports.UserEmailSchema,
    password: exports.UserPasswordSchema
}).required();
exports.UserCredentialsSchema = zod_1.z.object({
    email: exports.UserEmailSchema,
    password: exports.UserPasswordSchema
}).required();
