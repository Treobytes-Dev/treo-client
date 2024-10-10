import Head from 'next/head';

// components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import { TemplateIntro } from '../../components/TemplateIntro';

// icons
import { RobotFace } from '../../assets/icons/RobotFace';
import { ComputerScreen } from '../../assets/icons/ComputerScreen';
import { PhoneAndWatch } from '../../assets/icons/PhoneAndWatch';
import { RunningPerson } from '../../assets/icons/RunningPerson';
import { ChevronButton } from '../../assets/icons/ChevronButton';

const OurStory = ({ componentName = 'our-story' }) => {
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

	// scroll to logic
	const scrollToTarget = () => {
		const targetElement = document.getElementById('scroll-to-el');
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<TemplateIntro
					heroImage={hero}
					introHeader={`About Us`.toUpperCase()}
					scrollToTarget={scrollToTarget}
				/>

				{/* scrollTo */}
				<div id='scroll-to-el' />

				<div className='the-problem'>
					<div className='container'>
						<h3 className='header header-three section-heading'>The Problem</h3>
						<p className='paragraph'>
							Students are falling behind in STEM competencies. Our STEM
							workforce does not represented by many of our communities’
							populations. What ideas and which solutions are not being
							developed by this missing talent?
						</p>
					</div>
				</div>

				<div className='intro-columns'>
					<div className='container'>
						<div className='column column-1'>
							<div className='wrapper-icon'>
								<img
									className='icon'
									src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710812446/who-we-are_rrzxxq.png'
									alt='who we are icon'
								/>
							</div>
							<div className='copy'>
								<h3 className='header header-three'>
									{`who we are:`.toUpperCase()}
								</h3>
								<p className='paragraph'>
									Treobytes is 501(c)(3) non-profit focused on building the next
									generation of the STEM workforce. Established in 2014, our
									mission is to change the socio and economic trajectory for
									students by providing vocational STEM education. Treobytes
									strives towards developing a diverse workforce who is prepared
									to meet industry demands in STEM disciplines.
								</p>
							</div>
						</div>
						<div className='column column-2'>
							<div className='wrapper-icon'>
								<img
									className='icon'
									src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710812440/what-we-do_qkakxg.png'
									alt='who we are icon'
								/>
							</div>

							<div className='copy'>
								<h3 className='header header-three'>
									{`what we do:`.toUpperCase()}
								</h3>
								<p className='paragraph'>
									We achieve this by providing hands-on classes with a
									culminating ending project. Treobytes collaborates with our
									“TREO” of partners: students, educational systems and industry
									partners. We are looking for any support, no matter how small!
									Donations would be used to update technologies, equipment, and
									STEM topics offered to students.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='icons-container'>
					<div className='container'>
						<div className='icon-wrapper red'>
							<RobotFace dimensions={100} fill={'#fff'} />
						</div>

						<div className='icon-wrapper orange'>
							<ComputerScreen dimensions={100} fill={'#fff'} />
						</div>

						<div className='icon-wrapper red'>
							<ChevronButton dimensions={100} fill={'#fff'} />
						</div>

						<div className='icon-wrapper orange'>
							<PhoneAndWatch dimensions={100} fill={'#fff'} />
						</div>

						<div className='icon-wrapper red'>
							<RunningPerson dimensions={100} fill={'#fff'} />
						</div>

						<div className='bg-line' />
					</div>
				</div>

				<div className='mission-and-vision'>
					<div className='container'>
						<div className='column column-1'>
							<div
								className='image'
								style={{
									backgroundImage: 'url(' + mission + ')',
								}}
							/>
							<h3 className='header header-three'>{`mission`.toUpperCase()}</h3>
							<p className='paragraph'>
								Our mission, through our hands-on curriculum and industry
								experience, is to provide engaging and relevant STEM knowledge
								empowering students to build awareness and exposure to career
								paths, and that develop self-efficacy towards educational and
								career goals.
							</p>
						</div>
						<div className='column column-2'>
							<div
								className='image'
								style={{
									backgroundImage: 'url(' + vision + ')',
								}}
							/>
							<h3 className='header header-three'>{`vision`.toUpperCase()}</h3>
							<p className='paragraph'>
								To empower our youth to master the skills needed to obtain jobs
								for today’s and tomorrow’s economy to ensure that pathways to
								well-paying jobs are accessible.
							</p>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
};

export default OurStory;
