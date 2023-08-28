import { getStaff } from '@/app/lib/api/getStaff';
import { client } from '@/sanity/lib/client';
import ImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = ImageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

const StaffList = async () => {
	const staff = await getStaff();

	console.log(staff);

	return (
		<div>
			{/* <h2>{staff.bio} </h2> */}
			{/* {staff.map((person, index) => (
				<div key={index}>
					<h2>{person.name}</h2>
					<p>{person.role}</p>
					<img src={person.imageUrl} alt={person.name} />
					<p>{person.bio}</p>
					<p>{person.email}</p>
				</div>
			))} */}
		</div>
	);
};

export default StaffList;
