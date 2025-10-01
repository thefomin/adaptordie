import { useNavigate } from 'react-router-dom'

import { publicRqClient } from '@/shared/api'
import { ApiSchemas } from '@/shared/api/schema'
import { ROUTES, useSession } from '@/shared/config'

export function useRegister() {
	const navigate = useNavigate()

	const session = useSession()
	const registerMutation = publicRqClient.useMutation(
		'post',
		'/auth/register',
		{
			onSuccess(data) {
				session.login(data.accessToken)
				navigate(ROUTES.HOME)
			}
		}
	)

	const register = (data: ApiSchemas['RegisterRequest']) => {
		registerMutation.mutate({ body: data })
	}

	const errorMessage = registerMutation.isError
		? registerMutation.error.message
		: undefined

	return {
		register,
		isPending: registerMutation.isPending,
		errorMessage
	}
}
