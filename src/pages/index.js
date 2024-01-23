import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import Head from 'next/head';
import axios from 'axios';

// components
import Navigation from '../components/Navigation';
import Status from '../components/Status';
import { Hero } from '../components/Hero';
import ImageContainer from '../components/ImageContainer';
import DiagramLevels from '../components/DiagramLevels';
// icons
import { Loader } from '../assets/icons/Loader';
import { CarrotDown } from '../assets/icons/CarrotDown';
import Robot from '../assets/icons/Robot';
import PartnerCollab from '../assets/icons/PartnerCollab';

const Home = ({ componentName, data }) => {
	const [state] = useContext(AppContext);

	if (!data) {
		// Data is still loading
		return (
			<>
				<p className='paragraph'>Loading...</p>
				<Loader />
			</>
		);
	}

	console.log('data', data);

	useEffect(() => {
		pageId.length > 0 && setPageId(data._id);
	}, []);

	// comments
	const [errorMsg, setErrorMsg] = useState('');
	const [successMsg, setSuccessMsg] = useState('');
	const [pageId, setPageId] = useState(data._id);
	// editing

	const [content, setContent] = useState('');

	if (errorMsg) setTimeout(() => setErrorMsg(''), 3000);
	if (successMsg) setTimeout(() => setSuccessMsg(''), 3000);

	const head = () => (
		<Head>
			<title>{data.title}</title>
			<meta
				name='description'
				content={
					data?.content
						? data.content.substring(0, 150)
						: 'A content management system'
				}
			/>
			<meta
				name='og:description'
				content={
					data?.content
						? data.content.substring(0, 150)
						: 'A content management system'
				}
			/>
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

	const mockSingleImage =
		'https://i0.wp.com/treobytes.org/wp-content/uploads/2020/03/AdobeStock_267992921-scaled.jpeg?resize=360%2C240&ssl=1';

	const mockEngineeringKitPhoto =
		'https://i0.wp.com/treobytes.org/wp-content/uploads/2021/07/AdobeStock_236050835-scaled.jpeg?fit=750%2C500&ssl=1';

	const mockThumbnails = [
		'https://i0.wp.com/treobytes.org/wp-content/uploads/2019/10/AdobeStock_269246946.jpeg?resize=360%2C240&ssl=1',

		'https://i0.wp.com/treobytes.org/wp-content/uploads/2019/09/shutterstock_391124713.jpg?resize=360%2C240&ssl=1',

		'https://i0.wp.com/treobytes.org/wp-content/uploads/2019/09/shutterstock_660256189.jpg?resize=360%2C240&ssl=1',
	];

	const mockRowOne = [
		{
			number: '01',
			text: '	Proactively engineer real-time bandwidth for bricks-and-clicks quality vector Assertively evisculate interdependent leadership skills through clicks-and-mortar.',
			classModifier: 'one',
		},
		{
			number: '02',
			text: 'Monotonectally synergize professional value before equity invested						e-tailers. Seamlessly supply performance based portals with quality.',
			classModifier: 'two',
		},
		{
			number: '03',
			text: 'Dynamically brand synergistic total linkage and tactical sources.      Synergistically negotiate value-added mindshare without fully tested.',
			classModifier: 'three',
		},
		{
			number: '04',
			text: 'Synergistically reconceptualize diverse sources rather than open-source quality vectors. Progressively brand parallel customer service without.',
			classModifier: 'four',
		},
	];

	const mockRowTwo = [
		{
			number: '01',
			text: 'Basic "RoBo" Motion',
			classModifier: 'one',
		},
		{
			number: '02',
			text: 'Technical Programming',
			classModifier: 'two',
		},
		{
			number: '03',
			text: 'Prototyping',
			classModifier: 'three',
		},
		{
			number: '04',
			text: 'Project Completion Knowledge Assessment',
			classModifier: 'four',
		},
	];

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				{!!errorMsg ||
					(!!successMsg && (
						<Status errorMsg={errorMsg} successMsg={successMsg} />
					))}
				<div className='hero-wrapper'>
					<Hero
						children={
							<>
								<div className='fore-ground'>
									<div className='text'>
										<h2 className='header-two'>6th - 8th Grade</h2>
										<h4 className='header-four'>Vocational STEM Education</h4>
									</div>
								</div>
								<div className='assets'>
									<div className='carrot-down'>
										<CarrotDown fill='#333' />
									</div>
								</div>
							</>
						}
						background='http://treobytes.org/wp-content/uploads/2019/09/Girl-STEAM.jpg'
					/>
				</div>

				{/* template */}
				<div className='container'>
					<div className='intro'>
						<h2 className='header-two'>
							Career Aspirations Being in Middle School
						</h2>
						<p className='paragraph'>
							In today’s technology-driven world, more than half of all students
							will be expected to use STEM as part of their future careers.
							Providing them with both exposure and career training is a must.
							The earlier that training begins, the more likely that students
							will understand and consider STEM careers and be empowered with
							the skillsets to succeed professionally – wherever their adult
							lives take them.
						</p>
					</div>
				</div>

				<div className='container'>
					<div className='secondary'>
						<div className='column col-1'>
							<h2 className='header-two'>Technical Skill Development</h2>
							<p className='paragraph'>
								In Treobytes’ 6th - 8th grade Vocational STEM Program, students
								are inspired to fully engage in various pathways in the most in
								demand disciplines: Electrical Engineering, Mechanical
								Engineering, Structural Engineering, Computer Science and more.{' '}
							</p>
							<p className='paragraph'>
								Our hands on vocational programs mirror current college
								curriculum distributed in a micro learning format. These brief
								learning modules comprising bite-sized learning activities teach
								students how to design and conduct experiments, to identify and
								solve problems, to understand professional and ethical
								responsibility, and to communicate effectively.
							</p>
						</div>
						<div className='column col-2'>
							<ImageContainer
								singleImage={mockSingleImage}
								thumbnails={mockThumbnails}
								singleAltTag='Treobytes thumbnail'
							/>
						</div>
					</div>
				</div>

				<div className='container'>
					<div className='third'>
						<div className='group one'>
							<div className='heading'>
								<div className='wrapper-icon'>
									<Robot />
								</div>
								<h4 className='header-four'>Mechanical Engineering:</h4>
							</div>
							<p className='paragraph'>
								Robotics is a branch of engineering that involves the
								conception, design, manufacture and operation of robots. The
								objective of the robotics field is to create intelligent
								machines that can assist humans in a variety of ways.
							</p>
						</div>
						<div className='group two'>
							<h4 className='header-four'>Curriculum Sequence:</h4>
							<p className='paragraph'>
								Each unit consist of 6-8 micro learning modules developing
								fundamental engineering knowledge, math and physic application,
								hands on projects and assessments Career explorations is
								incorporated will all programs
							</p>
						</div>
					</div>
				</div>

				<div className='container'>
					<DiagramLevels
						icon={<Robot />}
						rowOne={mockRowOne}
						rowTwo={mockRowTwo}
					/>
				</div>

				<div className='container'>
					<div className='fourth'>
						<div className='column col-1'>
							<div className='heading'>
								<div className='wrapper-icon'>
									<Robot />
								</div>
								<h4 className='header-four'>Robotics Engineering Kits:</h4>
							</div>
							<p className='paragraph'>
								The components of a robot are the body/frame, control system,
								manipulators, and drivetrain. Body/frame: The body or frame can
								be of any shape and size. Essentially, the body/frame provides
								the structure of the robot.
							</p>
							<div className='wrapper-image'>
								<img
									src={mockEngineeringKitPhoto}
									alt='robotics engineering kit'
									className='img'
								/>
							</div>
						</div>

						<div className='column col-2'>
							<ImageContainer
								singleImage={mockSingleImage}
								thumbnails={mockThumbnails}
								singleAltTag='Treobytes thumbnail'
							/>
						</div>
					</div>
				</div>

				<div className='container'>
					<div className='fifth'>
						<div className='column col-1'>
							<div className='heading'>
								<div className='wrapper-icon'>
									<PartnerCollab />
								</div>

								<h4 className='header-four'>Partner Collaboration:</h4>
							</div>
							<p className='paragraph'>
								Expertly trained Treobytes staff facilitate and deliver online
								learning experiences through a dynamic mix of live sessions, as
								well as interactive and collaborative cohort-based
								opportunities.
							</p>
						</div>

						<div className='column col-2'>
							<div className='wrapper-image'>
								<img
									src={mockEngineeringKitPhoto}
									alt='robotics engineering kit'
									className='img'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export async function getServerSideProps() {
	try {
		const { data } = await axios.get(`/page/home`);

		return {
			props: {
				data,
			},
		};
	} catch (error) {
		console.error('Error fetching page:', error);
		return {
			props: {
				data: {},
			},
		};
	}
}

Home.defaultProps = {
	componentName: 'home',
};

export default Home;
