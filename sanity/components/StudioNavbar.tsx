import Link from 'next/link';
import '../lib/sanity.css';

import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

function StudioNavbar(props: any) {
	return (
		<>
			<div className='sanity-container'>
				<a href='/' className='sanity-link'>
					<ArrowUturnLeftIcon className='sanity-icon' />
					Go To Website
				</a>
				<div className='sanity-guide'>
					<h1 className='sanity-heading'>
						Confused? See Guide to Editing Content Here 🔍
					</h1>
					<a href='#' className='sanity-link-guide'>
						Guide to Editing Web Content
					</a>
				</div>
			</div>
			<div>{props.renderDefault(props)}</div>
		</>
	);
}

export default StudioNavbar;
