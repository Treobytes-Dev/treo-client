import Head from 'next/head';

// components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import { TemplateIntro } from '../components/TemplateIntro';

const Parents = ({ componentName }) => {
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
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1709782679/parents-hero_fycrxh.jpg';

	const commentBackground =
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1709784496/speech-bubble_jdhmyt.png';

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<TemplateIntro
					heroImage={hero}
					heroHeader='Parents'
					introHeader='Why enroll your students with Treobytes?'
				/>

				<div className='quotes'>
					<div className='row row-1'>
						<div className='container'>
							<div className='block block-quote'>
								<h2 className='header header-two'>
									"THANK YOU FOR OFFERING SUCH A WONDERFUL AND ENRICHING
									EXPERIENCE FOR KIDS. THEY ABSOLUTELY LOVE IT EVERY YEAR!"
								</h2>
							</div>
							<div className='block block-name'>
								<h4 className='header header-four'>
									JENNY Y. LEVEL UP 2023 PARENT
								</h4>
							</div>
						</div>
					</div>

					<div className='row row-2'>
						<div className='container'>
							<div className='block block-quote'>
								<h2 className='header header-two'>
									"THANK YOU FOR PROVIDING FUN AND QUALITY CAMPS!"
								</h2>
							</div>
							<div className='block block-name'>
								<h4 className='header header-four'>
									MINA W. LEVEL UP 2023 PARENT
								</h4>
							</div>
						</div>
					</div>

					<div className='row row-3'>
						<div className='container'>
							<div className='block block-quote'>
								<h2 className='header header-two'>
									"MY SON KEPT ASKING WHEN HE COULD BE DROPPED OFF AT CAMP
									BECAUSE HE WAS EXCITED ABOUT THE PROJECTS THE CLASS WAS
									WORKING ON.""
								</h2>
							</div>
							<div className='block block-name'>
								<h4 className='header header-four'>
									ROXANNE B. LEVEL UP 2023 PARENT
								</h4>
							</div>
						</div>
					</div>
				</div>

				<div className='btm-row'>
					<div className='copy'>
						<h5 className='header header-five'>
							STUDENTS USUALLY ARE NOT CHALLENGED TO APPLY STEM PRINCIPLES
							TOWARDS SOLVING PROBLEMS AND CREATING PROJECTS
						</h5>

						<h5 className='header header-five'>
							The testing and implementation of knowledge are often in the form
							of tests and fictitious test scenarios
						</h5>

						<h5 className='header header-five'>
							Treobytes students gain the experience of solving real life STEM
							challenges and projects, presenting students with an environment
							that reflects the real workforce
						</h5>
					</div>
					<div className='image'>
						<img
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1709857914/parents-column-image_qjnz6v.jpg'
							alt='parents image'
						/>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

Parents.defaultProps = {
	componentName: 'parents',
};

export default Parents;
