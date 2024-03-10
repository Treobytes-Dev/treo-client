import Head from 'next/head';

// components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import { TemplateIntro } from '../../components/TemplateIntro';

const Donate = ({ componentName }) => {
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

	const hero =
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710009545/hero-donate_o9mqil.jpg';

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<TemplateIntro
					heroImage={hero}
					heroHeader='Students'
					introHeader='Donate'
				/>

				<div className='pillars'>
					<div className='pillar pillar-1'>
						<div className='badge'>
							<img
								className='img'
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710009960/donate-hand-shake_hrxs24.png'
								alt='Support Treobytes'
							/>
						</div>

						<h3 className='header header-three copy'>SUPPORT TREOBYTES</h3>
					</div>
					<div className='pillar pillar-2'>
						<div className='badge'>
							<img
								className='img'
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710010060/donate-graduate_awuegl.png'
								alt='Support Treobytes'
							/>
						</div>
						<h3 className='header header-three copy'>
							HELP US REACH MORE STUDENTS
						</h3>
					</div>
					<div className='pillar pillar-3'>
						<div className='badge'>
							<img
								className='img'
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710010060/donate-teaching_v6x7yl.png'
								alt='Support Treobytes'
							/>
						</div>
						<h3 className='header header-three copy'>
							IMPROVE OUR STEM PROGRAMS
						</h3>
					</div>
				</div>

				<div className='container'>
					<h2 className='header header-two'>
						LET’S BUILD THE NEXT GENERATION OF STEM LEADERS TOGETHER!
					</h2>
				</div>
				<Footer />
			</div>
		</>
	);
};

Donate.defaultProps = {
	componentName: 'donate',
};

export default Donate;
