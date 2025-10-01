import { Link } from 'react-router-dom'

import { ROUTES } from '@/shared/config'

import { AuthLayout, LoginForm } from '../ui'

function LoginPage() {
	return (
		<AuthLayout
			title='Вход'
			form={<LoginForm />}
			description={
				<>
					<Link
						to={ROUTES.REGISTER}
						className='text-lg text-[#41A1E6]'
					>
						или создать аккаунт
					</Link>
				</>
			}
		/>
	)
}

export const Component = LoginPage
