'use client';

import { useEffect } from 'react';
import { Accordion as FlowbiteAccordion } from 'flowbite';
import type {
	AccordionOptions,
	AccordionItem,
	AccordionInterface,
} from 'flowbite';

type OurValuesProps = {
	worship: Worship;
};
export const OurValues = ({ worship }: OurValuesProps) => {
	useEffect(() => {
		// const accordionItems: AccordionItem[] = [
		// 	'accordion-flush-heading-1',
		// 	'accordion-flush-heading-2',
		// 	'accordion-flush-heading-3',
		// ].map((id, index) => {
		const accordionIds = [];
		if (worship.item1) accordionIds.push('accordion-flush-heading-1');
		if (worship.item2) accordionIds.push('accordion-flush-heading-2');
		if (worship.item3) accordionIds.push('accordion-flush-heading-3');

		const accordionItems = accordionIds.map(
			(id, index) => {
				const triggerEl = document.querySelector(
					`#${id} button`
				) as HTMLElement;
				const targetEl = document.querySelector(
					`#accordion-flush-body-${index + 1}`
				) as HTMLElement;

				if (!triggerEl || !targetEl) {
					throw new Error(`Elements not found for id: ${id}`);
				}

				return {
					id,
					triggerEl,
					targetEl,
					active: false, // Set all items to inactive by default
				};
			},
			[worship]
		);

		const options: AccordionOptions = {
			alwaysOpen: false, // Change this to false to allow all items to be closed
			activeClasses: 'bg-gray-50 dark:bg-gray-900 text-myGrey px-4',
			inactiveClasses: 'text-myBlue hover:bg-gray-200 p-4',
		};

		const accordion: AccordionInterface = new FlowbiteAccordion(
			accordionItems,
			options
		);

		accordionItems.forEach((item) => {
			accordion.close(item.id);
		});
	}, []);

	if (!worship) {
		return <p>...loading</p>;
	}

	return (
		<>
			<div
				id='accordion-flush'
				data-accordion='collapse'
				data-active-classes='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
				data-inactive-classes='text-myBlue dark:text-gray-400'>
				{worship.item1 && (
					<>
						<h2 id='accordion-flush-heading-1'>
							<button
								type='button'
								className='flex items-center justify-between w-full py-5 font-medium text-left text-myBlue border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
								data-accordion-target='#accordion-flush-body-1'
								aria-expanded='true'
								aria-controls='accordion-flush-body-1'>
								<span> {worship.item1} </span>
								<svg
									data-accordion-icon
									className='w-3 h-3 rotate-180 shrink-0'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 10 6'>
									<path
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M9 5 5 1 1 5'
									/>
								</svg>
							</button>
						</h2>
						<div
							id='accordion-flush-body-1'
							className='hidden'
							aria-labelledby='accordion-flush-heading-1'>
							<div className='py-5 border-b border-gray-200 dark:border-gray-700'>
								<p className='mb-2 text-myBlue dark:text-gray-400'>
									{worship.item1Content}
								</p>
								<p className='text-myBlue dark:text-gray-400'>
									{worship.item1Content}
								</p>
							</div>
						</div>
					</>
				)}
				{worship.item2 && (
					<>
						<h2 id='accordion-flush-heading-2'>
							<button
								type='button'
								className='flex items-center justify-between w-full py-5 font-medium text-left text-myBlue border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
								data-accordion-target='#accordion-flush-body-2'
								aria-expanded='false'
								aria-controls='accordion-flush-body-2'>
								<span> {worship.item2} </span>
								<svg
									data-accordion-icon
									className='w-3 h-3 rotate-180 shrink-0'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 10 6'>
									<path
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M9 5 5 1 1 5'
									/>
								</svg>
							</button>
						</h2>
						<div
							id='accordion-flush-body-2'
							className='hidden'
							aria-labelledby='accordion-flush-heading-2'>
							<div className='py-5 border-b border-gray-200 dark:border-gray-700'>
								<p className='mb-2 text-myBlue dark:text-gray-400'>
									{worship.item2Content}
								</p>
							</div>
						</div>
					</>
				)}
				{worship.item3 && (
					<>
						<h2 id='accordion-flush-heading-3'>
							<button
								type='button'
								className='flex items-center justify-between w-full py-5 font-medium text-left text-myBlue border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
								data-accordion-target='#accordion-flush-body-3'
								aria-expanded='false'
								aria-controls='accordion-flush-body-3'>
								<span>{worship.item3}</span>
								<svg
									data-accordion-icon
									className='w-3 h-3 rotate-180 shrink-0'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 10 6'>
									<path
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M9 5 5 1 1 5'
									/>
								</svg>
							</button>
						</h2>
						<div
							id='accordion-flush-body-3'
							className='hidden'
							aria-labelledby='accordion-flush-heading-3'>
							<div className='py-5 border-b border-gray-200 dark:border-gray-700'>
								<p className='mb-2 text-myBlue dark:text-gray-400'>
									{worship.item1Content}
								</p>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};
