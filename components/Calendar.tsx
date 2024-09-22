import { baseRating, demoData, gradients } from '@/utils/data';

type MonthT = {
	[key: string]: string;
};
const months: MonthT = {
	January: 'Jan',
	February: 'Feb',
	March: 'Mar',
	April: 'Apr',
	May: 'May',
	June: 'Jun',
	July: 'Jul',
	August: 'Aug',
	September: 'Sept',
	October: 'Oct',
	November: 'Nov',
	December: 'Dec',
};
const now: Date = new Date();
const dayList: string[] = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
export default function Calendar(props) {
	const { demo } = props;
	const year = 2024;
	const month = 'September';
	const monthNow = new Date(year, Object.keys(months).indexOf(month), 1);

	const firstDayOfMonth = monthNow.getDay();
	const daysInMonth = new Date(
		year,
		Object.keys(months).indexOf(month) + 1,
		0
	).getDate();

	const daysToDisplay = firstDayOfMonth + daysInMonth;
	const numRows = Math.floor(daysToDisplay / 7) + (daysToDisplay % 7 ? 1 : 0);

	return (
		<div className="flex flex-col overflow-hidden gap-1 py-4 sm:py-6 md:p-10">
			{[...Array(numRows).keys()].map((row, rowIndex) => {
				return (
					<div key={rowIndex} className="grid grid-cols-7 gap-1">
						{dayList.map((dayOfWeek, dayOfWeekIndex) => {
							const dayIndex =
								rowIndex * 7 + dayOfWeekIndex - (firstDayOfMonth - 1);

							const dayDisplay =
								dayIndex > daysInMonth
									? false
									: row === 0 && dayOfWeekIndex < firstDayOfMonth
									? false
									: true;
							const isToday = dayIndex === now.getDate();
							if (!dayDisplay) {
								return <div className="bg-white" key={dayOfWeekIndex}></div>;
							}
							const color = demo
								? gradients.indigo[baseRating[dayIndex]]
								: dayIndex in demoData
								? gradients.indigo[demoData[dayIndex]]
								: 'white';
							return (
								<div
									style={{ background: color }}
									className={`text-xs sm:text-sm border border-solid p-2 flex items-center gap-2 justify-between rounded-lg ${
										isToday ? 'border-indigo-400' : 'border-indigo-100'
									} ${color === 'white' ? 'text-indigo-400' : 'text-white'}`}
									key={dayOfWeekIndex}
								>
									{dayIndex}
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}
