const staffData = [
	{
		name: 'John Doe',
		role: 'Senior Pastor',
		image: 'https://placehold.co/400',
	},
	{
		name: 'Jane Smith',
		role: 'Associate Pastor',
		image: 'https://placehold.co/400',
	},
	{
		name: 'Robert Johnson',
		role: 'Youth Pastor',
		image: 'https://placehold.co/400',
	},
	{
		name: 'Emily Davis',
		role: "Children's Ministry Director",
		image: 'https://placehold.co/400',
	},
	{
		name: 'William Brown',
		role: 'Music Director',
		image: 'https://placehold.co/400',
	},
	{
		name: 'Elizabeth Miller',
		role: 'Outreach Coordinator',
		image: 'https://placehold.co/400',
	},
	{
		name: 'James Wilson',
		role: 'Church Administrator',
		image: 'https://placehold.co/400',
	},
	{
		name: 'Patricia Moore',
		role: "Women's Ministry Leader",
		image: 'https://placehold.co/400',
	},
	{
		name: 'Charles Taylor',
		role: "Men's Ministry Leader",
		image: 'https://placehold.co/400',
	},
	{
		name: 'Linda Anderson',
		role: 'Counseling Ministry Leader',
		image: 'https://placehold.co/400',
	},
];

function StaffList() {
	return (
		<div className='w-1/3 overflow-y-scroll'>
			{staffData.map((staff, index) => (
				<div
					key={index}
					className='p-4 hover:scale-105 transition-transform cursor-pointer'>
					<img
						src={staff.image}
						alt={staff.name}
						className='w-40 h-40 object-cover rounded-full'
					/>
					<h3 className='text-center text-lg font-bold'>{staff.name}</h3>
					<p>{staff.role}</p>
				</div>
			))}
		</div>
	);
}

export default StaffList;
