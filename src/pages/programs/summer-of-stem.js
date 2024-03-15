import Head from 'next/head';

// components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import ProgramDates from '../../components/ProgramDates';

import { TemplateIntro } from '../../components/TemplateIntro';
import Link from 'next/link';

const SummerOfSTEM = ({ componentName }) => {
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
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1709693053/leadership-hero_tgmuu8.jpg';

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<TemplateIntro
					heroImage={hero}
					heroHeader='Students'
					introHeader='SUMMER OF STEM CAMP'
				/>
				<div className='container'>
					<a
						href='https://www.hisawyer.com/treobytes/schedules?sched_ids%5B%5D=191129&schedule_id=camps'
						target='_blank'
						rel='noreferrer noopener'
						className='wrapper-btn'
					>
						<Button children='JOIN TODAY!' additionalClass='red' />
					</a>
				</div>
				<ProgramDates />
				<Footer />
			</div>
		</>
	);
};

SummerOfSTEM.defaultProps = {
	componentName: 'summer-of-stem',
};

export default SummerOfSTEM;
