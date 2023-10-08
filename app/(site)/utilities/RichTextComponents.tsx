import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../../../sanity/lib/urlFor';

export const RichTextComponents = {
	types: {
		image: ({ value }: any) => {
			return (
				<div className='relative w-full h-96 m-10 mx-auto'>
					<Image
						className='object-contain'
						src={urlFor(value)!}
						alt='Blog Post Image'
						fill
					/>
				</div>
			);
		},
	},

	list: {
		bullet: ({ children }: any) => (
			<ul className='ml-10 py-5 list-disc space-y-5 text-myGrey font-subContent2 font-bold'>
				{children}
			</ul>
		),
		number: ({ children }: any) => (
			<ol className='mt-lg list-decimal'>{children}</ol>
		),
	},

	block: {
		normal: (
			{ children }: any // Add this
		) => (
			<p className='mb-2 font-subContent prose text-lg'>{children}</p> // Adjust "mb-4" to the desired space
		),
		h1: ({ children }: any) => (
			<h1 className='text-5xl py-10 font-subheadingeading'>{children}</h1>
		),
		h2: ({ children }: any) => (
			<h2 className='text-4xl py-10 font-subheading'> {children}</h2>
		),
		h3: ({ children }: any) => (
			<h3 className='text-3xl py-10 font-subheading'> {children}</h3>
		),
		h4: ({ children }: any) => (
			<h4 className='text-2xl py-10 font-subheading'> {children}</h4>
		),
		blockquote: ({ children }: any) => (
			<blockquote className='border-l-myGrey border-l-4 pl-5 py-5 my-5 '>
				{children}
			</blockquote>
		),
	},
	marks: {
		link: ({ children, value }: any) => {
			const rel = !value.href.startWith('/')
				? 'noreferrer noopener'
				: undefined;

			return (
				<Link
					href={value.href}
					rel={rel}
					className='underline decoration-secondary hover:decoration-myGrey'>
					{children}
				</Link>
			);
		},
	},
};
