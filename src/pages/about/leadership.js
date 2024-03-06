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
		'https://treo-assets.s3.us-west-2.amazonaws.com/leadership-hero.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIQC8yroY9bhOA1h7r5sd7yFHwW1lfK23ExrLZwoN3pA2lQIgBzFoVfmuvwUKNpOXn2Q2rrySsxfs4KH%2F7MCcjimstn4qhAMImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARACGgw5NzgwMjc0NDI4NjgiDDO2AFUe1wceOcJLWirYAgrDq8TJGwJchHSt54%2BE5dBp5Dr%2F7Szm%2BTS4CjRUo8SB0UKZmEibDIL53UAMLD4HPPuE2dQ4xzA4a41Do6gjnQS9CD3nMJq1PGziT3gppqG6a7kqGUqD1lGEjZAxL%2FoTRMhh3AVN2GeUctVkZCDOODX8xhdc%2FZJi0X3GuE4Wxxxf7zDUX2%2FjQHItIMMyJceD7AiBrNCPOOs4W%2FuuhvYU0r6APylnOokq8dOt83UFe3%2F6DrHbIZVhoA8i4kJJ8wL17Xx8nmBX4iBq6FCrUXq7zndus9TgQ%2FqJXrqsA9HwfTY%2BltmkiYkW3oN8mIZcIWu8dJfAF%2BMbBUEmEfFBjfvVIO5%2B8f5WWKxk25zQF43gsMCADiUe%2BH9J9iOpPje5Q4cOjs0ohcGC%2FK8Ozwoz56tNbCJ7V7DIFh8%2Frv0OZH6VGmVoJbz46pLsJ8Si6KWzqcOA1wxZCowrebwHMJ%2F3nq8GOrMCoh70G2nLOjMfYlvnXfjSh%2FQs%2FI%2Fht4SJ2ka5p3F2R7DdqJ85%2FZKDppMfm4t52DRuo68cwhzSLL0Zjb3oMjoGRvt3zIW8RAthzUjnK8I5nFCUP3hE5eFF1bjAq38kVVxuszg1FfZyYG9uZA%2FhxwfJoYac4lfx%2FPW%2BsE4wOx0UDOfQR2Ru6X%2FRXxe3ONOUD%2BoMPR0%2FMNK7J71jOWKkMHjSC6TeJMpnCRhnnZcWLVK1G3pBXKqD4iFBLerNrnLKNG9zfPW%2FwiO3M85eB6oKT%2B9hpKfEqOrL3w%2FNVLeOD%2BU2AhDY%2BxucwMTvsGm7O1q%2FDy57gasXylI6myZcx7Z%2FH1FFcxauRpl%2B5dGVJdHzFsy3C6Uw3IVYYnva9U1bCoKE0kz9OPDod4qcsYMLyNaAETr3P6eqUg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240306T004307Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA6HNX2OK2FUCSS5EC%2F20240306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=e559101f97b6dbfeeb347decf130eadbe301160a0e8252727c67d1fb590d9458';

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

				<div className='container'>
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
				<Footer />
			</div>
		</>
	);
};

Leadership.defaultProps = {
	componentName: 'leadership',
};

export default Leadership;
