import { useNavigate } from 'react-router-dom'

import { publicRqClient } from '@/shared/api/'
import { ApiSchemas } from '@/shared/api/schema'
import { ROUTES, useSession } from '@/shared/config'

export function useLogin() {
	const navigate = useNavigate()

	const session = useSession()
	const loginMutation = publicRqClient.useMutation('post', '/auth/login', {
		onSuccess(data) {
			session.login(data.accessToken)
			navigate(ROUTES.HOME)
		}
	})

	const login = (data: ApiSchemas['LoginRequest']) => {
		loginMutation.mutate({ body: data })
	}

	const errorMessage = loginMutation.isError
		? loginMutation.error.message
		: undefined

	return {
		login,
		isPending: loginMutation.isPending,
		errorMessage
	}
}
