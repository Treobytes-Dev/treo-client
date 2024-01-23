import { string, bool } from 'prop-types';
import { Loader } from '../assets/icons/Loader';

const Status = ({ componentName, errorMsg, successMsg, loading }) => (
	<div className={componentName}>
		{!!errorMsg && <h6 className='header-six error'>{errorMsg}</h6>}
		{!!successMsg && <h6 className='header-six success'>{successMsg}</h6>}
		{!!loading && (
			<div className='loading'>
				<h6 className='header-six'>Loading...</h6>
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

Status.defaultProps = {
	componentName: 'status',
};

export default Status;
