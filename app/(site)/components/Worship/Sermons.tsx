import SermonsHeader from './SermonsHeader';
import SermonsList from './SermonsList';
import { getSermons } from '@/app/lib/api/getSermons';

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
