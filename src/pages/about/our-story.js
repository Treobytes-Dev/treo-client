import Head from 'next/head';

// components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import { TemplateIntro } from '../../components/TemplateIntro';

// icons
import { RobotFace } from '../../assets/icons/RobotFace';
import { ComputerScreen } from '../../assets/icons/ComputerScreen';
import { ChevronButton } from '../../assets/icons/ChevronButton';
import { PhoneAndWatch } from '../../assets/icons/PhoneAndWatch';
import { RunningPerson } from '../../assets/icons/RunningPerson';

const OurStory = ({ componentName }) => {
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
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1709692261/about-us-hero_cwfjau.jpg';

	const mission =
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1709692261/about-us-mission_dhw9a1.jpg';

	const vision =
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1709692261/about-us-vision_oua5bj.jpg';

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<TemplateIntro
					heroImage={hero}
					introHeader={`About Us`.toUpperCase()}
				/>

				<div className='container'>
					<div className='intro-columns'>
						<div className='column column-1'>
							Treobytes is 501(c)(3) non-profit focused on building the next
							generation of the STEM workforce. Established in 2014, our mission
							is to change the socio and economic trajectory for students by
							providing vocational STEM education. Treobytes strives towards
							developing a diverse workforce who is prepared to meet industry
							demands in STEM disciplines.
						</div>
						<div className='column column-2'>
							We achieve this by providing hands-on classes with a culminating
							ending project. Treobytes collaborates with our “TREO” of
							partners: students, educational systems and industry partners. We
							are looking for any support, no matter how small! Donations would
							be used to update technologies, equipment, and STEM topics offered
							to students.
						</div>
					</div>
				</div>

				<div className='container'>
					<div className='wrapper-icon'>
						<RobotFace dimensions={150} fill={'rgb(173, 33, 70)'} />
					</div>
				</div>

				<div className='the-problem'>
					<div className='container'>
						<h2 className='header header-two'>The Problem</h2>
						<h3 className='header header-three'>
							Students are falling behind in STEM competencies. Our STEM
							workforce does not represented by many of our communities’
							populations. What ideas and which solutions are not being
							developed by this missing talent?
						</h3>
						<ComputerScreen dimensions={150} fill={'#fff'} />
					</div>
				</div>

				<div className='row top'>
					<div className='column column-1 copy'>
						<ChevronButton dimensions={150} />

						<h3 className='header header-three'>
							Our mission, through our hands-on curriculum and industry
							experience, is to provide engaging and relevant STEM knowledge
							empowering students to build awareness and exposure to career
							paths, and that develop self-efficacy towards educational and
							career goals.
						</h3>
					</div>
					<div className='column column-2 round'>
						<img className='img  mission' src={mission} alt='mission' />
					</div>
				</div>

				<div className='row btm'>
					<div className='column column-1 round'>
						<img className='img mission' src={vision} alt='vision' />
					</div>
					<div className='column column-2 copy'>
						<RunningPerson dimensions={150} fill={'#fff'} />
						<h3 className='header header-three'>
							To empower our youth to master the skills needed to obtain jobs
							for today’s and tomorrow’s economy to ensure that pathways to
							well-paying jobs are accessible.
						</h3>
					</div>
				</div>

				<div className='container'>
					<div className='wrapper-icon'>
						<PhoneAndWatch dimensions={150} fill={'rgb(173, 33, 70)'} />
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
};

OurStory.defaultProps = {
	componentName: 'our-story',
};

export default OurStory;
