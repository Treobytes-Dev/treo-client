import Head from 'next/head';

// components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { TemplateIntro } from '../../components/TemplateIntro';
import ProgramDates from '../../components/ProgramDates';
import IntroToCamp from '../../components/IntroToCamp';
import ProgramContainer from '../../components/ProgramContainer';
import TracksSection from '../../components/TracksSection';

// icons
import SportsTech from '../../assets/icons/SportsTech';

const NorthCountyAndExpansion = ({ componentName }) => {
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

	const musicTechThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710799248/music-technology-thumbnail-1_ou7fkt.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710799252/music-technology-thumbnail-2_amky8o.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710799256/music-technology-thumbnail-3_jwmecw.jpg',
	];

	const djiRoboticsThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710799231/dji-robotics-thumbnail-1_gs47cd.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710799235/dji-robotics-thumbnail-2_i9qj2j.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710010480/donate-image-2_m6jz36.jpg',
	];

	const arduinoEngineeringThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1709692267/summer-of-stem-camps-image-container-thumb-3_ay1nrg.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710800185/arduino-thumbnail-2_svkhk4.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710010480/donate-image-3_d0mjtw.jpg',
	];

	const printing3DThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1709781049/students-2_ofjk4n.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710795239/card-board-thumbnail-3_jtri7v.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793452/sky-sea-tech-thumbnail-2_cenuwr.jpg',
	];

	const tradeMark = '\u2122';

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<TemplateIntro
					heroImage={hero}
					introHeader={`north county and expansion`.toUpperCase()}
				/>
				<h3 className='header header-three sub-header'>
					{`escondido union school district`.toUpperCase()}
				</h3>

				<ProgramDates
					image1='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710797715/north-county-thumbnail-1_cvnksq.jpg'
					image2='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710797718/north-county-thumbnail-2_ecyvv6.jpg'
					image3='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710797722/north-county-thumbnail-3_xbqzqz.jpg'
					image4='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710797725/north-county-thumbnail-4_nzq45v.jpg'
					contentLocation={
						<p className='paragraph'>Escondido Union School District schools</p>
					}
					contentCost={<p className='paragraph'>Free</p>}
					contentDays={<p className='paragraph'>Monday - Friday</p>}
					contentDates={<p className='paragraph'>June 16th - July 12th</p>}
					contentTime={<p className='paragraph'>12:00pm - 4:30pm</p>}
					contentGrades={
						<p className='paragraph'>Elementary and Middle school</p>
					}
				/>

				<h3 className='header header-three sub-header'>
					{`banning unified school district`.toUpperCase()}
				</h3>

				<ProgramDates
					image1='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710799231/dji-robotics-thumbnail-1_gs47cd.jpg'
					image2='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710797096/circuits-plugged-in-single-image_iyysco.jpg'
					image3='https://res.cloudinary.com/dtjvswb7v/image/upload/v1709781049/students-2_ofjk4n.jpg'
					image4='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710813312/cardboard-engineering-helmet-1_w6bsb8.jpg'
					description1={`dji robotics`.toUpperCase()}
					description2={`arduino engineering`.toUpperCase()}
					description3={`music technology`.toUpperCase()}
					description4={`stemfaire`.toUpperCase()}
					contentLocation={
						<p className='paragraph'>Mount San Jacinto College</p>
					}
					contentCost={<p className='paragraph'>Free</p>}
					contentDays={<p className='paragraph'>Monday - Friday</p>}
					contentDates={
						<>
							<p className='paragraph'>June 10th - June 14th</p>
							<p className='paragraph'>June 17th - June 21st</p>
							<p className='paragraph'>June 24th - June 28th</p>
							<p className='paragraph'>July 1st - July 5th</p>
							<p className='paragraph'>
								<strong style={{ fontWeight: '700' }}>* 10 day camp</strong>
							</p>
						</>
					}
					contentTime={<p className='paragraph'>9:00am - 3:00pm</p>}
				/>

				<IntroToCamp
					listItemMarks={listItemsSummerOfSTEM.map((item, index) => (
						<li className='list-item' key={index}>
							<img
								className='check'
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710524188/program-checkmark_rwdl56.png'
								alt='check mark'
							/>
							<p className='paragraph'>{item.copy}</p>
						</li>
					))}
					collegeImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710796859/hero-city-college_l1jbvu.jpg'
					collegeName={`msjc college`.toUpperCase()}
					collegeText='San Jacinto Campus'
				/>

				<TracksSection />

				<ProgramContainer
					hasIcon={
						<img
							className='icon'
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710884079/music-technology_taxuzg.png'
							alt='music technology'
						/>
					}
					programTitle={`music technology`.toUpperCase()}
					programSubtitle='Combine your musical talents with technology!'
					programDescription={`Students will learn music fundamentals and music production skills including navigating a Digital Audio Workstation (DAW), sampling, creating percussive loops, melody composition, and mixing.`}
					programFootText='Students will then use their music technology knowledge and skills to create their own song! Some of the technologies that will be covered will be: SoundTrap, Novation LaunchPad, Playground Sessions and more.'
					btnColor='purple'
					href='https://www.hisawyer.com/treobytes/schedules/activity-set/673279'
					thumbnails={musicTechThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710799244/music-technology-single-image_erxf0m.jpg'
					singleAltTag='music technology'
				/>

				<ProgramContainer
					hasIcon={
						<img
							className='icon'
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710884127/dji-robotics_mtscbb.png'
							alt='dji robotics + drones'
						/>
					}
					programTitle={`dji robotics + drones`.toUpperCase()}
					programSubtitle={`The RoboMaster S1 marks a groundbreaking advancement in educational robotics, skillfully crafted to unlock the hidden potential in each student.`}
					programDescription={`Inspired by DJI's esteemed RoboMaster robotics conmtest, this track delved into diverse subjects like science, math, physics, and programming`}
					programFootText={`Students will also have the opportunity to program their own set of Tello drones through orchestrated flights over Mission Pads while executing flips and daring acrobatic manuevers.`}
					btnColor='neon-orange'
					href='https://www.hisawyer.com/treobytes/schedules/activity-set/673279'
					thumbnails={djiRoboticsThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710799226/dji-robotics-single-image_j57ihd.jpg'
					singleAltTag='dji robotics + drones'
				/>

				<ProgramContainer
					hasIcon={
						<img
							className='icon'
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710884156/arduino-engineering_prgv2n.png'
							alt='arduino engineering'
						/>
					}
					programTitle={`arduino engineering`.toUpperCase()}
					programSubtitle={`In Arduino Engineering, students will embark on an exciting journey to explore the fundamentals of Arduino technology and its practical applications to real-world challenges.`}
					programDescription={`Through hands-on experiences, they will learn the art of programming, allowing them to bring their innovative ideas to life. THe course delves into the fascinating realm of structures and aerospace engineering, prividing insights into designing and building robust systems.`}
					programFootText={``}
					btnColor='mustard-yellow'
					href='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710797096/circuits-plugged-in-single-image_iyysco.jpg'
					thumbnails={arduinoEngineeringThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710799226/dji-robotics-single-image_j57ihd.jpg'
					singleAltTag='arduino engineering'
				/>

				<ProgramContainer
					hasIcon={
						<img
							className='icon'
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710884166/3d-printing_lxfz2x.png'
							alt='stemfaire + 3d printing'
						/>
					}
					programTitle={`stemfaire + 3d printing`.toUpperCase()}
					programSubtitle={`Welcome to STEMfaire, the Cardboard Engineering Projects Camp, where imagination takes shape and creativity knows no bounds!`}
					programDescription={`Our camp is an exciting journey into the world of engineering, design, and hands-on innovation-all with the humble yet versatile material, cardboard. Participants will embark on a thrilling exploration of engineering principles and design thinking.`}
					programFootText={`From constructing sturdy bridges to crafting imaginative architectural wonders, everey project is an opportunity to turn simple sheets of cardboard into incredible feats of engineering.`}
					btnColor='lime-green'
					href='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710797096/circuits-plugged-in-single-image_iyysco.jpg'
					thumbnails={printing3DThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1711305819/IMG_4774_xlsdok.jpg'
					singleAltTag='stemfaire + 3d printing'
				/>

				<Footer />
			</div>
		</>
	);
};

NorthCountyAndExpansion.defaultProps = {
	componentName: 'north-county-and-expansion',
};

export default NorthCountyAndExpansion;
