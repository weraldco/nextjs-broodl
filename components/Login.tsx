import { fugaz } from '@/app/layout';
import Button from './Button';

export default function Login() {
	return (
		<div className="flex flex-col flex-1 justify-center items-center gap-4">
			<h3 className={`text-4xl sm:text-5xl md:6xl ${fugaz.className}`}>
				Log In / Register
			</h3>
			<p>You&#39;re one step away!</p>
			<input
				className="w-full max-w-[400px] mx-auto px-3 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none duration-200 hover:border-indigo-600 focus:border-indigo-600"
				type="text"
				placeholder="Email"
			/>
			<input
				className="w-full max-w-[400px] mx-auto px-3 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none duration-200 hover:border-indigo-600 focus:border-indigo-600 "
				type="password"
				placeholder="Password"
			/>
			<div className="max-w-[400px] w-full mx-auto">
				<Button full>Submit</Button>
			</div>
			<p className="text-center">
				Don&#39;t have an account?{' '}
				<span className="text-indigo-600">Sign up</span>
			</p>
		</div>
	);
}
