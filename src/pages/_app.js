import { AppProvider } from '../context';
import '../App.scss';
import Head from 'next/head';

const Base = ({ Component, pageProps }) => {
	return (
		<AppProvider>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#000000' />
			</Head>
			<div className='content'>
				<Component {...pageProps} />
			</div>
		</AppProvider>
	);
};

export default Base;
