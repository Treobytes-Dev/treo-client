import Head from 'next/head';

// components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import { TemplateIntro } from '../components/TemplateIntro';

const Students = ({ componentName }) => {
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

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<TemplateIntro
					heroImage={hero}
					heroHeader='Students'
					introHeader='Why join Treobytes camps and STEM class?'
				/>

				<div className='row row-1'>
					<div className='block block-copy'>
						<div className='container'>
							<h2 className='header header-two'>IT’S FUN!</h2>
						</div>
					</div>
					<div className='block block-image'>
						<div
							style={{
								backgroundImage:
									'url(' +
									'https://res.cloudinary.com/dtjvswb7v/image/upload/v1709781049/students-1_khhejv.jpg' +
									')',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center center',
								backgroundSize: 'cover',
								height: '500px',
								width: '100%',
							}}
						/>
					</div>
				</div>

				<div className='row row-2'>
					<div className='block block-image'>
						<div
							style={{
								backgroundImage:
									'url(' +
									'https://res.cloudinary.com/dtjvswb7v/image/upload/v1709781049/students-2_ofjk4n.jpg' +
									')',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center center',
								backgroundSize: 'cover',
								height: '500px',
								width: '100%',
							}}
						/>
					</div>
					<div className='block block-copy'>
						<h2 className='header header-two'>EXPLORE COOL TECHNOLOGY</h2>
					</div>
				</div>

				<div className='row row-3'>
					<div className='block block-copy'>
						<h2 className='header header-two'>
							WORK TOGETHER WITH FELLOW STUDENTS
						</h2>
					</div>
					<div className='block block-image'>
						<div
							className='image'
							style={{
								backgroundImage:
									'url(' +
									'https://res.cloudinary.com/dtjvswb7v/image/upload/v1709781049/students-3_vl7hq5.jpg' +
									')',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center center',
								backgroundSize: 'cover',
								height: '500px',
								width: '100%',
							}}
						/>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

Students.defaultProps = {
	componentName: 'students',
};

export default Students;
