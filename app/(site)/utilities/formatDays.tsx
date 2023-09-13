'use server';

export function formatDays(days: string[]): string {
	const daysOfWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const sortedDays = days.sort(
		(a, b) => daysOfWeek.indexOf(a) - daysOfWeek.indexOf(b)
	);
	let formattedDays = '';
	let startDay = '';
	let endDay = '';

	for (let i = 0; i < sortedDays.length; i++) {
		if (
			i === 0 ||
			daysOfWeek.indexOf(sortedDays[i]) -
				daysOfWeek.indexOf(sortedDays[i - 1]) >
				1
		) {
			if (startDay && endDay) {
				formattedDays += `${startDay}-${endDay}, `;
			}
			startDay = sortedDays[i];
			endDay = '';
		} else if (
			i === sortedDays.length - 1 ||
			daysOfWeek.indexOf(sortedDays[i]) -
				daysOfWeek.indexOf(sortedDays[i + 1]) >
				1
		) {
			endDay = sortedDays[i];
		}
	}

	if (startDay && endDay) {
		formattedDays += `${startDay}-${endDay}`;
	} else if (startDay) {
		formattedDays += startDay;
	}

	return formattedDays;
}
