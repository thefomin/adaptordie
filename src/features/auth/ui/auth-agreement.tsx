import { Link } from 'react-router-dom'

import { Switch } from '@/shared/ui/kit'

type AuthAgreementProps = {
	checked?: boolean
	onCheckedChange?: (checked: boolean) => void
}

export function AuthAgreement({
	checked,
	onCheckedChange
}: AuthAgreementProps) {
	return (
		<div className='flex flex-row items-start'>
			<Switch
				id='agreement'
				className='mr-2'
				checked={checked}
				onCheckedChange={onCheckedChange}
			/>
			<label htmlFor='agreement' className='text-foreground/50 text-md'>
				я принимаю условия{' '}
				<span>
					<Link to='#' className='text-[#41A1E6]'>
						условия использования
					</Link>{' '}
					и
					<Link to='#' className='text-[#41A1E6]'>
						{' '}
						политику конфиденциальности
					</Link>
				</span>
			</label>
		</div>
	)
}
