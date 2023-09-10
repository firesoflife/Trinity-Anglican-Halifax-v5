import {
	getRegularServices,
	getSpecialServices,
} from '@/app/lib/api/getServices';

export default async function EventList() {
	const regularServices = await getRegularServices();
	const specialServices = await getSpecialServices();

	return (
		<>
			{regularServices.map((service, index) => (
				// Replace with your actual rendering logic
				<div key={index}>
					<h2>{service.title}</h2>
					<p>{service.description}</p>
					<p>Start Time: {service.startTime}</p>
					<p>End Time: {service.endTime || 'Not specified'}</p>
					<p>Days: {service.daysOfWeek.join(', ')}</p>
				</div>
			))}

			{specialServices.map((service, index) => (
				// Replace with your actual rendering logic
				<div key={index}>
					<h2>{service.title}</h2>
					<p>{service.description}</p>
					<p>Start Time: {service.startTime}</p>
					<p>End Time: {service.endTime || 'Not specified'}</p>
					<p>Days: {service.daysOfWeek.join(', ')}</p>
				</div>
			))}
		</>
	);
}
