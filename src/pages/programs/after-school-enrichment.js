// next
import Head from 'next/head';
import Link from 'next/link';

// components
import { TemplateIntro } from '../../components/TemplateIntro';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import IntroToCamp from '../../components/IntroToCamp';
import ProgramContainer from '../../components/ProgramContainer';
import Button from '../../components/Button';
import Sponsors from '../../components/Sponsors';

const AfterSchoolEnrichment = ({ componentName }) => {
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
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710800190/hero-after-school-enrichment_l0xfql.jpg';

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
		{ copy: 'TAKE HOME PROJECTS!' },
	];

	const stemFaireThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710795236/card-board-thumbnail-1_pwd3nt.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710795237/card-board-thumbnail-2_hx82nl.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710795239/card-board-thumbnail-3_jtri7v.jpg',
	];

	const arduinoEngineeringThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1709692267/summer-of-stem-camps-image-container-thumb-3_ay1nrg.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710800185/arduino-thumbnail-2_svkhk4.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710010480/donate-image-3_d0mjtw.jpg',
	];

	const dronesThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710010480/donate-image-2_m6jz36.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710809789/drones-tech-thumbnail-2_e4qufa.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710809799/drones-tech-thumbnail-3_s7qadw.jpg',
	];

	const cadModelingThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710809783/cad-modeling-thumbnail-1_djfzj1.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711042057/cad-modeling-thumbnail_jwh7rx.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711042361/cad-modeling-thumbnail-2_ap05jo.jpg',
	];

	const sponsors = [
		{
			id: 1,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710808986/sponsor-1_n3bawk.jpg',
			alt: 'san diego unified school district',
		},
		{
			id: 2,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710808991/sponsor-2_odeaot.jpg',
			alt: 'escondido union school district',
		},
		{
			id: 3,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710808996/sponsor-3_rgnhc0.jpg',
			alt: 'lemon grove school district',
		},
		{
			id: 4,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710809001/sponsor-4_xdvy3a.jpg',
			alt: 'banning unified school district',
		},
		{
			id: 5,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710809007/sponsor-5_ye76sb.jpg',
			alt: 'high tech middle',
		},

		{
			id: 6,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710809012/sponsor-6_p7ekkx.jpg',
			alt: 'the ymca',
		},
		{
			id: 7,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710809017/sponsor-7_q7rdqy.jpg',
			alt: 'boys and girls club of greater san diego',
		},
		{
			id: 8,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710809022/sponsor-8_wnkask.jpg',
			alt: 'south bay union school district',
		},
	];

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<TemplateIntro
					heroImage={hero}
					introHeader={`after school enrichment`.toUpperCase()}
					introBody={`Once the school day ends, we provide students STEM learning! Our facilitators will arrive at the school's location with our industry-relevant technology and equipment.`}
				/>

				<Sponsors sponsors={sponsors} />

				<IntroToCamp
					headerText={`what you will get from our after-school programs:`.toUpperCase()}
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
					collegeImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710800503/after-school-program-map_t1ngog.jpg'
					collegeName='After-School Program Reach'
				/>

				<div className='things-to-know'>
					<div className='container'>
						<h2 className='header header-two intro-header'>THINGS TO KNOW</h2>
						<div className='columns'>
							<div className='col col-1'>
								<h3 className='header header-three'>SCHOOLS</h3>

								<div className='block'>
									<h6 className='header header-six'>
										{`duration:`.toUpperCase()}
									</h6>
									<p className='paragraph'>Multi week programs</p>
									<p className='paragraph'>Twice a week!</p>
									<p className='paragraph'>90 minute sessions</p>
								</div>

								<div className='block'>
									<h6 className='header header-six'>
										{`grades:`.toUpperCase()}
									</h6>
									<p className='paragraph'>Elementary and Middle School</p>
								</div>
							</div>

							<div className='col col-2'>
								<h3 className='header header-three'>STUDENTS</h3>

								<div className='block'>
									<h6 className='header header-six'>
										{`capacity:`.toUpperCase()}
									</h6>
									<p className='paragraph'>24 Students per class</p>
								</div>

								<div className='block'>
									<h6 className='header header-six'>
										{`what they get:`.toUpperCase()}
									</h6>
									<p className='paragraph'>Hands-on take home STEM projects!</p>
								</div>

								<div className='block'>
									<h6 className='header header-six'>
										{`access to:`.toUpperCase()}
									</h6>
									<p className='paragraph'>
										Industry level curricula and equipment
									</p>
								</div>
							</div>
						</div>
						<div className='wrapper-buttons'>
							<a
								href='https://www.hisawyer.com/treobytes/schedules?sched_ids%5B%5D=191129&schedule_id=camps'
								target='_blank'
								rel='noreferrer noopener'
								className='anchor'
							>
								<Button children='JOIN NOW' additionalClass='pale' />
							</a>
						</div>
					</div>
				</div>

				<ProgramContainer
					hasIcon={
						<img
							className='icon'
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710812370/stemfaire-cardboard_ylckig.png'
							alt='stemfaire cardboard engineering'
						/>
					}
					programTitle={`Stemfaire: Cardboard Engineering`.toUpperCase()}
					programSubtitle='Combine physical movement and technology!'
					programDescription='Utilizing an interactive technology ecosystem, this camp builds a student wellness portfolio (daily-to-yearly, delivering heart rate data, reflective journaling, and performance metrics) that can correlate to academic, social, and emotional growth.'
					programFootText='Each day, students will participate in diffrerent sports and technology activities.'
					btnColor='lime-green'
					href='https://www.hisawyer.com/treobytes/schedules/activity-set/667830'
					thumbnails={stemFaireThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710813318/cardboard-engineering-helmet-2_vmluii.jpg'
					singleAltTag='Stemfaire Cardboard Engineering'
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
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710797096/circuits-plugged-in-single-image_iyysco.jpg'
					singleAltTag='arduino engineering'
				/>

				<ProgramContainer
					hasIcon={
						<img
							className='icon'
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710896528/drone_twdzxa.png'
							alt='drones tech'
						/>
					}
					programTitle={`drones tech`.toUpperCase()}
					programSubtitle={`Discover the power of programming by simutaneously controlling multiple Tello drones through various courses.`}
					programDescription={`Students will program their own set of Tello drones through orchestrated flights over Mission Pads while executing flips and daring acrobatic maneuvers.`}
					programFootText={`This hands-on experience will highlight students programming skills and unleash their boundless imagination as they push the boundaries of what they can achieve.`}
					btnColor='royal-blue'
					href='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710797096/circuits-plugged-in-single-image_iyysco.jpg'
					thumbnails={dronesThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710797718/north-county-thumbnail-2_ecyvv6.jpg'
					singleAltTag='drones tech'
				/>

				<ProgramContainer
					hasIcon={
						<img
							className='icon'
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710896530/laser-cutting_q1zalr.png'
							alt='cad modeling + laser cutting'
						/>
					}
					programTitle={`cad modeling + laser cutting`.toUpperCase()}
					programSubtitle={`Welcome to CAD modeling and Laster Cutting - a dynamic course where students delve into the realms of digital modeling, honing their creativity and technical skills. Through hands-on exploration, participants master the precision of laser cutting technology, craftiing intricate designs with CAD software and experiementing with various materials.`}
					programDescription={`They will then venture into the realm of 3D modeling, sculpting their ideas into tangible forms through mesh modeling, surface modeling, and parametric.`}
					btnColor='orange'
					href='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710797096/circuits-plugged-in-single-image_iyysco.jpg'
					thumbnails={cadModelingThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1709781049/students-2_ofjk4n.jpg'
					singleAltTag='cad modeling + laser cutting'
				/>

				<Footer />
			</div>
		</>
	);
};

AfterSchoolEnrichment.defaultProps = {
	componentName: 'after-school-enrichment',
};

export default AfterSchoolEnrichment;
