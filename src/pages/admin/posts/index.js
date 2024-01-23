// this page shows all posts created on the admin side
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../context';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

// components
import AdminLayout from '../../../components/AdminLayout';
import PostsList from '../../../components/PostsList';
import Modal from '../../../components/Modal';
import Status from '../../../components/Status';

const Posts = ({ componentName }) => {
	const [state, post, setPost] = useContext(AppContext);
	// hook
	const router = useRouter();
	const { posts } = post;

	// local state
	const [keyword, setKeyword] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [successMsg, setSuccessMsg] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	const [visible, setVisible] = useState(false);
	const [activePost, setActivePost] = useState({});

	useEffect(() => {
		if (state?.token) fetchPosts();
	}, [state?.token]);

	const fetchPosts = async () => {
		setLoading(true);

		try {
			// TODO: check if this is the correct route
			const { data } = await axios.get('/posts-all');

			setLoading(false);
			setPost((prev) => ({ ...prev, posts: data }));
		} catch (err) {
			setLoading(false);
			setErrorMsg('Unable to fetch posts.');
			console.error(err);
		}
	};

	const handleEdit = async (post) => {
		return router.push(`/admin/posts/${post.slug}`);
	};

	const handlePrompt = (post) => {
		setVisible(true);
		setActivePost(post);
	};

	const handleDelete = async (post) => {
		setLoading(true);

		try {
			setLoading(false);

			const { data } = await axios.delete(`/post/${post._id}`);

			if (data.ok) {
				setPost((prev) => ({
					...prev,
					posts: prev.posts.filter((p) => p._id !== post._id),
				}));
			}
			setVisible(false);
			setSuccessMsg('Post deleted successfully');
		} catch (err) {
			console.error(err);

			setErrorMsg('Post delete failed');
			setLoading(false);
		}
	};

	if (errorMsg) setTimeout(() => setErrorMsg(''), 3000);
	if (successMsg) setTimeout(() => setSuccessMsg(''), 3000);

	return (
		<AdminLayout
			children={
				<div className={`${componentName} main`}>
					<Status
						errorMsg={errorMsg}
						successMsg={successMsg}
						loading={loading}
					/>

					<div
						className='group heading'
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<h1 className='header-one'>Posts</h1>
						<h3 className='header-three'>({posts?.length})</h3>
					</div>

					<button className='button edit add-new'>
						<Link className='anchor add-new' href='/admin/posts/new'>
							+ Add New
						</Link>
					</button>
					<input
						onChange={(e) => setKeyword(e.target.value.toLowerCase())}
						type='text'
						className='input-text'
						placeholder='Search...'
						value={keyword}
						style={{
							margin: '1rem 0',
						}}
					/>

					<div className='list'>
						<PostsList
							posts={posts?.filter((p) =>
								p.title.toLowerCase().includes(keyword)
							)}
							handleEdit={handleEdit}
							// handleDelete={handleDelete}
							handlePrompt={handlePrompt}
						/>
					</div>

					<Modal
						content={
							<div>
								<h3 className='heading-three' style={{ color: '#fff' }}>
									Are you sure you want to delete "{activePost.title}"?
								</h3>
								<button onClick={() => handleDelete(activePost)}>Delete</button>
							</div>
						}
						isVisible={visible}
						setIsVisible={setVisible}
					/>
				</div>
			}
		/>
	);
};

Posts.defaultProps = {
	componentName: 'all-posts',
};

export default Posts;
