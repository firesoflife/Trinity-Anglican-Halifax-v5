'use client';

import { useForm, ValidationError } from '@formspree/react';
import React, { FormEvent, useEffect, useState } from 'react';
import { placeholders } from '../../utilities/fallbackAssets';

interface FormProps {
	contactInfo: {
		pageTitle: string;
		formHeading: string;
		formSubheading: string;
		email: string;
		phone: string;
		hoursTitle: string;
		days: {
			day: string;
			from: string;
			to: string;
		}[];
	};
}

const ContactForm: React.FC<FormProps> = ({ contactInfo }) => {
	const [email, setEmail] = useState<string>('');
	const [subject, setSubject] = useState<string>('');
	const [message, setMessage] = useState<string>('');

	const [state, handleSubmit] = useForm('xgejdydg');

	const [showToast, setShowToast] = useState(false);

	useEffect(() => {
		if (state.succeeded) {
			setShowToast(true);
			// Optionally hide the toast after a delay
			const timeoutId = setTimeout(() => {
				setShowToast(false);
				// Form reset
				resetForm();
			}, 3000);
			return () => clearTimeout(timeoutId); // Clear timeout if component is unmounted
		}
	}, [state.succeeded]);

	const resetForm = () => {
		setEmail('');
		setSubject('');
		setMessage('');
	};

	return (
		<section className='bg-primary h-vh'>
			<div className='py-8 lg:py-16 px-10 mx-auto max-w-screen-md'>
				<h2 className='mb-4 text-4xl tracking-tight font-subheading text-center text-secondary dark:text-white'>
					{contactInfo?.formHeading ||
						'Send a General Message or Request for Pastoral Care'}
				</h2>
				<p className='mb-8 lg:mb-16 font-light text-center text-gray-700  sm:text-xl'>
					{contactInfo?.formSubheading ||
						placeholders.contact.subheadingFallback}
				</p>
				<form
					onSubmit={handleSubmit}
					action='https://formspree.io/f/xgejdydg'
					method='POST'
					className='space-y-8'>
					<div>
						<label
							htmlFor='email'
							className='block mb-2 text-sm font-medium text-secondary dark:text-gray-300'>
							Your email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className='shadow-sm bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
							placeholder='name@youremail.com'
							required
						/>
						<ValidationError
							prefix='Email'
							field='email'
							errors={state.errors}
						/>
					</div>
					<div>
						<label
							htmlFor='subject'
							className='block mb-2 text-sm font-medium text-secondary dark:text-gray-300'>
							Subject
						</label>
						<input
							type='text'
							id='subject'
							name='subject'
							value={subject}
							onChange={(e) => setSubject(e.target.value)}
							className='block p-3 w-full text-sm text-secondary bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
							placeholder='Let us know how we can help you'
							required
						/>
						<ValidationError
							prefix='Subject'
							field='subject'
							errors={state.errors}
						/>
					</div>
					<div className='sm:col-span-2'>
						<label
							htmlFor='message'
							className='block mb-2 text-sm font-medium text-secondary dark:text-gray-400'>
							Your message
						</label>
						<textarea
							id='message'
							name='message'
							rows={6}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className='block p-2.5 w-full text-sm text-secondary bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
							placeholder='Leave a comment...'
						/>
						<ValidationError
							prefix='Message'
							field='message'
							errors={state.errors}
						/>
					</div>
					<button
						type='submit'
						disabled={state.submitting}
						className='py-3 px-5 text-sm font-medium text-center text-secondary rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300'>
						Send message
					</button>
				</form>
			</div>
			{/* Toast Message */}

			{showToast && (
				<div className='toast toast-top toast-center'>
					<div className='alert alert-success'>
						<span>Message sent successfully.</span>
					</div>
				</div>
			)}
		</section>
	);
};

export default ContactForm;
