// page to view all comments
import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../../context';

import AdminLayout from '../../../components/AdminLayout';
// axios
import axios from 'axios';
// next imports
import Link from 'next/link';
// moment
import moment from 'moment';
// components
import CommentForm from '../../../components/CommentForm';

const Comments = ({ componentName }) => {
	// global state
	const [state] = useContext(AppContext);

	// local state
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [comments, setComments] = useState([]);
	const [keyword, setKeyword] = useState('');
	const [loading, setLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');
	const [successMsg, setSuccessMsg] = useState('');
	// editing
	const [selectedComment, setSelectedComment] = useState({});
	const [content, setContent] = useState('');
	const [isEditing, setIsEditing] = useState(false);

	useEffect(() => {
		if (state?.token) {
			fetchComments();
			getTotal();
		}
	}, [state?.token]);

	useEffect(() => {
		if (page === 1) return;
		if (state?.token) fetchComments();
	}, [page]);

	const fetchComments = async () => {
		try {
			const { data } = await axios.get(`/comments/${page}`);

			setComments([...comments, ...data]);
		} catch (err) {
			console.error(`Error getting comments: ${err}`);
			setErrorMsg('Error getting comments');
		}
	};

	const getTotal = async () => {
		try {
			const { data } = await axios.get('/comment-count');
			setTotal(data);
		} catch (err) {
			console.error(`Error getting comment count: ${err}`);
			setErrorMsg('Error getting comment count');
		}
	};

	const handleDelete = async (comment) => {
		// TODO: add prompt component
		setLoading(true);
		try {
			const answer = window.confirm('Are you sure you want to delete?');
			if (!answer) return;

			const { data } = await axios.delete(`/comment/${comment._id}`);
			if (data?.ok) {
				setComments(comments.filter((c) => c._id !== comment._id));
				setTotal(total - 1);
				setSuccessMsg('Comment deleted successfully');
			}
			setLoading(false);
		} catch (err) {
			console.error(`Error deleting comment: ${err}`);
			setErrorMsg('Error deleting comment');
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
			successMsg('Comment updated');
		} catch (err) {
			console.error(`Error editing comment: ${err}`);
			setErrorMsg('Error editing comment.');
			setIsEditing(false);
		}
	};

	const handleSearchComments = (e) => setKeyword(e.target.value.toLowerCase());

	const filteredComments = comments?.filter((comment) =>
		comment.content.toLowerCase().includes(keyword)
	);

	if (errorMsg) setTimeout(() => setErrorMsg(''), 3000);
	if (successMsg) setTimeout(() => setSuccessMsg(''), 3000);

	return (
		<AdminLayout
			children={
				<div className={`${componentName} main`}>
					{!!errorMsg ||
						(!!successMsg && (
							<Status errorMsg={errorMsg} successMsg={successMsg} />
						))}

					<div className='wrapper'>
						<div
							className='title total-amount'
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<div className='heading'>
								<h1 className='header-one'>Comments</h1>
								<h3 className='header-three'>({comments?.length})</h3>
							</div>
						</div>

						<input
							className='input-text search-comments'
							placeholder='Search'
							type='search'
							value={keyword}
							onChange={handleSearchComments}
						/>

						<div className='wrapper-comments'>
							{filteredComments?.length > 0 &&
								filteredComments.map((comment, i) => (
									<div className='filtered-comments' key={i}>
										<h3 className='header-three'>{comment?.postId?.title}</h3>
										<div className='wrapper'>
											<div className='text'>
												<label className='label'>Posted by:</label>
												<p className='paragraph'>{comment?.postedBy?.name}</p>
											</div>

											<div className='text'>
												<label className='label'>Created:</label>
												<p className='paragraph'>
													{moment(comment.createdAt).fromNow()}
												</p>
											</div>
										</div>

										{isEditing && selectedComment._id === comment._id ? (
											<>
												<CommentForm
													handleSubmit={handleEdit}
													comment={content}
													setComment={setContent}
													submitText={'Update'}
													loading={loading}
												/>
												<button
													className='button warning'
													onClick={() => setIsEditing(false)}
												>
													cancel
												</button>
											</>
										) : (
											<p className='content'>
												{comment.content.slice(0, 150) +
													(comment.content.length > 150 ? '...' : '')}
											</p>
										)}

										<div className='group btns'>
											<Link
												className='anchor'
												href={`/post/${comment?.postId?.slug}#${comment._id}`}
											>
												View
											</Link>
											{!isEditing && (
												<button
													className='button edit'
													onClick={() => {
														setSelectedComment(comment);
														setIsEditing(true);
														setContent(comment.content);
													}}
												>
													edit
												</button>
											)}

											<button
												className='button delete'
												onClick={() => handleDelete(comment)}
											>
												delete
											</button>
										</div>

										<div
											style={{
												borderBottom: '1px solid #e9ecef',
												marginBottom: '15px',
												paddingTop: '15px',
											}}
										/>
									</div>
								))}
						</div>

						{page * 6 < total && (
							<button
								className='button edit load-more'
								onClick={() => setPage(page + 1)}
							>
								{loading ? 'Loading...' : 'Load more'}
							</button>
						)}
					</div>
				</div>
			}
		/>
	);
};

Comments.defaultProps = {
	componentName: 'comments',
};

export default Comments;
