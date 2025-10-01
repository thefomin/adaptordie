import React from 'react'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/shared/ui/kit'

interface AuthLayoutProps {
	form: React.ReactNode
	title: React.ReactNode
	description?: React.ReactNode
	footer?: React.ReactNode
}

export function AuthLayout({
	form,
	title,
	description,
	footer
}: AuthLayoutProps) {
	return (
		<div className='flex grow flex-row items-center justify-center'>
			<Card className='flex w-full max-w-[360px] gap-10 rounded-3xl border-0 shadow-none'>
				<CardHeader className='flex flex-col'>
					<CardTitle className='text-4xl font-semibold'>
						{title}
					</CardTitle>
					<CardDescription>{description}</CardDescription>
				</CardHeader>
				<div className='flex h-auto flex-col gap-8'>
					<CardContent className=''>{form}</CardContent>
					<CardFooter className='flex flex-col'>
						{footer ? footer : null}
					</CardFooter>
				</div>
			</Card>
		</div>
	)
}
