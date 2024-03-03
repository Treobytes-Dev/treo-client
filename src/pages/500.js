import { useContext } from 'react';
import { AppContext } from '../context';
import Link from 'next/link';

// components
import Navigation from '../components/Navigation';
import { Alert } from '../assets/icons/Alert';

const Custom500 = ({ componentName }) => {
	const [state] = useContext(AppContext);

	return (
		<>
			<Navigation />
			<div className={`${componentName}`}>
				<div className='container'>
					<div className='wrapper-icon'>
						<Alert dimensions={100} />
					</div>
					<div className='group'>
						<h2 className='header header-two'>Oops, there was an error.</h2>
						<Link className='anchor' href={state ? '/admin/dashboard' : '/'}>
							Click here to return to the {state ? 'dashboard' : 'landing page'}
							.
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

Custom500.defaultProps = {
	componentName: 'error-500',
};

export default Custom500;
