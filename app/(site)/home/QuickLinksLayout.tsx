import QuickLinksCard from '../components/HomePage/quickLinksCard';
import { cards } from '@/app/lib/quickLinksData';

function QuickLinksLayout() {
	return (
		<div className='mx-auto py-8 px-6 bg-primary'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
				{cards.map((card, index) => (
					<QuickLinksCard key={index} {...card} />
				))}
			</div>
		</div>
	);
}

export default QuickLinksLayout;
