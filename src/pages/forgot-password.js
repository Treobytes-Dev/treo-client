// next imports
import Head from 'next/head';
import Link from 'next/link';
// components
import Navigation from '../components/Navigation';

// todo: create forgot password page
const ForgotPassword = ({ componentName }) => {
	return (
		<>
			<Head>
				<title>Forgot Password</title>
				<meta
					name='description'
					content='Page to reset your password if you forgot it.'
				/>
			</Head>

			<Navigation />
			<div className={`${componentName} main container`}>
				<h1 className='header-one'>Forgot Password</h1>
			</div>
		</>
	);
};

ForgotPassword.defaultProps = {
	componentName: 'forgot-password',
};

export default ForgotPassword;
