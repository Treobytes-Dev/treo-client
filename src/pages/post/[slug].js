// this page shows a single post on the visitor side
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../context';

// next imports
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// moment
import moment from 'moment';
// social media
// import { ShareSocial } from 'react-share-social';
// todo: investigate: https://github.com/nygardk/react-share

import useCategory from '../../hooks/useCategory';
import useLatestPosts from '../../hooks/useLatestPosts';
// components
import Navigation from '../../components/Navigation';
import sanitizeHtml from 'sanitize-html';
import CommentForm from '../../components/CommentForm';
import Status from '../../components/Status';

import { Loader } from '../../assets/icons/Loader';

const SinglePost = ({ componentName, data }) => {
	const [state] = useContext(AppContext);

	if (!data) {
		// Data is still loading
		return (
			<>
				<p className='paragraph'>Loading...</p>
				<Loader />
			</>
		);
	}

	const location = typeof window !== 'undefined' && window.location.href;

	useEffect(() => {
		postId.length > 0 && setPostId(data.post._id);
	}, []);

	// comments
	const [comments, setComments] = useState(data.comments);
	const [comment, setComment] = useState('');
	const [loading, setLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');
	const [successMsg, setSuccessMsg] = useState('');
	const [postId, setPostId] = useState(data.post._id);
	// editing
	const [selectedComment, setSelectedComment] = useState({});
	const [content, setContent] = useState('');
	const [isEditing, setIsEditing] = useState(false);
	// hooks
	const { categories } = useCategory();
	const { latestPosts } = useLatestPosts();

	const handleSubmit = async () => {
		setLoading(true);
		try {
			const { data } = await axios.post(`/comment/${postId}`, { comment });
			setComments([data, ...comments]);
			setComment('');
			setSuccessMsg('Comment created successfully.');
			setLoading(false);
		} catch (err) {
			console.error(`Error creating comment: ${err}`);
			setErrorMsg('Error creating comment.');
			setLoading(false);
		}
	};

	const handleDelete = async (id) => {
		setLoading(true);
		try {
			await axios.delete(`/comment/${id}`);
			setComments(comments.filter((comment) => comment._id !== id));
			setSuccessMsg('Comment deleted successfully.');
			setLoading(false);
		} catch (err) {
			console.error(`Error deleting comment: ${err}`);
			setErrorMsg('Error deleting comment.');
			setLoading(false);
		}
	};

	const handleEdit = async () => {
		setLoading(true);
		try {
			const { data } = await axios.put(`/comment/${selectedComment._id}`, {
				content,
			});

			let arr = comments;
			const index = arr.findIndex((c) => c._id === selectedComment._id);
			arr[index].content = data.content;
			setComments(arr);

			setIsEditing(false);
			setLoading(false);
			setSelectedComment({});

			setSuccessMsg('Comment updated');
		} catch (err) {
			console.error(`Error editing comment: ${err}`);
			setErrorMsg('Error editing comment.');
			setIsEditing(false);
		}
	};

	if (errorMsg) setTimeout(() => setErrorMsg(''), 3000);
	if (successMsg) setTimeout(() => setSuccessMsg(''), 3000);

	return (
		<>
			<Head>
				<title>{data.post.title}</title>
				<meta description={data.post.content.substring(0, 160)} />
			</Head>

			<Navigation />
			<div className={`${componentName} container`}>
				{!!errorMsg ||
					(!!successMsg && (
						<Status errorMsg={errorMsg} successMsg={successMsg} />
					))}
				{state?.user && state?.token && (
					<Link className='anchor' href={'/admin/posts'}>
						Back to Posts
					</Link>
				)}
				<div className='group post' style={{ margin: '20px 0' }}>
					<h1 className='header-one'>{!!data && data.post.title}</h1>
					{data.post?.featuredImage?.url && (
						<div className='img-container'>
							<Image
								src={data.post?.featuredImage?.url}
								alt={data.post.title}
								// fill
								width={500}
								height={500}
								priority
							/>
						</div>
					)}

					<div className='content'>
						{sanitizeHtml(data.post.content, {
							allowedTags: [],
						})}
					</div>
				</div>

				{/* comments section */}
				<div className='group categories' style={{ margin: '20px 0' }}>
					<h4 className='header-four'>Categories</h4>
					<ul className='unordered-list'>
						{categories.map((c) => (
							<li
								key={c._id}
								className='list-item'
								style={{ marginRight: '10px' }}
							>
								<Link href={`/category/${c.slug}`} className='anchor category'>
									{c.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className='group latest-posts' style={{ margin: '20px 0' }}>
					<h4 className='header-four'>Latest Posts</h4>
					<ul className='unordered-list'>
						{latestPosts.map((p) => (
							<li
								key={p._id}
								className='list-item'
								style={{ marginRight: '10px' }}
							>
								<Link href={`/post/${p.slug}`} className='anchor latest-post'>
									{p.title}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* TODO: configure ShareSocial package */}
				{/* <ShareSocial
					url={location}
					socialTypes={['facebook', 'twitter']}
					style={{ height: '100px', overflow: 'hidden', background: 'none' }}
				/> */}
				<div className='group comments'>
					<div className='total-comments' style={{ display: 'flex' }}>
						<h4 className='header-four'>Comments</h4>
						<h5 className='header-five' style={{ marginLeft: '15px' }}>
							({comments.length})
						</h5>
					</div>

					<CommentForm
						comment={comment}
						setComment={setComment}
						submitText={'Post Comment'}
						handleSubmit={handleSubmit}
					/>
					{!!successMsg && (
						<div
							className='success'
							style={{ backgroundColor: 'green', color: 'white' }}
						>
							{successMsg}
						</div>
					)}
					{comments.map((c) => (
						<div key={c._id} className='comment'>
							<div style={{ border: '1px solid #e9ecef', marginTop: '15px' }} />
							<div
								className='user'
								style={{ display: 'flex', flexDirection: 'row' }}
							>
								<h3 className='avatar-initial' style={{ borderRadius: '50%' }}>
									{c?.postedBy?.name?.charAt(0)}
								</h3>

								<h5
									className='header-five'
									style={{
										display: 'flex',
										alignItems: 'center',
										marginLeft: '15px',
									}}
								>
									{c?.postedBy?.name}
								</h5>
							</div>

							{isEditing &&
							selectedComment._id === c._id &&
							c?.postedBy?._id === state?.user?._id ? (
								<div>
									<CommentForm
										handleSubmit={handleEdit}
										comment={content}
										setComment={setContent}
										loading={loading}
									/>
									<button
										className='button warning'
										onClick={() => setIsEditing(false)}
									>
										Cancel
									</button>
								</div>
							) : (
								<p className='paragraph'>{c.content}</p>
							)}

							<h6
								className='header-six'
								style={{
									display: 'flex',
									flexDirection: 'row',
									margin: '20px 0',
								}}
							>
								Created:
								<p className='paragraph'>{moment(c.createdAt).fromNow()}</p>
							</h6>

							{!isEditing && (
								<button
									className='button edit'
									onClick={() => {
										setSelectedComment(c);
										setIsEditing(true);
										setContent(c.content);
									}}
								>
									edit
								</button>
							)}

							{c?.postedBy?._id === state?.user?._id && (
								<button
									className='button delete'
									onClick={() => {
										handleDelete(c._id);
									}}
								>
									Delete
								</button>
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export async function getServerSideProps({ params }) {
	const { slug } = params;

	try {
		const { data } = await axios.get(`/post/${slug}`);

		return {
			props: {
				data,
				postComments: data.comments,
			},
		};
	} catch (error) {
		console.error('Error fetching post:', error);
		return {
			props: {
				data: {},
			},
		};
	}
}

SinglePost.defaultProps = {
	componentName: 'single-post',
};

export default SinglePost;
