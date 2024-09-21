import { fugaz } from '@/app/layout';

type ButtonProps = {
	children: React.ReactNode;
	dark?: boolean;
	full?: boolean;
};

export default function Button({ children, dark, full }: ButtonProps) {
	return (
		<>
			<button
				className={`rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border-solid border-indigo-600  ${
					dark ? 'text-white bg-indigo-600' : 'text-indigo-600'
				} ${full ? 'grid place-items-center w-full' : ''}`}
			>
				<p
					className={`px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ${fugaz.className}`}
				>
					{children}
				</p>
			</button>
		</>
	);
}
