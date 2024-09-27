import Head from 'next/head';
import Link from 'next/link';

// components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { CopyBlock } from '../components/CopyBlock';
import { FAQs } from '../assets/icons/FAQs';

import { TemplateIntro } from '../components/TemplateIntro';
const HelpCenter = ({ componentName = 'help-center' }) => {
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

	const listItems = [
		{
			id: 1,
			text: '- an optimal balance of learning theory and working on projects applying this knowledge',
		},
		{ id: 2, text: '- classroom learning, breaks, and fun activities' },
		{
			id: 3,
			text: '- a safe and healthy learning environment for all students',
		},
		{
			id: 4,
			text: '- college campus experience',
		},
		{
			id: 5,
			text: '- vocational pathways in STEM',
		},
	];

	const hero =
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1709692263/help-center-hero_wapvlc.jpg';

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
					introHeader={`help center`.toUpperCase()}
					scrollToTarget={scrollToTarget}
				/>

				{/* scrollTo */}
				<div id='scroll-to-el' />

				<div className='questions'>
					<div className='container'>
						<div className='heading'>
							<h2 className='header header-two'>FAQs</h2>
							<FAQs dimensions={50} />
						</div>
						<CopyBlock
							header='Why should my student join a Treobytes program?'
							copyPrimary='We take pride in always improving our programs and developing new offerings to students that keep up with industry standards. Technology is always getting better, and we are too! Our staff are STEM college students with a passion for preparing the next generation for the challenges they will likely face.'
						/>
						<CopyBlock
							header='What can me and my student expect from a Treobytes experience?'
							copyPrimary='Our programs provide:'
							listItem={listItems.map((item) => (
								<li className='list-item' key={item.id}>
									{item.text}
								</li>
							))}
						/>
						<CopyBlock
							header='Who can speak with if I have a question about a Treobytes program?'
							copyPrimary={`Reach out to us at info@treobytes.com or 619.333.8589`}
						/>
						<CopyBlock
							header='What are the student to facilitator ratios?'
							copyPrimary='The most dense ratio would be 12 students for each facilitator. Often our programs are close to 6 students per facilitator.'
						/>
						<CopyBlock
							header='What is provided to the students?'
							copyPrimary='Snacks and all materials for the course will be provided. For day camps, lunch will also be provided.'
						/>
						<CopyBlock
							header='What is Treobytes looking to achieve?'
							copyPrimary='We strive to ensure that as many students as possible are introduced to the world of STEM. An unfortunate reality is that students who would excel in the STEM workforce do not choose it because they were never introduced to the field or never considered it open to them. We want to provides students an informed choice when deciding what to purse after high school, which includes a possible STEM career.'
						/>
						<CopyBlock
							header='How can my student join a Treobytes Program?'
							copyPrimary={`To join our programs, you can sign up for our mailing list. By subscribing, you'll stay updated on upcoming programs, events, and important announcements. Click the button below to join our mailing list and you'll receive the latest information!
            `}
						/>
						<p className='paragraph'>
							You can find out more information and join our programs by
							clicking on the buttons below!
						</p>
					</div>
				</div>

				<div className='button-container'>
					<div className='container'>
						<div className='column column-1'>
							<Link className='button-anchor' href='/programs/scholars-program'>
								<Button
									children={`scholars program`.toUpperCase()}
									additionalClass='secondary'
								/>
							</Link>

							<Link className='button-anchor' href='/programs/summer-of-stem'>
								<Button
									children={`summer of stem camp`.toUpperCase()}
									additionalClass='pale'
								/>
							</Link>
						</div>

						<div className='column column-2'>
							<Link className='button-anchor' href='/programs/level-up-camps'>
								<Button
									children={`level up camps`.toUpperCase()}
									additionalClass='orange'
								/>
							</Link>

							<Link
								className='button-anchor'
								href='/programs/north-county-and-expansion'
							>
								<Button
									children={`North county and expansion`.toUpperCase()}
									additionalClass='off-orange'
								/>
							</Link>
						</div>
					</div>
				</div>

				<div className='wrapper-join-mailing-list'>
					<div className='container'>
						<Button
							children={`join our mailing list`.toUpperCase()}
							additionalClass='secondary join-mailing-list'
						/>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default HelpCenter;
