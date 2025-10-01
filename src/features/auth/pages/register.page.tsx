import { Link } from 'react-router-dom'

import { ROUTES } from '@/shared/config'

import { AuthLayout, RegisterForm } from '../ui'

function RegisterPage() {
	return (
		<AuthLayout
			title='Регистрация'
			description={
				<>
					<Link to={ROUTES.LOGIN} className='text-lg text-[#41A1E6]'>
						или войти в аккаунт
					</Link>
				</>
			}
			form={<RegisterForm />}
		/>
	)
}

export const Component = RegisterPage
