import Head from 'next/head';

// components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import { TemplateIntro } from '../../components/TemplateIntro';

const Donate = ({ componentName }) => {
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
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710009545/hero-donate_o9mqil.jpg';

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<TemplateIntro
					heroImage={hero}
					heroHeader='Students'
					introHeader='Donate'
				/>

				<div className='pillars'>
					<div className='pillar pillar-1'>
						<div className='badge'>
							<img
								className='img'
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710009960/donate-hand-shake_hrxs24.png'
								alt='Support Treobytes'
							/>
						</div>

						<h3 className='header header-three copy'>SUPPORT TREOBYTES</h3>
					</div>
					<div className='pillar pillar-2'>
						<div className='badge'>
							<img
								className='img'
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710010060/donate-graduate_awuegl.png'
								alt='Support Treobytes'
							/>
						</div>
						<h3 className='header header-three copy'>
							HELP US REACH MORE STUDENTS
						</h3>
					</div>
					<div className='pillar pillar-3'>
						<div className='badge'>
							<img
								className='img'
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710010060/donate-teaching_v6x7yl.png'
								alt='Support Treobytes'
							/>
						</div>
						<h3 className='header header-three copy'>
							IMPROVE OUR STEM PROGRAMS
						</h3>
					</div>
				</div>

				<div className='container'>
					<h2 className='header header-two red'>
						LET’S BUILD THE NEXT GENERATION OF STEM LEADERS TOGETHER!
					</h2>
				</div>

				<div className='container'>
					<div className='columns'>
						{' '}
						<div className='column col-1'>
							<h3 className='header header-three red'>
								EMPOWERING 25,000 STUDENTS IN STEM
							</h3>
							<p className='paragraph'>
								We are so proud that we've touched the lives of over 25,000
								students, guiding them towards the vast horizon of the STEM
								field. We focused on preparing students to meet college entrance
								requirements gaps, to thrive in the college environment and the
								STEM workforce.
							</p>
							<p className='paragraph'>
								With your help, future young minds, brimming with potential,
								will have the opportunity to chase their dreams.
							</p>
							<p className='paragraph red'>
								Your donation will help us offer our programs to students at no
								cost to them!
							</p>
						</div>
					</div>
				</div>

				<div className='container'>
					<div className='columns'>
						<div className='column col-1'>
							<h3 className='header header-three red'>
								CREATING FUTURE LEADERS
							</h3>
							<p className='paragraph'>
								In the eyes of every student, we see the spark of leadership and
								progress waiting to ignite. With your support, we can nurture
								this flame, guiding them toward a future where they can lead
								with compassion, innovation, and integrity.
							</p>

							<p className='paragraph red'>
								Each donation is a seed planted, promising a harvest of leaders
								who will shape the world for the better.
							</p>
						</div>
					</div>
				</div>

				<div className='container'>
					<div className='columns'>
						{' '}
						<div className='column col-1'>
							<h3 className='header header-three red'>
								PUTTING COMMUNITY FIRST
							</h3>
							<p className='paragraph'>
								Our journey is intertwined with the communities we live in and
								serve: young students, college students, parents, schools, and
								industry.
							</p>

							<p className='paragraph'>
								Every smile we see, and every success story we witness, is a
								testament to the unwavering commitment of our facilitators, who
								share in the hopes and aspirations of those they mentor.
							</p>

							<p className='paragraph red'>
								Together, we work to build a stronger, more resilient community.
							</p>
						</div>
					</div>
				</div>

				<div className='container'>
					<div className='columns'>
						<div className='column col-1'>
							<h3 className='header header-three red'>
								WALKING THE SAME STREETS
							</h3>
							<p className='paragraph'>
								Our journey begins where the pavement meets the heartache of
								underprivileged neighborhoods. Here, we find our purpose,
								walking hand in hand with those who deserve every opportunity to
								thrive.
							</p>

							<p className='paragraph red'>
								Your support helps us pave the way for a brighter future where
								every child can walk the path of success.
							</p>
						</div>

						<div className='column col-2'>
							<img
								className='img'
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710010479/donate-image-1_kob3iq.jpg'
								alt='walking the streets image'
							/>
						</div>
					</div>
				</div>

				<div className='container'>
					<div className='columns'>
						<div className='column col-1'>
							<img
								className='img'
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710010479/donate-image-1_kob3iq.jpg'
								alt='walking the streets image'
							/>
							<h3 className='header header-three red'>
								FOR THE PRIcCE OF A CUP OF COFFEE
							</h3>
							<p className='paragraph'>
								We love our lattes. We also love knowing that our youth are
								prepared for the future. $5 matters. You matter. Let’s do this.
							</p>
						</div>

						<div className='column col-2'>
							<img
								className='img'
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710010479/donate-image-1_kob3iq.jpg'
								alt='walking the streets image'
							/>
							<button className='submit'>Donate</button>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

Donate.defaultProps = {
	componentName: 'donate',
};

export default Donate;
