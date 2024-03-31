import Head from 'next/head';

// components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { TemplateIntro } from '../../components/TemplateIntro';
import ProgramDates from '../../components/ProgramDates';
import Button from '../../components/Button';

// icons
import Equity from '../../assets/icons/Equity';
import HealthAndWellbeing from '../../assets/icons/HealthAndWellbeing';
import Social from '../../assets/icons/Social';
import Environment from '../../assets/icons/Environment';

const ScholarsProgram = ({ componentName }) => {
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
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710797712/hero-north-county_ooorfm.jpg';

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<TemplateIntro
					heroImage={hero}
					introHeader={`treobytes scholars program`.toUpperCase()}
				/>
				<h3 className='header header-three sub-header'>A Vocational Pathway</h3>

				<div className='columns'>
					<div className='container'>
						<div className='col col-1'>
							<img
								className='img'
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710892190/Screenshot_2024-03-19_at_4.48.56_PM_qeicj4.png'
								alt='treobytes scholars logo'
							/>

							<h3 className='header header-three sub-header'>
								{`our scholars have a voice!`.toUpperCase()}
							</h3>
							<p className='paragraph'>
								This unique experience goes beyond the ordinary classrom,
								transforming our student into a community catalyst while
								acquiring unparalleled STEM expertise and the motivation to make
								a different.
							</p>
						</div>
						<div className='col col-2'>
							<p className='paragraph'>
								Immerse your students in an exciting STEM journey with the
								Treobytes Scholars Program. Over a dynamic 6-week cohort, the
								Treobytes Social Innovators will actively design a range of
								diverse projects, tackling urgent community challenges and
								particpating in the highly anticipated 2024 Jacobs Teen
								Innovation Challenge!
							</p>
							<img
								className='img'
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710892589/scholars-program_rqvrqx.jpg'
								alt='child writing'
							/>
						</div>
					</div>
				</div>

				<h3 className='header header-three sub-header'>
					{`change starts in our community`.toUpperCase()}
				</h3>

				<div className='advocacy-and-impact'>
					<div className='box health-and-well-being'>
						<HealthAndWellbeing dimensions='100px' />
						<h5 className='header header-five'>Health and Well-being</h5>
					</div>
					<div className='box environment'>
						<Environment dimensions='100px' />
						<h5 className='header header-five'>Environment</h5>
					</div>
					<div className='box social'>
						<Social dimensions='100px' />
						<h5 className='header header-five'>Social</h5>
					</div>
					<div className='box equity'>
						<Equity dimensions='100px' />
						<h5 className='header header-five'>Equity</h5>
					</div>
				</div>

				<div className='columns'>
					<div className='container'>
						<div className='col col-1'>
							<img
								className='img'
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710892192/Screenshot_2024-03-19_at_4.49.02_PM_a3cnm6.png'
								alt='treobytes scholars logo'
							/>

							<h6 className='header header-six'>
								Tackling the challenges that impact our communities
							</h6>
						</div>
						<div className='col col-2'>
							<p className='paragraph'>
								This unique experience goes beyond the ordinary classroom,
								transforming your student into a community catalyst while
								acquiring unparalleled STEM expertise and the motivation to make
								a difference.
							</p>
							<a
								className='button-anchor'
								href='https://forms.gle/tY6WJkktQrXQov7v8'
								target='_blank'
							>
								<Button
									children={`join the movement`.toUpperCase()}
									additionalClass='orange'
								/>
							</a>
						</div>
					</div>
				</div>

				<ProgramDates
					contentLocation={
						<p className='paragraph'>
							{`treobytes headquarters`.toUpperCase()}
						</p>
					}
					contentCost={<p className='paragraph'>$650 per 6-week cohort</p>}
					contentDays={<p className='paragraph'>Saturday & Sundays</p>}
					contentDates={<p className='paragraph'>March 9th - April 20th</p>}
					contentTime={<p className='paragraph'>9:00am - 11:00am</p>}
					contentGrades={
						<a
							className='button-anchor'
							href='https://forms.gle/tY6WJkktQrXQov7v8'
							target='_blank'
						>
							<Button
								children={`apply today`.toUpperCase()}
								additionalClass='edit'
							/>
						</a>
					}
				/>

				<Footer />
			</div>
		</>
	);
};

ScholarsProgram.defaultProps = {
	componentName: 'scholars-program',
};

export default ScholarsProgram;
