import cn from 'clsx'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
	children,
	className,
	...rest
}: PropsWithChildren<ButtonType>) {
	return (
		<button
			className={cn(
				'linear rounded-lg bg-transparent border border-primary py-2 px-7 text-base font-medium text-white transition hover:bg-primary active:bg-brand-700',
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}
