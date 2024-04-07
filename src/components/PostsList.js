import { array, func } from 'prop-types';
import { randomId } from '../functions/randomId';
import Link from 'next/link';

const PostsList = ({ componentName, posts, handlePrompt, handleEdit }) => {
	return (
		<>
			{posts?.length ? (
				posts.map((post) => (
					<div key={post._id} className={componentName}>
						<h4 className='header header-four post-title'>{post.title}</h4>
						<div className='options'>
							<Link
								style={{ display: 'inline-flex', alignItems: 'center' }}
								className='view anchor'
								href={`/post/${post.slug}`}
							>
								View post
							</Link>

							<button className='button edit' onClick={() => handleEdit(post)}>
								edit
							</button>
							{/* <button onClick={() => handleDelete(post)}>delete</button> */}
							<button
								className='button delete'
								onClick={() => handlePrompt(post)}
							>
								delete
							</button>
						</div>
					</div>
				))
			) : (
				<h4 className='header header-four'>No posts</h4>
			)}
		</>
	);
};

PostsList.propTypes = {
	posts: array.isRequired,
	handlePrompt: func.isRequired,
	handleEdit: func.isRequired,
};

PostsList.defaultProps = {
	componentName: 'posts-list',
};

export default PostsList;
