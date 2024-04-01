import Head from 'next/head';

// components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import { TemplateIntro } from '../../components/TemplateIntro';
import Sponsors from '../../components/Sponsors';

const Card = ({ title, name, contact, source }) => (
	<div className='box'>
		<div
			className='avatar'
			style={{
				backgroundImage: 'url(' + source + ')',
			}}
		/>
		<h5 className='header header-five title'>{title.toUpperCase()}</h5>
		<h5 className='header header-five name'>{name}</h5>
		<h6 className='header header-six contact'>{contact}</h6>
	</div>
);

const LeadershipTree = () => (
	<div className='container leadership-tree'>
		<div className='tier tier-1'>
			<Card
				title='Founder & CEO'
				name='Ava Mason'
				contact='ava@treobytes.com'
				source='https://res.cloudinary.com/dtjvswb7v/image/upload/v1709692311/avatar-ava_qz1ado.jpg'
			/>

			<Card
				title='Director'
				name='Antoine Serrano'
				contact='antoines@treobytes.com'
				source='https://res.cloudinary.com/dtjvswb7v/image/upload/v1709692261/avatar-antoine-serrano_tvpevf.jpg'
			/>

			<Card
				title='Assistant Director'
				name='Lauren Wisniewski'
				contact='lauren@treobytes.com'
				source='https://res.cloudinary.com/dtjvswb7v/image/upload/v1709692261/avatar-lauren-wisniewski_dxg29g.jpg'
			/>
		</div>

		<div className='tier tier-2'>
			<div className='column column-1'>
				<h4 className='header header-four'>{`Marketing Team`.toUpperCase()}</h4>
				<div className='cards'>
					<Card
						title='Marketing Director'
						name='Jeremy Joseph'
						contact='jjoseph@treobytes.com'
						source='https://res.cloudinary.com/dtjvswb7v/image/upload/v1709692261/avatar-jeremy-joseph_a48dyt.jpg'
					/>
					<Card
						title='Digital Marketing Specialist'
						name='Sarai Gomez'
						contact='sarai@treobytes.com'
						source='https://res.cloudinary.com/dtjvswb7v/image/upload/v1709692261/avatar-sarai-gomez_jejdvh.jpg'
					/>
				</div>
			</div>

			<div className='column column-2'>
				<h4 className='header header-four'>
					{`Operations Team`.toUpperCase()}
				</h4>
				<div className='cards'>
					<Card
						title='Operations Administrator'
						name='Sophia Bjerk'
						contact='sophia@treobytes.com'
						source='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710973495/sophia-bjerk-thumbnail_bbsktn.jpg'
					/>
				</div>
			</div>
		</div>
	</div>
);

const OurTeam = ({ componentName }) => {
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

	const colleges = [
		{ id: 1, name: 'USD' },
		{ id: 2, name: 'SDSU' },
		{ id: 3, name: 'UCSD' },
		{ id: 4, name: 'UCSM' },
		{ id: 5, name: 'SDCCD' },
	];

	const sponsors = [
		{
			id: 1,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711844972/Screenshot_2024-03-30_at_5.29.14_PM_g6gsn7.png',
			alt: 'san diego state university',
		},
		{
			id: 2,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711225327/usd-logo-primary-2c_o8zduf.png',
			alt: 'university of san diego',
		},
		{
			id: 3,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711844492/uc-san-diego_okhkjh.png',
			alt: 'uc san diego',
		},
		{
			id: 4,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711226402/csusm-textlogo-sp_kwmdyq.png',
			alt: 'csusm',
		},
		{
			id: 5,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711226401/sdccd_color_vert_g0mi21.png',
			alt: 'san diego community college district',
		},

		{
			id: 6,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711844682/mt-san-jacinto-college_lmx2lw.png',
			alt: 'mt san jacinto college',
		},
	];

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
					introHeader='Our Team'
					introBody='Meet our team working to achieve equity in the STEM workforce!'
					scrollToTarget={scrollToTarget}
				/>

				{/* scrollTo */}
				<div id='scroll-to-el' />

				<LeadershipTree />

				<div className='facilitators'>
					<h2 className='header header-two'>Facilitators</h2>
					<Sponsors sponsors={sponsors} />
				</div>

				<div className='block'>
					<div className='container'>
						<div className='row'>
							<div className='column column-1'>
								<div
									className='image'
									style={{
										backgroundImage:
											'url(' +
											'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793150/dream-garage-single-image_ixhtnj.jpg' +
											')',
									}}
								/>
							</div>
							<div className='column column-2'>
								<h3 className='header header-three'>
									{`Diverse`.toUpperCase()}
								</h3>
								<h5 className='header header-five copy'>
									Recruiting a diverse population of STEM college students to
									facilitate courses for middle school students is paramount for
									creating an inclusive and enriching educational experience.
								</h5>
							</div>
						</div>

						<div className='row'>
							<div className='column column-1'>
								<div
									className='image'
									style={{
										backgroundImage:
											'url(' +
											'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711846337/group-photo_ce3hxn.jpg' +
											')',
									}}
								/>
							</div>
							<div className='column column-2'>
								<h3 className='header header-three'>
									{`strengths`.toUpperCase()}
								</h3>
								<h5 className='header header-five copy'>
									Diverse role models and instructors bring varied perspectives,
									backgrounds, and experiences, inspiring middle school students
									from different walks of life to pursue STEM fields.
								</h5>
							</div>
						</div>

						<div className='row'>
							<div className='column column-1'>
								<div
									className='image'
									style={{
										backgroundImage:
											'url(' +
											'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711846337/student-on-pc_dm7kom.jpg' +
											')',
									}}
								/>
							</div>
							<div className='column column-2'>
								<h3 className='header header-three'>
									{`outcomes`.toUpperCase()}
								</h3>
								<h5 className='header header-five copy'>
									Exposure to instructors with diverse identities and
									backgrounds not only enhances representation but also helps
									break down stereotypes, showcasing the breadth of
									possibilities within STEM.
								</h5>
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
};

OurTeam.defaultProps = {
	componentName: 'our-team',
};

export default OurTeam;
