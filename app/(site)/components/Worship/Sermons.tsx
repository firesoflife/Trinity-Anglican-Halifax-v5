import SermonsHeader from './SermonsHeader';
import SermonsList from './SermonsList';
import { getSermons } from '@/app/lib/api/getSermons';

export const revalidate = 1;
const Sermons = async () => {
	const sermons = await getSermons();
	return (
		<div>
			<SermonsHeader />
			<SermonsList sermons={sermons} />
		</div>
	);
};

export default Sermons;
