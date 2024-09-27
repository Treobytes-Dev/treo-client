import { string, bool } from 'prop-types';
import { Loader } from '../assets/icons/Loader';

const Status = ({
	componentName = 'status',
	errorMsg,
	successMsg,
	loading,
}) => (
	<div className={componentName}>
		{!!errorMsg && <h6 className='header header-six error'>{errorMsg}</h6>}
		{!!successMsg && (
			<h6 className='header header-six success'>{successMsg}</h6>
		)}
		{!!loading && (
			<div className='loading'>
				<h6 className='header header-six'>Loading...</h6>
				<Loader />
			</div>
		)}
	</div>
);

Status.propTypes = {
	errorMsg: string,
	successMsg: string,
	loading: bool,
};

export default Status;
