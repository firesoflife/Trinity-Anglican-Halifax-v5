// StaffCard.tsx

// TODO - conditionaly render the contact button for Wardens only

// TODO - Ensure all uploaded photos render the same size
import urlFor from '@/sanity/lib/urlFor';

interface StaffCardProps {
	staffMember: StaffCardMember;
}

const StaffCard: React.FC<StaffCardProps> = ({ staffMember }) => (
	<div
		key={staffMember._id}
		className='flex flex-col items-center max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
		<a href='#'>
			<img
				className='rounded-t-lg'
				src={urlFor(staffMember.imageUrl).url()}
				alt={staffMember.name}
			/>
		</a>
		<div className='p-5 w-full'>
			<a href='#'>
				<h5 className='mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white'>
					{staffMember.name}
				</h5>
			</a>
			<p className='mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-5 '>
				{staffMember.bio}
			</p>
			<a
				href={`mailto:${staffMember.email}`}
				className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
				Contact
				<svg
					className='w-3.5 h-3.5 ml-2'
					aria-hidden='true'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 14 10'>
					<path
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M1 5h12m0 0L9 1m4 4L9 9'
					/>
				</svg>
			</a>
		</div>
	</div>
);

export default StaffCard;
