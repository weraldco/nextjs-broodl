import { fugaz } from '@/app/layout';
import Button from './Button';
import Calendar from './Calendar';

export default function Hero() {
	return (
		<>
			<div className="py-4 md:py-10 flex flex-col gap-4 sm:gap-8">
				<h1
					className={`text-5xl sm:text-6xl md:text-7xl text-center ${fugaz.className}`}
				>
					<span className="textGradient">Broodl</span> helps you track your{' '}
					<span className="textGradient">daily</span> mood!
				</h1>
				<p className="text-lg sm:text-xl md:text-2x text-center w-full mx-auto max-w-[600px]">
					Create your mood record and see how you feel on{' '}
					<span className="font-semibold">every day of every year.</span>
				</p>
				<div className="grid grid-cols-2 gap-4 w-fit mx-auto">
					<Button>Sign-up</Button>
					<Button dark>Login</Button>
				</div>
				<Calendar />
			</div>
		</>
	);
}
