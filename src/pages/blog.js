// this page shows all posts created on the visitor side
import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import moment from 'moment';
import sanitizeHtml from 'sanitize-html';
// components
import Navigation from '../components/Navigation';
import Status from '../components/Status';

const Blog = ({ componentName, posts }) => {
	// local state
	const [allPosts, setAllPosts] = useState(posts);
	const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);

	const [errorMsg, setErrorMsg] = useState('');

	useEffect(() => {
		getTotal();
	}, []);

	useEffect(() => {
		if (page === 1) return;

		loadMore();
	}, [page]);

	const getTotal = async () => {
		try {
			const { data } = await axios.get('/post-count');

			setTotal(data);
		} catch (err) {
			console.error(`Error getting total posts. ${err}`);
			setErrorMsg('Error getting total posts.');
		}
	};

	const loadMore = async () => {
		try {
			setLoading(true);
			const { data } = await axios.get(`/posts/${page}`);
			setAllPosts([...allPosts, ...data]);
			setLoading(false);
		} catch (err) {
			console.error(`Error loading more posts. ${err}`);
			setErrorMsg('Error loading more posts.');
			setLoading(false);
		}
	};

	if (errorMsg) setTimeout(() => setErrorMsg(''), 3000);

	// TODO: add ability to add title and description to head
	return (
		<>
			<Head>
				<title>Blog posts</title>
				<meta description='Blog posts about web development, programming etc' />
			</Head>
			<Navigation />
			<div className={`${componentName}`}>
				{!!errorMsg || (!!loading && <Status errorMsg={errorMsg} />)}
				{/* {JSON.stringify(allPosts, null, 4)} */}
				<div className='container'>
					<h1 className='header-one'>Blog</h1>
					<div className='all-posts'>
						{!!allPosts ? (
							allPosts.map((post) => (
								<div
									key={post._id}
									className='single-post'
									style={{ padding: '20px 0' }}
								>
									<Link className='anchor' href={`/post/${post.slug}`}>
										{/* {!!post.featuredImage?.url && (
										<img
											className='img'
											src={post.featuredImage?.url}
											alt={post.title}
										/>
									)} */}
										{!!post.featuredImage?.url && (
											<div
												className='post-image'
												style={{
													backgroundImage:
														'url(' + post.featuredImage?.url + ')',
													backgroundRepeat: 'no-repeat',
													backgroundPosition: 'center center',
													backgroundSize: 'cover',
													height: '300px',
												}}
											/>
										)}

										<h2 className='header-two'>{post.title}</h2>
										<div className='content'>
											{/* define excerpt
											 * 1. get the content
											 * 2. slice it to 150 chars
											 * 3. add '...' if the content is longer than 150 chars
											 * 4. use dangerouslySetInnerHTML to render the content
											 */}

											{sanitizeHtml(
												post.content.slice(0, 150) +
													(post.content.length > 150 ? '...' : ''),
												{
													allowedTags: [],
												}
											)}
										</div>
									</Link>
									<div className='post-info'>
										<p className='paragraph'>Posted By: {post.postedBy.name}</p>
										<p className='paragraph'>
											Created: {moment(post.createdAt).fromNow()}{' '}
										</p>
										<p className='paragraph'>{0} comments</p>
									</div>
									<div
										className='border-bottom'
										style={{ borderBottom: '1px solid gray' }}
									/>
								</div>
							))
						) : (
							<h3 className='header-three'>No posts</h3>
						)}
					</div>

					<div className='pagination'>
						{allPosts?.length < total && (
							<div style={{ textAlign: 'center', padding: 20 }}>
								<button
									className='button edit load-more'
									onClick={() => setPage(page + 1)}
								>
									{!!loading ? '...Loading' : 'Load More'}
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export async function getServerSideProps() {
	const { data } = await axios.get(`/posts/1`);
	return {
		props: {
			posts: data,
		},
	};
}

Blog.defaultProps = {
	componentName: 'blog',
};

export default Blog;
