import { client } from '@/sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import ImageUrlBuilder from '@sanity/image-url';
import { getStaff } from '@/app/lib/api/getStaff';
import StaffCard from '../../components/About/StaffCard';

const builder = ImageUrlBuilder(client);

// Todo - Check if this function is required  - urlFor seems not to be used ?
function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

const StaffPage = async () => {
	const staffMembers: Staff[] = await getStaff();

	const staffByRole = staffMembers.reduce(
		(acc: Record<string, Staff[]>, staffMember: Staff) => {
			const { role } = staffMember;
			if (!acc[role]) {
				acc[role] = [];
			}
			acc[role].push(staffMember);
			return acc;
		},
		{}
	);

	type Role = 'rector' | 'clergy' | 'general' | 'warden';

	const roleTitles: Record<Role, string> = {
		rector: 'Rector',
		clergy: 'Clergy',
		general: 'Church Staff',
		warden: 'Wardens',
	};

	const rolesOrder = ['rector', 'clergy', 'general', 'warden'];

	return (
		<div className='flex flex-wrap gap-8 w-full'>
			{rolesOrder.map((role) => (
				<div key={role} className='w-full border p-4 rounded-lg'>
					<h2 className='text-center text-4xl mb-8 text-primary font-subheading first-letter:uppercase'>
						{roleTitles[role as Role]}
					</h2>
					<div className='flex flex-wrap justify-center gap-4'>
						{staffByRole[role]?.map((staffMember: Staff) => (
							<StaffCard key={staffMember._id} staffMember={staffMember} />
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default StaffPage;
