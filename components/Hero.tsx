import { fugaz } from '@/app/layout';

export default function Hero() {
	return (
		<>
			<div className="py-10 sm:py-14 md:py-20">
				<h1
					className={`text-5xl sm:text-6xl md:text-7xl text-center ${fugaz.className}`}
				>
					<span>Broodl</span> helps you track your <span>daily</span> mood!
				</h1>
			</div>
		</>
	);
}
