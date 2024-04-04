import Head from 'next/head';

// components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { TemplateIntro } from '../../components/TemplateIntro';
import ProgramDates from '../../components/ProgramDates';
import IntroToCamp from '../../components/IntroToCamp';
import ProgramContainer from '../../components/ProgramContainer';
import TracksSection from '../../components/TracksSection';
import IntroSignUp from '../../components/IntroSignUp';

// icons
import SportsTech from '../../assets/icons/SportsTech';
import GameDevelopment from '../../assets/icons/GameDevelopment';
import Sailboat from '../../assets/icons/Sailboat';
import AerialDrone from '../../assets/icons/AerialDrone';

const LevelUpAtMesaCollege = ({ componentName }) => {
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
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710795241/hero-level-up-mesa-college_qtmvm0.jpg';

	const listItemsSummerOfSTEM = [
		{ copy: 'World class STEM instruction' },
		{ copy: 'Access to industry-level tools and equipment' },
		{ copy: 'Solving complex problems' },
		{
			copy: 'Developing soft skills: work in groups, communication, conflict resolution',
		},
		{ copy: 'Vocational pathways' },
		{ copy: 'Develop intellectual curiosity' },
		{ copy: 'Replicate industry roles' },
		{ copy: 'Experiential Learning' },
		{ copy: 'Having fun and building last friendships' },
	];

	const stemSportsThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710786701/stem-sports-thumbnail-3_yazona.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710786700/stem-sports-thumbnail-1_acak3a.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710796588/hero-level-up-city-college_bqeyav.jpg',
	];

	const gameDevelopmentThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710786700/game-development-thumbnail-3_w3qbp6.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710796010/web-developers-thumbnail-3_i06zxz.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710786700/game-development-thumbnail-2_h0nwel.jpg',
	];

	const infentoThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793149/dream-garage-thumbnail-1_mplx10.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793150/dream-garage-thumbnail-2_c3zzdu.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710866943/infento-thumbnail-3_pjwqpl.jpg',
	];

	const skyAndSeaThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793452/sky-sea-tech-thumbnail-1_vncvgm.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793452/sky-sea-tech-thumbnail-2_cenuwr.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793729/aerial-drone-soccer-thumbnail-3_yohaj2.jpg',
	];

	const aerialDroneSoccerThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793727/aerial-drone-soccer-thumbnail-1_dqdyfw.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793728/aerial-drone-soccer-thumbnail-2_zsyku0.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793729/aerial-drone-soccer-thumbnail-3_yohaj2.jpg',
	];

	const smartCityThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1712011534/Untitled_design_17_wsvuap.png',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711639754/Level%20Up%20Mesa%20College/R5__7826_websize_1_iewu4e.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710795241/hero-level-up-mesa-college_qtmvm0.jpg',
	];

	const cyberAcademyThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1712011534/Untitled_design_17_wsvuap.png',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1712011813/Untitled_design_18_akdx7q.png',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1712012428/Untitled_design_20_lfoftp.png',
	];

	const webDevelopersThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1712011666/398c7dda8eec8babf891f509948e1d501311ff01_2_1023x543_ce3k59.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1712012166/Untitled_design_19_uratt4.png',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1712012525/Untitled_design_21_ps23hc.png',
	];

	const formulaTechThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1712013044/Untitled_design_25_xjhp5c.png',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711639754/Level%20Up%20Mesa%20College/R5__7826_websize_1_iewu4e.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1712013143/Untitled_design_26_pv7go6.png',
	];

	const tradeMark = '\u2122';

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
					introHeader={`Treobytes Summer Level Up Camp At Mesa College`.toUpperCase()}
					scrollToTarget={scrollToTarget}
				/>

				{/* scrollTo */}
				<div id='scroll-to-el' />

				<IntroSignUp
					href='https://www.inplay.org/providers/treobytes'
					btnText={`sign up on inplay`.toUpperCase()}
				/>

				<ProgramDates
					image1='https://res.cloudinary.com/dtjvswb7v/image/upload/v1709692266/summer-of-stem-camps-hero_fvqzmt.jpg'
					image2='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793452/sky-sea-tech-thumbnail-2_cenuwr.jpg'
					image3='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793726/aerial-drone-soccer-single-image_xm9xla.jpg'
					image4='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793150/dream-garage-single-image_ixhtnj.jpg'
					description1={`Stemprenuers smart city 2.0`.toUpperCase()}
					description2={`Sky and sea tech`.toUpperCase()}
					description3={`Aerial drone soccer`.toUpperCase()}
					description4={`Dream garage with infento`.toUpperCase()}
					contentLocation={
						<p className='paragraph'>
							Mesa College Business and Technology (BT) Building
						</p>
					}
					contentCost={<p className='paragraph'>Free</p>}
					contentDays={<p className='paragraph'>Monday - Friday</p>}
					contentDates={
						<>
							<p className='paragraph'>
								<strong style={{ fontWeight: '700' }}>Week 1:</strong>
								Jul 15th - Jul 19th
							</p>
							<p className='paragraph'>
								<strong style={{ fontWeight: '700' }}>Week 2:</strong>
								Jul 22nd - Jul 26th
							</p>

							<p className='paragraph'>
								<strong style={{ fontWeight: '700' }}>Week 3-4:</strong>
								Jul 29th - Aug 9th
							</p>
							<p className='paragraph'>
								<strong style={{ fontWeight: '700' }}>**</strong>
								10 day camp
							</p>
						</>
					}
					contentTime={<p className='paragraph'>9:00am - 4:00pm</p>}
				/>

				<IntroToCamp
					listItemMarks={listItemsSummerOfSTEM.map((item, index, array) => {
						return (
							<li
								className='list-item'
								key={index}
								style={{ fontWeight: index === array.length - 1 && 'bolder' }}
							>
								<img
									className='check'
									src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710524188/program-checkmark_rwdl56.png'
									alt='check mark'
								/>
								<p className='paragraph'>{item.copy}</p>
							</li>
						);
					})}
					collegeImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710524188/mesa-college_pbflas.jpg'
					collegeName='Mesa College'
					collegeText='Business and Technology Building'
				/>

				<TracksSection />

				<ProgramContainer
					hasIcon={<SportsTech />}
					programTitle={`Stem Sports: SUMMER OLYMPIANS`.toUpperCase()}
					programSubtitle='Combine physical movement and technology!'
					programDescription={`Utilizing the Garmin ${tradeMark} technology system, this camp builds a student wellness portfolio (daily-to-yearly, delivering heart rate data, reflective journaling, and performance metrics) that can correlate to academic, social, and emotional growth`}
					programFootText='Each day, students will take part in various health and nutrition activities incorporating different STEM sports and technologies'
					btnColor='purple'
					href='https://www.inplay.org/providers/treobytes'
					thumbnails={stemSportsThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710786700/stem-sports-single-image_r0gqja.jpg'
					singleAltTag='Stem Sports: SUMMER OLYMPIANS'
				/>

				<ProgramContainer
					hasIcon={<GameDevelopment />}
					programTitle={`Game Development`.toUpperCase()}
					programSubtitle='New Curriculum! '
					programDescription='Build the video game you have always wanted to play! Game Development and Design involves design, audio, sound, coding, scripting, and narration'
					programFootText='Students will develop all these key skills as they work in groups with the culmination of a video game development and design'
					btnColor='blue'
					href='https://www.inplay.org/providers/treobytes'
					thumbnails={gameDevelopmentThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710786700/game-development-single-image_eic0qd.jpg'
					singleAltTag='Game Development'
				/>

				<ProgramContainer
					hasIcon={
						<img
							className='icon'
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710867079/infento-icon_j2pfui.png'
							alt='stemfaire cardboard engineering'
						/>
					}
					programTitle={`Dream GARAGE WITH INFENTO`.toUpperCase()}
					programSubtitle='Combine physical movement and technology!'
					programDescription='Utilizing an interactive technology ecosystem, this camp builds a student wellness portfolio (daily-to-yearly, delivering heart rate data, reflective journaling, and performance metrics) that can correlate to academic, social, and emotional growth.'
					programFootText='Each day, students will participate in diffrerent sports and technology activities.'
					btnColor='neon-orange'
					href='https://www.inplay.org/providers/treobytes'
					thumbnails={infentoThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793150/dream-garage-single-image_ixhtnj.jpg'
					singleAltTag='dream garage with infento'
				/>

				<ProgramContainer
					hasIcon={<Sailboat dimensions='50' />}
					programTitle={`sky and sea tech`.toUpperCase()}
					programSubtitle={`New Course!-Get ready to set sail on the "wave" of innovation in our Sky and Sea Tech class, where students won't just be testing the waters, but building their own remote-controlled boats and drones!`}
					programDescription={`This program provides an accessible entry point for budding engineers and an opportunity for intermediate engineers to apply STEM fundamentals, fostering a solid understanding of core engineering principles.`}
					programFootText={`Join us for an adventure into the fantastic world of transportation engeineering, learning to navigate challenges with a splash of creativity and a boatload of fun!`}
					btnColor='sky-blue'
					href='https://www.inplay.org/providers/treobytes'
					thumbnails={skyAndSeaThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793452/sky-sea-tech-single-image_qoc7cg.jpg'
					singleAltTag='sky and sea tech'
				/>

				<ProgramContainer
					hasIcon={<AerialDrone dimensions='50' />}
					programTitle={`aerial drone soccer`.toUpperCase()}
					programSubtitle={`Join our Aerial Drone Soccer course this summer!`}
					programDescription={`In this track students will build, program and fly drones to play US drone Soccer and will also work on their soccer skills. They will learn engineering, programming, and team collaboration skills.`}
					programFootText={`Some of the concepts that will be covered will be: Aerial Maps and regulations. Building a drone soccer ball, Hovering, Mission planning, Understanding Aerodynamics, Quick decision making, Meteorology, Drone soccer matches and more.`}
					btnColor='slate-grey'
					href='https://www.inplay.org/providers/treobytes'
					thumbnails={aerialDroneSoccerThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793726/aerial-drone-soccer-single-image_xm9xla.jpg'
					singleAltTag='aerial drone soccer'
				/>

				<ProgramContainer
					hasIcon={
						<img
							className='icon'
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710879607/smart-city_te6cmr.png'
							alt='stemfaire cardboard engineering'
						/>
					}
					programTitle={`stemprenuers: smart city 2.0`.toUpperCase()}
					programSubtitle={`Welcome Future Engineers of the new Smart City!`}
					programDescription={`This camp will take students through various STEM disciplines (Laser cutting, 3D printing, SketchUp Design Software, CNC, Soldering, Sensors, Siri and Alexa Technology, and more!) to create a 3D scalable Smart City Block.`}
					programFootText={`Students will also learn about supply chain management, managing budgets, permits and project timelines. This is an intermediate level 2 camp.enges with a splash of creativity and a boatload of fun!`}
					btnColor='grass-green'
					href='https://www.inplay.org/providers/treobytes'
					thumbnails={smartCityThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1711638888/Summer%20of%20STEM%20page/R5__8753_tekmgv.jpg'
					singleAltTag='stemprenuers: smart city 2.0'
				/>

				<ProgramContainer
					hasIcon={
						<img
							className='icon'
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710879745/cyber-academy_ozklli.png'
							alt='stemfaire cardboard engineering'
						/>
					}
					programTitle={`cyber academy`.toUpperCase()}
					programSubtitle={`New course! Become a cyber guardian this summer!`}
					programDescription={`Students in Treobytes' Cyber camp will learn the knowledge and skills to protect themselves and others online. Cyber camp will guide students to gain a fundamental understanding of how information Technology works, its vulnerabilities, and how to defend against those threats.`}
					programFootText={`Cyber campers will learn this knowledge and test their cybersecurity skills through an fun and interactive Cyber platform called Haiku!`}
					btnColor='mustard-yellow'
					href='https://www.inplay.org/providers/treobytes'
					thumbnails={cyberAcademyThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1712011019/Untitled_design_11_b2jbmp.png'
					singleAltTag='cyber academy'
				/>

				<ProgramContainer
					hasIcon={
						<img
							className='icon'
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710879809/web-developers_zduwgi.png'
							alt='stemfaire cardboard engineering'
						/>
					}
					programTitle={`stemprenuers: web developers`.toUpperCase()}
					programSubtitle={`New course!`}
					programDescription={`Ignite your students's creativity, design, and coding skills this summer! STEMprenuers: Web Developers track teaches students how to create and market their own business venture.`}
					programFootText={`Then students will learn coding and design skills to build their own interactive websites. Students will learn HTML, CSS, and JavaScript to create their very own website and develop the foundational skill set to grow their web development skills`}
					btnColor='candy-purple'
					href='https://www.inplay.org/providers/treobytes'
					thumbnails={webDevelopersThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710795753/cyber-academy-single-image_wb5vgp.jpg'
					singleAltTag='stemprenuers: web developers'
				/>

				<ProgramContainer
					hasIcon={
						<img
							className='icon'
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710879907/formula-tech_zy44uw.png'
							alt='stemfaire cardboard engineering'
						/>
					}
					programTitle={`formula tech`.toUpperCase()}
					programSubtitle={`New course!`}
					programDescription={`Rev up your creativity in our Engineering Projects class, where students embark on a thrilling journey to explore remote-controlled cars and energy through the lens of engineers! Students will build and program basic car parts using the versatile Arduino platform.`}
					programFootText={`Culminating in a grand finale, students will engineer their own remote-controlled cars, putting their newfound skills to the test in a high-speed race to innovation`}
					btnColor='orange'
					href='https://www.inplay.org/providers/treobytes'
					thumbnails={formulaTechThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1712013010/Untitled_design_24_jhhdjw.png'
					singleAltTag='formula tech'
				/>

				<Footer />
			</div>
		</>
	);
};

LevelUpAtMesaCollege.defaultProps = {
	componentName: 'level-up-at-mesa-college',
};

export default LevelUpAtMesaCollege;
