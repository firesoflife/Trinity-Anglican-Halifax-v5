import React from 'react';
import ContactForm from '../components/Contact/contactForm';
import ContactBanner from '../components/Contact/contactBanner';
import ContactHeader from '../components/Contact/contactHeader';

const Contact = () => {
	return (
		<div>
			<ContactBanner />
			<ContactHeader />
			{/* Contact Info Card (similar to map on home page) */}
			{/* Social Media  */}
			{/* Pastoral Care */}
			<ContactForm />
		</div>
	);
};

export default Contact;
