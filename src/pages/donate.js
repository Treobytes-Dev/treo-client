import Head from 'next/head';

// components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';

import { TemplateIntro } from '../components/TemplateIntro';

// icons
import { Coffee } from '../assets/icons/Coffee';
import { Cake } from '../assets/icons/Cake';

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
					introHeader={`let's build the next generation of stem leaders together!`.toUpperCase()}
					scrollToTarget={scrollToTarget}
				/>

				{/* scrollTo */}
				<div id='scroll-to-el' />

				<div className='intro-icons'>
					<div className='container'>
						<div className='column col-1'>
							<Coffee dimensions={100} />
							<h4 className='header header-four red'>
								FOR THE PRICE OF A CUP OF COFFEE
							</h4>
							<p className='paragraph'>
								We love our lattes. We also love knowing that our youth are
								prepared for the future. $5 matters. You matter. Let’s do this.
							</p>
							<a href = "https://paypal.me/treobytes" target = "_blank">
							<Button additionalClass='red' children='Donate' />
							</a>
						</div>

						<div className='column col-2'>
							<Cake dimensions={100} />
							<h4 className='header header-four orange'>ONGOING SUPPORT</h4>
							<p className='paragraph'>
								Once a year we celebrate another wonderful orbit around the Sun
								(minus 6 hours and 9 minutes). Once in a while, we put someone
								else above ourselves.
							</p>
							<a href = "https://paypal.me/treobytes" target = "_blank">
							<Button additionalClass='orange' children='Donate' />
							</a>
						</div>

						<div className='column col-3'>
							<img
								className='image-icon'
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710090673/donate-icon-globe_lvxoo3.png'
								alt='a global solution icon'
							/>
							<h4 className='header header-four pale'>A GLOBAL SOLUTION</h4>
							<p className='paragraph'>
								The world is big, its challenges are bigger. For those who
								operate in a global scope, this is an opportunity to deliver
								global impact.
							</p>
							<a href = "https://paypal.me/treobytes" target = "_blank">
							<Button additionalClass='pale' children='Donate' />
							</a>
						</div>
					</div>
				</div>

				<div className='creating-future-leaders'>
					<div className='container'>
						<div className='columns'>
							<div className='column col-1'>
								<h3 className='header header-three red'>
									CREATING FUTURE LEADERS
								</h3>
								<p className='paragraph'>
									In the eyes of every student, we see the spark of leadership
									and progress waiting to ignite. With your support, we can
									nurture this flame, guiding them toward a future where they
									can lead with compassion, innovation, and integrity.
								</p>

								<p className='paragraph red'>
									Each donation is a seed planted, promising a harvest of
									leaders who will shape the world for the better.
								</p>
							</div>
							<div className='column col-2'>
								<div
									className='img'
									style={{
										backgroundImage:
											'url(' +
											'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710977760/donate-image_ytngci.jpg' +
											')',
									}}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className='putting-community-first'>
					<div className='container'>
						<div className='columns'>
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
									testament to the unwavering commitment of our facilitators,
									who share in the hopes and aspirations of those they mentor.
								</p>

								<p className='paragraph red'>
									Together, we work to build a stronger, more resilient
									community.
								</p>
							</div>
							<div className='column col-2'>
								<div
									className='img'
									style={{
										backgroundImage:
											'url(' +
											'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710977765/putting-community-first_zuh2du.jpg' +
											')',
									}}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className='pillars'>
					<div className='container'>
						<div className='pillar pillar-1'>
							<div className='badge'>
								<img
									className='img'
									src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710009960/donate-hand-shake_hrxs24.png'
									alt='Support Treobytes'
								/>
							</div>

							<h4 className='header header-four copy'>SUPPORT TREOBYTES</h4>
						</div>
						<div className='pillar pillar-2'>
							<div className='badge'>
								<img
									className='img'
									src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710010060/donate-graduate_awuegl.png'
									alt='Support Treobytes'
								/>
							</div>
							<h4 className='header header-four copy'>
								HELP US REACH MORE STUDENTS
							</h4>
						</div>
						<div className='pillar pillar-3'>
							<div className='badge'>
								<img
									className='img'
									src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710010060/donate-teaching_v6x7yl.png'
									alt='Support Treobytes'
								/>
							</div>
							<h4 className='header header-four copy'>
								IMPROVE OUR STEM PROGRAMS
							</h4>
						</div>
					</div>
				</div>

				<div className='empowering-students-in-stem'>
					<div className='container'>
						<div className='columns'>
							<div className='column col-1'>
								<h3 className='header header-three red'>
									EMPOWERING 25,000 STUDENTS IN STEM
								</h3>
								<p className='paragraph'>
									We are so proud that we've touched the lives of over
									<span className='callout'>25,000 students</span>, guiding them
									towards the vast horizon of the STEM field. We focused on
									preparing students to meet college entrance requirements gaps,
									to thrive in the college environment and the STEM workforce.
								</p>
								<p className='paragraph'>
									With your help, future young minds, brimming with potential,
									will have the opportunity to chase their dreams.
								</p>
								<p className='paragraph red'>
									Your donation will help us offer our programs to students at
									no cost to them!
								</p>
							</div>
							<div className='column col-2'>
								<div
									className='img'
									style={{
										backgroundImage:
											'url(' +
											'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710977762/empowering-students_n5k5dp.jpg' +
											')',
									}}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className='walking-the-same-streets'>
					<div className='container'>
						<div className='columns'>
							<div className='column col-1'>
								<h3 className='header header-three red'>
									WALKING THE SAME STREETS
								</h3>
								<p className='paragraph'>
									Our journey begins where the pavement meets the heartache of
									underprivileged neighborhoods. Here, we find our purpose,
									walking hand in hand with those who deserve every opportunity
									to thrive.
								</p>

								<p className='paragraph red'>
									Your support helps us pave the way for a brighter future where
									every child can walk the path of success.
								</p>
							</div>

							<div className='column col-2'>
								<div
									className='img'
									style={{
										backgroundImage:
											'url(' +
											'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710010480/donate-image-2_m6jz36.jpg' +
											')',
									}}
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

Donate.defaultProps = {
	componentName: 'donate',
};

export default Donate;
