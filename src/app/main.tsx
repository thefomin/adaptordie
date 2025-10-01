import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { enableMocking } from '@/shared/api/mocks'

import './index.css'
import { router } from './router'

enableMocking().then(() => {
	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>
	)
})
