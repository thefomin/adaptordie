import { z } from 'zod'

export const RegisterSchema = z.object({
	email: z.string().email({
		message: 'Некорректная почта'
	}),
	password: z.string().min(6, {
		message: 'Пароль минимум 6 символов'
	}),

	agreement: z.boolean().refine(val => val === true, {
		message: 'Нужно согласиться с условиями'
	})
})

export type TypeRegisterSchema = z.infer<typeof RegisterSchema>
