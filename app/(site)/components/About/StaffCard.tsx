// StaffCard.tsx

// TODO - conditionaly render the contact button for Wardens only

// TODO - Ensure all uploaded photos render the same size
// import urlFor from '@/sanity/lib/urlFor';

// interface StaffCardProps {
// 	staffMember: StaffCardMember;
// }

// const StaffCard: React.FC<StaffCardProps> = ({ staffMember }) => (
// 	<div
// 		key={staffMember._id}
// 		className='flex flex-col items-center max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow'>
// 		{/* Change below Div to anchor / Link to make full card clickable - example: to add profile page */}
// 		<div>
// 			<img
// 				className='rounded-t-lg'
// 				src={urlFor(staffMember.imageUrl).url()}
// 				alt={staffMember.name}
// 			/>
// 		</div>
// 		<div className='p-5 w-full'>
// 			<a href='#'>
// 				<h5 className='mb-2 text-2xl font-bold tracking-tight text-center text-gray-900'>
// 					{staffMember.name}
// 				</h5>
// 			</a>
// 			<p className='mb-3 font-normal text-gray-700 line-clamp-5 '>
// 				{staffMember.bio}
// 			</p>
// 			<a
// 				href={`mailto:${staffMember.email}`}
// 				className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-secondaryHover focus:ring-4 focus:outline-none focus:ring-myBlue '>
// 				Contact
// 				<svg
// 					className='w-3.5 h-3.5 ml-2'
// 					aria-hidden='true'
// 					xmlns='http://www.w3.org/2000/svg'
// 					fill='none'
// 					viewBox='0 0 14 10'>
// 					<path
// 						stroke='currentColor'
// 						strokeLinecap='round'
// 						strokeLinejoin='round'
// 						strokeWidth='2'
// 						d='M1 5h12m0 0L9 1m4 4L9 9'
// 					/>
// 				</svg>
// 			</a>
// 		</div>
// 	</div>
// );

// export default StaffCard;

import urlFor from '@/sanity/lib/urlFor';
import Link from 'next/link';

interface StaffCardProps {
	staffMember: StaffCardMember;
}

const StaffCard: React.FC<StaffCardProps> = ({ staffMember }) => (
	<div
		key={staffMember._id}
		className='flex flex-col items-center max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow'>
		<div>
			<img
				className='rounded-t-lg'
				src={urlFor(staffMember.imageUrl).url()}
				alt={staffMember.name}
				style={{ width: '100%', height: 'auto' }} // Ensure all images render the same size
			/>
		</div>
		<div className='p-5 w-full flex flex-col justify-between h-full'>
			<div>
				<a href='#'>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-center text-gray-900'>
						{staffMember.name}
					</h5>
				</a>
				<p className='mb-3 font-normal text-gray-700 line-clamp-5 '>
					{staffMember.bio}
				</p>
			</div>
			{staffMember.role === 'warden' && ( // Conditionally render the contact button for Wardens only
				<Link
					href={`mailto:${staffMember.email}`}
					className='flex justify-center items-center px-3 py-2 text-sm font-medium text-white bg-secondary rounded-lg hover:bg-secondaryHover focus:ring-4 focus:outline-none focus:ring-myBlue '>
					Contact {staffMember.name}
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
				</Link>
			)}
		</div>
	</div>
);

export default StaffCard;
