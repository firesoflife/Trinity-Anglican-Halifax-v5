import React, { Suspense } from 'react';
import ContactForm from '../components/Contact/contactForm';
import ContactBanner from '../components/Contact/contactBanner';
import ContactHeader from '../components/Contact/contactHeader';
import Loading from './loading';
import HoursContactCard from '../components/Contact/contactHours';
import { getContact } from '@/app/lib/api/getContact';

const Contact = async () => {
	const contactInfo = await getContact();
	return (
		<Suspense fallback={<Loading />}>
			<div>
				<ContactBanner />
				<ContactHeader />
				<HoursContactCard />
				<ContactForm contactInfo={contactInfo} />
			</div>
		</Suspense>
	);
};

export default Contact;
