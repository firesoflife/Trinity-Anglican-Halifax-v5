import { Suspense } from 'react';

const AllEventsHeaderSkeleton: React.FC = () => {
	return (
		<div className='animate-pulse h-auto py-16 bg-primary text-secondary p-4'>
			<div className='flex justify-around'>
				<hr className='staff-underline w-2/3 mx-auto bg-secondary' />
			</div>
			<div className='h-10 bg-secondary rounded w-1/12 mx-auto my-16'></div>
			<hr className='staff-underline w-1/3 mx-auto bg-secondary' />
		</div>
	);
};

const ButtonsSkeleton: React.FC = () => {
	return (
		<div className='animate-pulse container w-1/2 mx-auto text-sm font-medium text-center text-myGrey '>
			<ul className='flex flex-wrap -mb-px justify-center'>
				<li className='mr-2'>
					<div className='inline-block p-4 border-2 rounded w-[8rem] bg-myGrey'></div>
				</li>
				<li className='mr-2'>
					<div className='inline-block p-4 border-2 rounded w-[8rem] bg-myGrey'></div>
				</li>
			</ul>
		</div>
	);
};

const LoadingSkeleton: React.FC = () => (
	<div>
		<div className='animate-pulse grid grid-cols-1 md:grid-cols-4 gap-4 bg-base-100 shadow-xl p-3 m-3 mb-14 w-full mx-auto'>
			<div className='col-span-1 hidden sm:block'>
				<div className='aspect-w-1 aspect-h-1 mx-auto bg-gray-300 rounded'></div>
			</div>
			<div className='card-body col-span-3'>
				<div className='h-6 bg-gray-200 rounded w-3/4 mb-4'></div>
				<div className='h-4 bg-gray-200 rounded w-full mb-4'></div>
				<div className='h-4 bg-gray-200 rounded w-1/2 mb-4'></div>
				<hr className='p-3 lg:hidden' />
				<div className='card-actions justify-between'>
					<div className='text-white'>
						<div className='h-4 bg-gray-200 rounded w-1/4 mb-2'></div>
						<div className='h-4 bg-gray-200 rounded w-1/4 mb-2'></div>
					</div>
					<div className='lg:flex hidden w-1/2'>
						<hr className='w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 ' />
						<span className='self-center px-5'>
							<div className='w-10 h-10 bg-gray-200 rounded-full'></div>
						</span>
						<hr className='w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
					</div>
					<div className='h-10 bg-gray-200 rounded w-1/4'></div>
				</div>
			</div>
		</div>
	</div>
);

const ParishEventList = () => {
	return (
		<div>
			<AllEventsHeaderSkeleton />
			<ButtonsSkeleton />
			<Suspense
				fallback={
					<div>
						<LoadingSkeleton />
					</div>
				}>
				<div className='container mx-auto p-8 bg-primary w-full text-white'>
					{/* EVENTS */}
					{[...Array(3)].map((_, index) => (
						<LoadingSkeleton key={index} />
					))}
				</div>
			</Suspense>
		</div>
	);
};

export default ParishEventList;
