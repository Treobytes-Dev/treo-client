import { useContext } from 'react';
import { AppContext } from '../context';
import Link from 'next/link';

// components
import Navigation from '../components/Navigation';
import { Alert } from '../assets/icons/Alert';

function Error({ statusCode, componentName }) {
	const [state] = useContext(AppContext);
	console.error('statusCode', statusCode);

	return (
		<>
			<Navigation />
			<div className={`${componentName}`}>
				<div className='container'>
					<div className='wrapper-icon'>
						<Alert dimensions={100} />
					</div>
					<div className='group'>
						<h2 className='header header-two '>Oops, there was an error.</h2>
						<Link className='anchor' href={state ? '/admin/dashboard' : '/'}>
							Click here to return to the {state ? 'dashboard' : 'landing page'}
							.
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

Error.defaultProps = {
	componentName: 'error',
};

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
