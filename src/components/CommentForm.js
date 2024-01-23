import { useContext } from 'react';
import { AppContext } from '../context';
import { func, bool, string } from 'prop-types';

const CommentForm = ({
	componentName,
	comment,
	setComment,
	handleSubmit,
	submitText,
	loading,
}) => {
	// context
	const [state] = useContext(AppContext);

	return (
		<>
			{state?.user !== null && state?.token !== '' && (
				<div className={componentName}>
					<textarea
						className='text-area'
						value={comment}
						onChange={(e) => setComment(e.target.value)}
						placeholder='Write a comment...'
					/>
					<button
						className='button submit'
						onClick={handleSubmit}
						disabled={comment === ''}
					>
						{loading ? 'Loading...' : submitText}
					</button>
				</div>
			)}
		</>
	);
};

CommentForm.propTypes = {
	comment: string,
	setComment: func,
	handleSubmit: func,
	submitText: string,
	loading: bool,
};

CommentForm.defaultProps = {
	componentName: 'comment-form',
	submitText: 'Submit',
};

export default CommentForm;
