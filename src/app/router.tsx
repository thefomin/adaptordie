import { createBrowserRouter, redirect } from 'react-router-dom'

import { ROUTES } from '@/shared/config'

import App from './app'
import NotFound from './not-found'
import { ProtectedRoute, protectedLoader } from './protected-route'
import { Providers } from './providers'

export const router = createBrowserRouter([
	{
		element: (
			<Providers>
				<App />
			</Providers>
		),
		errorElement: <NotFound />,
		children: [
			{
				loader: protectedLoader,

				element: (
					<>
						<ProtectedRoute />
					</>
				),
				children: [
					{
						path: ROUTES.COURSES,
						lazy: () => import('@/features/courses/courses.page')
					}
				]
			},

			{
				path: ROUTES.REGISTER,
				lazy: () => import('@/features/auth/register/register.page')
			},
			{
				path: ROUTES.HOME,
				loader: () => redirect(ROUTES.COURSES)
			}
		]
	}
])
