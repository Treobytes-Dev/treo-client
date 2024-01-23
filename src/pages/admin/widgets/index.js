// page to view all Widgets
import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../../context';

import AdminLayout from '../../../components/AdminLayout';
import Status from '../../../components/Status';

// axios
import axios from 'axios';

const Widgets = ({ componentName }) => {
	// global state
	const [state] = useContext(AppContext);

	// local state
	const [loading, setLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');
	const [successMsg, setSuccessMsg] = useState('');

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
					<h1 className='header-one'>Widgets</h1>
					<div className='content'>Content</div>
				</div>
			}
		/>
	);
};

Widgets.defaultProps = {
	componentName: 'widgets',
};

export default Widgets;
