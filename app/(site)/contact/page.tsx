import React, { Suspense } from 'react';
import ContactForm from '../components/Contact/contactForm';
import ContactBanner from '../components/Contact/contactBanner';
import ContactHeader from '../components/Contact/contactHeader';
import Loading from './loading';

const Contact = () => {
	return (
		<Suspense fallback={<Loading />}>
			<div>
				<ContactBanner />
				<ContactHeader />
				{/* Contact Info Card (similar to map on home page) */}
				{/* Social Media  */}
				{/* Pastoral Care */}
				<ContactForm />
			</div>
		</Suspense>
	);
};

export default Contact;
