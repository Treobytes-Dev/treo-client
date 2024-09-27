import { useContext } from 'react';
import { AppContext } from '../context';
import Link from 'next/link';
import Head from 'next/head';

// components
import Navigation from '../components/Navigation';
import { Alert } from '../assets/icons/Alert';

function Error({ statusCode, componentName = 'error' }) {
	const [state] = useContext(AppContext);
	console.error('statusCode', statusCode);

	const head = () => (
		<Head>
			<title>{`Treobytes | ${componentName}`}</title>
			<meta name='description' content={`Treobytes ${componentName} page`} />
			<meta name='og:description' content={`Treobytes ${componentName} page`} />
			<meta property='og:type' content='website' />
			{/* update site name below based on project */}
			<meta property='og:site_name' content='Social' />
			{/* update url below based on project */}
			<meta property='og:url' content='' />
			{/* update image below based on project
			 * image appears when shown on other social networks
			 * must provide full path to image
			 */}
			<meta property='og:image:secure_url' content='' />
		</Head>
	);

	return (
		<>
			{head()}
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

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
