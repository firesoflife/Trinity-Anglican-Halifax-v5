import QuickLinksCard from '../components/HomePage/quickLinksCard';
import { cards } from '@/app/lib/quickLinksData';

type QuickLinksLayoutProps = {
	pastoralCare: string;
};

const QuickLinksLayout: React.FC<QuickLinksLayoutProps> = ({
	pastoralCare,
}) => {
	return (
		<div className='mx-auto py-8 px-6 bg-primary'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
				{cards.map((card, index) => (
					<QuickLinksCard
						key={index}
						imageSrc={card.imageSrc}
						alt={card.alt}
						header={card.header}
						content={index === 2 ? pastoralCare : card.content} // Use the fetched data for the third card
						cta={card.cta}
					/>
				))}
			</div>
		</div>
	);
};

export default QuickLinksLayout;
