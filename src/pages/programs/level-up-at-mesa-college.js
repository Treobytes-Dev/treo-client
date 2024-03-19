import Head from 'next/head';

// components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import { TemplateIntro } from '../../components/TemplateIntro';

const LevelUpAtMesaCollege = ({ componentName }) => {
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
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710795241/hero-level-up-mesa-college_qtmvm0.jpg';

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<TemplateIntro
					heroImage={hero}
					introHeader={`Treobytes Summer Level Up Camp At Mesa College`.toUpperCase()}
				/>

				<div className='intro-sign-up'>
					<div className='container'>
						<a
							href='https://www.inplay.org/providers/treobytes'
							target='_blank'
							rel='noreferrer noopener'
							className='wrapper-btn'
						>
							<Button children='SIGN UP ON INPLAY' additionalClass='red' />
						</a>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

LevelUpAtMesaCollege.defaultProps = {
	componentName: 'level-up-at-mesa-college',
};

export default LevelUpAtMesaCollege;
