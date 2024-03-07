import Head from 'next/head';

// components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import { TemplateIntro } from '../../components/TemplateIntro';

const Accomplishments = ({ componentName }) => {
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
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1709777328/accomplishments-hero_umpyrg.webp';

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<TemplateIntro heroImage={hero} heroHeader='Accomplishments' />

				<div className='numbers'>
					<div className='block block-1'>
						<h4 className='header header-four'>
							Over <span className='callout'>25,000</span> STUDENTS
						</h4>
					</div>
					<div className='block block-2'>
						<h4 className='header header-four'>
							Over <span className='callout'>35</span> DIFFERENT COURSES
						</h4>
					</div>
					<div className='block block-3'>
						<h4 className='header header-four'>
							OVER THE SPAN <span className='callout'>10</span> YEARS
						</h4>
					</div>
				</div>

				<div className='copy-block'>
					<div className='container'>
						<h3 className='header header-three section-title'>
							<span className='call-out'>ADVANCED</span> TECHNOLOGY WE BRING TO
							STUDENTS
						</h3>
						<ul className='unordered-list'>
							<li className='list-item'>
								<h5 className='header header-five'>Infento builds</h5>
							</li>
							<li className='list-item'>
								<h5 className='header header-five'>Drones</h5>
							</li>
							<li className='list-item'>
								<h5 className='header header-five'>3D printing</h5>
							</li>
						</ul>
						<ul className='unordered-list'>
							<li className='list-item'>
								<h5 className='header header-five'>Arduinos</h5>
							</li>
							<li className='list-item'>
								<h5 className='header header-five'>Laser cutters</h5>
							</li>
							<li className='list-item'>
								<h5 className='header header-five'>CNC machines</h5>
							</li>
						</ul>
					</div>
				</div>

				<div className='bottom-block'>
					<div className='container'>
						<h2 className='header header-two'>
							Over 1000 students learning STEM in our summer Level Up camps Infy
							Makers Award Winner Level Up Program for 4 years
						</h2>
					</div>
				</div>
        <Footer />
			</div>
		</>
	);
};

Accomplishments.defaultProps = {
	componentName: 'accomplishments',
};

export default Accomplishments;
