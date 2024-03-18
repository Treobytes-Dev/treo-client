import Head from 'next/head';

// components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

import SummerOfSTEM from '../../components/SummerOfSTEM';

import { TemplateIntro } from '../../components/TemplateIntro';

const SummerCamps = ({ componentName }) => {
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

	const listItemsSummerCamps = [
		{ copy: 'World class STEM instruction' },
		{ copy: 'Access to industry-level tools and equipment' },
		{ copy: 'Solving complex problems' },
		{
			copy: 'Developing soft skills: work in groups, communication, conflict resolution',
		},
		{ copy: 'Vocational pathways' },
		{ copy: 'Develop intellectual curiosity' },
		{ copy: 'Replicate industry roles' },
		{ copy: 'Experiential Learning' },
		{ copy: 'Having fun and building last friendships' },
	];

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<TemplateIntro
					heroImage={hero}
					heroHeader='Programs'
					introHeader='SUMMER OF STEM CAMP'
				/>
				<div className='intro-join-today'>
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
				</div>

				<SummerOfSTEM listItemsSummerCamps={listItemsSummerCamps} />

				<div className='title-section'>
					<div className='container'>
						<h3 className='header header-three'>
							{`Tracks 2024`.toUpperCase()}
						</h3>
						<h6 className='header header-six'>
							Note:
							<span className='callout'>
								Each track's curriculum will repeat each week
							</span>
						</h6>
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
};

SummerCamps.defaultProps = {
	componentName: 'summer-camps',
};

export default SummerCamps;
