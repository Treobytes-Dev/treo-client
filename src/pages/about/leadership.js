import Head from 'next/head';

// components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import { TemplateIntro } from '../../components/TemplateIntro';

const Card = ({ title, name, contact, source }) => (
	<div className='box'>
		<div
			className='avatar'
			style={{
				backgroundImage: 'url(' + source + ')',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'top',
				backgroundSize: 'cover',
				height: '50px',
				width: '50px',
				borderRadius: '50%',
			}}
		/>
		<h5 className='header header-five title'>{title}</h5>
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
		</div>
		<div className='tier tier-2'>
			<Card
				title='Director'
				name='Antoine Serrano'
				contact='antoines@treobytes.com'
				source='https://res.cloudinary.com/dtjvswb7v/image/upload/v1709692261/avatar-antoine-serrano_tvpevf.jpg'
			/>
		</div>
		<div className='tier tier-3'>
			<Card
				title='Assistant Director'
				name='Lauren Wisniewski'
				contact='lauren@treobytes.com'
				source='https://res.cloudinary.com/dtjvswb7v/image/upload/v1709692261/avatar-lauren-wisniewski_dxg29g.jpg'
			/>
			<Card title='Operations Administrator' name='TBA' />
		</div>
		<div className='tier tier-4'>
			<div className='column column-1'>
				<h4 className='header header-four'>Marketing Team</h4>
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
				<h4 className='header header-four'>Product Development</h4>
				<div className='cards'>
					<Card
						title='Product Development'
						name='Khalil Jackson'
						contact='khalil@treobytes.com'
						source='https://res.cloudinary.com/dtjvswb7v/image/upload/v1709692261/avatar-khalil-jackson_drcs0c.jpg'
					/>
					<Card
						title='Product Development'
						name='Ryan Palmares'
						contact='ryan@treobytes.com'
						source='https://res.cloudinary.com/dtjvswb7v/image/upload/v1709692261/avatar-ryan-palmares_df6nba.jpg'
					/>
				</div>
			</div>
		</div>
	</div>
);

const Leadership = ({ componentName }) => {
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

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<TemplateIntro
					heroImage={hero}
					heroHeader='Leadership'
					introHeader='Management Team'
					introBody='Meet our team working to achieve equity in the STEM workforce!'
				/>

				<LeadershipTree />

				<div className='facilitators'>
					<h2 className='header header-two'>Facilitators</h2>
					<div className='colleges'>
						{colleges.map((college) => (
							<div
								key={college.id}
								className={`college ${college.name.toLowerCase()}`}
							>
								<p className='paragraph'>{college.name}</p>
							</div>
						))}
					</div>
				</div>

				<div className='block'>
					<div className='container'>
						<h5 className='header header-five copy'>
							Recruiting a diverse population of STEM college students to
							facilitate courses for middle school students is paramount for
							creating an inclusive and enriching educational experience.
							Diverse role models and instructors bring varied perspectives,
							backgrounds, and experiences, inspiring middle school students
							from different walks of life to pursue STEM fields. Exposure to
							instructors with diverse identities and backgrounds not only
							enhances representation but also helps break down stereotypes,
							showcasing the breadth of possibilities within STEM.
						</h5>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

Leadership.defaultProps = {
	componentName: 'leadership',
};

export default Leadership;
