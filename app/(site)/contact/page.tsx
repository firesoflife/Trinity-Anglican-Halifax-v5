import React, { Suspense } from 'react';
import ContactForm from '../components/Contact/contactForm';
import ContactBanner from '../components/Contact/contactBanner';
import ContactHeader from '../components/Contact/contactHeader';
import Loading from './loading';
import HoursContactCard from '../components/Contact/contactHours';
import { getContact } from '@/app/lib/api/getContact';
import SocialMediaList from '../components/Contact/socialMediaList';

export const revalidate = 10;

const Contact = async () => {
	const contactInfo = await getContact();
	return (
		<Suspense fallback={<Loading />}>
			<div>
				<ContactBanner />
				<ContactHeader />
				<HoursContactCard />
				<SocialMediaList />
				<ContactForm contactInfo={contactInfo} />
			</div>
		</Suspense>
	);
};

export default Contact;
