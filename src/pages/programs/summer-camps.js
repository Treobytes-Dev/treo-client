import Head from 'next/head';

// components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

import Link from 'next/link';

const Card = ({ title, image, link }) => (
	<div className='card'>
		<div className='image'>
			<img src={image} alt={title} />
		</div>
		<div className='title'>
			<h3 className='header header-three'>{title}</h3>
		</div>
		<Link className='wrapper-button' href={link}>
			<Button children='LEARN MORE' additionalClass='red' />
		</Link>
	</div>
);

const SummerCamps = ({ componentName = 'summer-camps' }) => {
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

	const cardImage = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1709693053/leadership-hero_tgmuu8.jpg',
	];

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<h2 className='header header-two'>SUMMER CAMPS</h2>

				<div className='container'>
					<div className='row'>
						<Card
							title='Summer of STEM'
							image='https://res.cloudinary.com/dtjvswb7v/image/upload/v1709692266/summer-of-stem-camps-hero_fvqzmt.jpg'
							link='/programs/summer-of-stem'
						/>
						<Card
							title='Level Up At Mesa College'
							image='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710795241/hero-level-up-mesa-college_qtmvm0.jpg'
							link='/programs/level-up-at-mesa-college'
						/>
					</div>

					<div className='row'>
						<Card
							title='Level Up City College'
							image='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710796588/hero-level-up-city-college_bqeyav.jpg'
							link='/programs/level-up-city-college'
						/>

						<Card
							title='North County and Expansion'
							image='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710797712/hero-north-county_ooorfm.jpg'
							link='/programs/north-county-and-expansion'
						/>
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
};

export default SummerCamps;
