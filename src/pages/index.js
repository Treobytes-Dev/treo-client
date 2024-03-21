import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import Head from 'next/head';
import axios from 'axios';

// components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Status from '../components/Status';

import DiagramLevels from '../components/DiagramLevels';

import { TemplateIntro } from '../components/TemplateIntro';
import { TemplateSecondary } from '../components/TemplateSecondary';
import { TemplateThird } from '../components/TemplateThird';
import { TemplateFourth } from '../components/TemplateFourth';

// icons
import { Loader } from '../assets/icons/Loader';
import Robot from '../assets/icons/Robot';
import PartnerCollab from '../assets/icons/PartnerCollab';

// mocking hero
export const mockHeroImage =
	'http://treobytes.org/wp-content/uploads/2019/09/Girl-STEAM.jpg';

export const mockHeroHeader2 = '6th - 8th Grade';
export const mockHeroHeader4 = 'Vocational STEM Education';

export const mockIntroHeader = 'Career Aspirations Being in Middle School';
export const mockIntroParagraph = '';

// mocking images
export const mockSingleImage =
	'https://i0.wp.com/treobytes.org/wp-content/uploads/2020/03/AdobeStock_267992921-scaled.jpeg?resize=360%2C240&ssl=1';

export const mockEngineeringKitPhoto =
	'https://i0.wp.com/treobytes.org/wp-content/uploads/2021/07/AdobeStock_236050835-scaled.jpeg?fit=750%2C500&ssl=1';

export const mockThumbnails = [
	'https://i0.wp.com/treobytes.org/wp-content/uploads/2019/10/AdobeStock_269246946.jpeg?resize=360%2C240&ssl=1',

	'https://i0.wp.com/treobytes.org/wp-content/uploads/2019/09/shutterstock_391124713.jpg?resize=360%2C240&ssl=1',

	'https://i0.wp.com/treobytes.org/wp-content/uploads/2019/09/shutterstock_660256189.jpg?resize=360%2C240&ssl=1',
];

// mocking module
export const mockRowOne = [
	{
		number: '01',
		text: '	Proactively engineer real-time bandwidth for bricks-and-clicks quality vector Assertively evisculate interdependent leadership skills through clicks-and-mortar.',
		classModifier: 'one',
	},
	{
		number: '02',
		text: 'Monotonectally synergize professional value before equity invested						e-tailers. Seamlessly supply performance based portals with quality.',
		classModifier: 'two',
	},
	{
		number: '03',
		text: 'Dynamically brand synergistic total linkage and tactical sources.      Synergistically negotiate value-added mindshare without fully tested.',
		classModifier: 'three',
	},
	{
		number: '04',
		text: 'Synergistically reconceptualize diverse sources rather than open-source quality vectors. Progressively brand parallel customer service without.',
		classModifier: 'four',
	},
];

export const mockRowTwo = [
	{
		number: '01',
		text: 'Basic "RoBo" Motion',
		classModifier: 'one',
	},
	{
		number: '02',
		text: 'Technical Programming',
		classModifier: 'two',
	},
	{
		number: '03',
		text: 'Prototyping',
		classModifier: 'three',
	},
	{
		number: '04',
		text: 'Project Completion Knowledge Assessment',
		classModifier: 'four',
	},
];

const Home = ({ componentName }) => {
	const [state] = useContext(AppContext);

	// comments
	const [errorMsg, setErrorMsg] = useState('');
	const [successMsg, setSuccessMsg] = useState('');

	if (errorMsg) setTimeout(() => setErrorMsg(''), 3000);
	if (successMsg) setTimeout(() => setSuccessMsg(''), 3000);

	// scroll to logic
	const scrollToTarget = () => {
		const targetElement = document.getElementById('scroll-to-el');
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

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
			<div className={`page ${componentName}`}>
				{!!errorMsg ||
					(!!successMsg && (
						<Status errorMsg={errorMsg} successMsg={successMsg} />
					))}

				<TemplateIntro
					heroImage={mockHeroImage}
					scrollToTarget={scrollToTarget}
				/>

				<div className='intro-head'>
					<div className='container'>
						<div className='icon'>
							<img
								className='img'
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710983480/atom_i2u0i2.png'
								alt='atom'
							/>
						</div>
						<h2 className='header header-two'>{`Career Aspirations Being in Middle School`}</h2>
					</div>
				</div>

				<div className='intro-body'>
					<div className='container'>
						{/* scrollTo */}
						<div id='scroll-to-el' />

						<h5 className='header header-five'>
							In today’s technology-driven world, more than half of all students
							will be expected to use STEM as part of their future careers.
							Providing them with both exposure and career training is a must.
							The earlier that training begins, the more likely that students
							will understand and consider STEM careers and be empowered with
							the skillsets to succeed professionally – wherever their adult
							lives take them.
						</h5>
					</div>
				</div>

				<div className='vocational-pathways'>
					<div className='container'>
						<h5 className='header header-five'>
							Treobytes provides students
							<span className='callout'>Vocational Pathways</span> to STEM
							Career
						</h5>
					</div>
				</div>

				<div className='california-students'>
					<div className='container'>
						<div className='icon'>
							<img
								className='img'
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710983500/Screenshot_2024-03-20_at_6.10.00_PM_ijexum.png'
								alt='child girl'
							/>
						</div>

						<div className='icon'>
							<img
								className='img'
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710983503/Screenshot_2024-03-20_at_6.10.09_PM_njf39s.png'
								alt='girl with skateboard'
							/>
						</div>

						<div className='icon'>
							<img
								className='img'
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710983506/Screenshot_2024-03-20_at_6.10.22_PM_fwby2a.png'
								alt='boy on scooter'
							/>
						</div>

						<div className='copy'>
							<div className='icon'>
								<img
									className='img'
									src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710983485/graduate-cap_qyshb6.png'
									alt='graduate cap'
								/>
							</div>
							<h6 className='header header-six'>
								Too many California Students
							</h6>
							<p className='paragraph'>
								Do not meet the A-G requirements to get into UC Colleges!
							</p>

							<h5 className='header header-five'>56% of all CA students</h5>
							<h5 className='header header-five'>64% of Hispanic students</h5>
							<h5 className='header header-five'>
								68% of African American students
							</h5>
						</div>
					</div>
				</div>

				<div className='btm-content'>
					<div className='container'>
						<div className='column col-1'>
							<div className='technical-skill-development'>
								<div className='heading'>
									<div className='icon'>
										<img
											className='img'
											src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710983510/Screenshot_2024-03-20_at_6.10.43_PM_xdvgqg.png'
											alt='pencil and paper'
										/>
									</div>
									<h5 className='header header-five'>
										Technical Skill Development
									</h5>
								</div>
								<p className='paragraph'>
									In Treobytes’ 6th - 8th grade Vocational STEM Program,
									students are inspired to fully engage in various pathways in
									the most in demand disciplines: Electrical Engineering,
									Mechanical Engineering, Structural Engineering, Computer
									Science and more.
								</p>
							</div>
							<div className='our-solution'>
								<div className='heading'>
									<div className='icon'>
										<img
											className='img'
											src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710983483/gears_zpdraz.png'
											alt='gear'
										/>
									</div>
									<h5 className='header header-five'>
										Technical Skill Development
									</h5>
								</div>

								<p className='paragraph'>
									Our hands on vocational programs mirror current college
									curriculum distributed in a micro learning format. These brief
									learning modules comprising bite-sized learning activities
									teach students how to design and conduct experiments, to
									identify and solve problems, to understand professional and
									ethical responsibility, and to communicate effectively.
								</p>
							</div>
						</div>
						<div className='column col-2'>
							<div
								className='img'
								style={{
									backgroundImage:
										'url(' +
										'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710797096/circuits-plugged-in-single-image_iyysco.jpg' +
										')',
								}}
							/>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
};

Home.defaultProps = {
	componentName: 'home',
};

export default Home;
