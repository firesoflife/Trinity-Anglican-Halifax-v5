import React from 'react';
import BlogBanner from '../components/Blog/blogBanner';
import BlogHeader from '../components/Blog/blogHeader';
import BlogList from '../components/Blog/blogList';
import { getPosts } from '@/app/lib/api/getPosts';

export const revalidate = 10;

const BlogPage = async () => {
	const posts = await getPosts();
	return (
		<div className='bg-secondary'>
			<BlogBanner />
			<BlogHeader />
			<BlogList posts={posts} />
		</div>
	);
};

export default BlogPage;
