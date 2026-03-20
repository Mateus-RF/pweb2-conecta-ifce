import { z } from 'zod'

export const registerSchema = z.object({
  firstName: z.string().trim().min(2, 'O nome de ter pelo menos 2 caracteres'),
  lastName: z.string().trim().min(2, 'Sobrenome muito curto'),
  handle: z
    .string()
    .trim()
    .min(3, 'O nome de usuario deve ter pelo menos 3 caracteres')
    .regex(
      /^[a-zA-Z0-9]+$/,
      'O nome do usuario só pode conter letras, numeros e undercores',
    ),
  email: z
    .string()
    .email('E-mail inválido')
    .endsWith('@ifce.edu.br', 'Use email institucional'),
  role: z.enum(['student', 'professor', 'technician']),
  campus: z.string().nonempty(),
  course: z
    .string()
    .trim()
    .min(3, 'O nome de curso deve ter pelo menos 3 caracteres')
    .optional(),
  password: z
    .string()
    .min(8, 'Minimo de 8 caracteres')
    .regex(/[A-Za-z]/, 'Precisa ter letras')
    .regex(/[0-9]/, 'Precisa ter números'),
})

export type RegisterFormData = z.infer<typeof registerSchema>
