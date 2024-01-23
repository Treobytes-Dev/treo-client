// axios
import axios from 'axios';
// next imports
import Head from 'next/head';
import Link from 'next/link';
// hooks
import useCategory from '../../hooks/useCategory';
import useLatestPosts from '../../hooks/useLatestPosts';
// moment
import moment from 'moment';
// components
import Navigation from '../../components/Navigation';
// icons
import NoImage from '../../assets/icons/NoImage';

const SingleCategory = ({ componentName, posts, category }) => {
	// hooks
	const { categories } = useCategory();
	const { latestPosts } = useLatestPosts();

	return (
		<>
			<Head>
				<title>{category.name}</title>
				<meta
					name='description'
					content={`Read latest posts on ${category.name}`}
				/>
			</Head>

			<Navigation />
			<div className={`${componentName} container`}>
				<h1 className='header-one'>Posts in {category.name}</h1>

				{posts ? (
					posts.map((post) => (
						<div className='posts' key={post._id} style={{ padding: '20px 0' }}>
							<div className='image' style={{ display: 'flex' }}>
								{post.featuredImage?.url ? (
									<img src={post.featuredImage?.url} alt={post.title} />
								) : (
									<NoImage />
								)}
							</div>

							<Link
								className='anchor'
								href={`/post/${post.slug}`}
								style={{ display: 'flex' }}
							>
								{post.title}
							</Link>
							<div className='group'>
								<p className='paragraph'>Created by: {post?.postedBy?.name}</p>
								<p className='paragraph'>{moment(post.createdAt).fromNow()}</p>
							</div>
						</div>
					))
				) : (
					<h3 className='header-three'>No Posts</h3>
				)}

				<div className='group' style={{ padding: '20px 0' }}>
					<h5 className='header-five'>Categories</h5>

					{categories.map((c) => (
						<Link
							className='anchor'
							href={`/category/${c.slug}`}
							key={c._id}
							style={{ padding: '0 10px 0 0' }}
						>
							{c.name}
						</Link>
					))}
				</div>

				<div className='group' style={{ padding: '20px 0' }}>
					<h5 className='header-five'>Latest Posts</h5>
					{latestPosts.map((p) => (
						<Link
							className='anchor'
							href={`/post/${p.slug}`}
							key={p._id}
							style={{ padding: '0 10px 0 0' }}
						>
							{p.title}
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export async function getServerSideProps({ params }) {
	const { data } = await axios.get(`/posts-by-category/${params.slug}`);
	return {
		props: {
			posts: data.posts,
			category: data.category,
		},
	};
}

SingleCategory.defaultProps = {
	componentName: 'single-category',
};

export default SingleCategory;
