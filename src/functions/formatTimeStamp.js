export const formatTimeStamp = (timestamp) => {
	const date = new Date(timestamp);
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds() + date.getMilliseconds() / 1000;

	const amPm = hours >= 12 ? 'PM' : 'AM';
	const formattedHours = hours % 12 || 12;

	return `${monthNames[monthIndex]} ${day}, ${year}, ${formattedHours}:${minutes
		.toString()
		.padStart(2, '0')} ${amPm} and ${seconds.toFixed(0)} seconds`;
};
