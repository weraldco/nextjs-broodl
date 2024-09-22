import { fugaz } from '@/app/layout';
import Calendar from './Calendar';

export default function Dashboard() {
	type statusesT = {
		num_days: number;
		time_remaining: string;
		date: string;
	};
	const statuses: statusesT = {
		num_days: 14,
		time_remaining: `13:14:26`,
		date: new Date().toDateString(),
	};

	type moodsT = {
		[key: string]: string;
	};
	const moods: moodsT = {
		'@#%$$!': '🤯',
		Sad: '😢',
		Tired: '😞',
		Amazing: '🤩',
		Great: '😍',
	};
	return (
		<div className="flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16">
			<div className="grid grid-cols-3 bg-indigo-50 text-indigo-500 rounded-lg p-4 gap-4">
				{Object.keys(statuses).map((status, statusId) => (
					<div key={statusId} className=" flex flex-col gap-1 sm:gap-2">
						<p className="uppercase font-medium text-xs sm:text-sm truncate">
							{status.replaceAll('_', ' ')}
						</p>
						<p className={`text-base sm:text-lg truncate ${fugaz.className}`}>
							{statuses[status]}
						</p>
					</div>
				))}
			</div>
			<h4
				className={`text-5xl sm:text-6xl md:text-7xl text-center ${fugaz.className}`}
			>
				How do you <span className="textGradient">feel</span> today?
			</h4>
			<div className="flex items-stretch flex-wrap gap-4">
				{Object.keys(moods).map((mood, moodId) => (
					<button
						key={moodId}
						className={`p-4 px-6 rounded-2xl purpleShadow duration-200 bg-indigo-50 hover:bg-indigo-100 text-center flex flex-col gap-2 items-center flex-1`}
					>
						<p className="text-4xl sm:text-5xl md:text-6xl">{moods[mood]}</p>
						<p
							className={`text-indigo-500 text-xs sm:text-sm md:text-base ${fugaz.className}`}
						>
							{mood}
						</p>
					</button>
				))}
			</div>
			<Calendar />
		</div>
	);
}
