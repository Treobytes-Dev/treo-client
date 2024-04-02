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
				{/* favicon */}
				<link rel='icon' href='/favicon.ico' sizes='16x16' />
				<link
					rel='icon'
					href='/favicon-32x32.png'
					type='image/png'
					sizes='32x32'
				/>
				<link
					rel='apple-touch-icon'
					href='/apple-touch-icon.png'
					sizes='180x180'
				/>
				<link rel='manifest' href='/site.webmanifest' />
			</Head>
			<div className='content'>
				<Component {...pageProps} />
			</div>
		</AppProvider>
	);
};

export default Base;
