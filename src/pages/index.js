import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import Head from 'next/head';
import axios from 'axios';

// mocks
import {
	mockHeroImage,
	mockHeroHeader2,
	mockHeroHeader4,
	mockIntroHeader,
	mockIntroParagraph,
	mockSingleImage,
	mockEngineeringKitPhoto,
	mockThumbnails,
	mockRowOne,
	mockRowTwo,
} from '../mocks';

// components
import Navigation from '../components/Navigation';
import Status from '../components/Status';

import DiagramLevels from '../components/DiagramLevels';

import { TemplateIntro } from '../components/TemplateIntro';
import { TemplateSecondary } from '../components/TemplateSecondary';
import { TemplateThird } from '../components/TemplateThird';
import { TemplateFourth } from '../components/TemplateFourth';

// icons
import { Loader } from '../assets/icons/Loader';
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

	useEffect(() => {
		pageId?.length > 0 && setPageId(data._id);
	}, []);

	// comments
	const [errorMsg, setErrorMsg] = useState('');
	const [successMsg, setSuccessMsg] = useState('');
	const [pageId, setPageId] = useState(data._id);

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

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				{!!errorMsg ||
					(!!successMsg && (
						<Status errorMsg={errorMsg} successMsg={successMsg} />
					))}

				<TemplateIntro
					heroImage={mockHeroImage}
					heroHeader={mockHeroHeader2}
					heroSubHeader={mockHeroHeader4}
					introHeader={mockIntroHeader}
					introBody={mockIntroParagraph}
				/>

				<TemplateSecondary
					header='Technical Skill Development'
					copyPrimary='In Treobytes’ 6th - 8th grade Vocational STEM Program, students
  are inspired to fully engage in various pathways in the most in
  demand disciplines: Electrical Engineering, Mechanical
  Engineering, Structural Engineering, Computer Science and more.'
					copySecondary='Our hands on vocational programs mirror current college
  curriculum distributed in a micro learning format. These brief
  learning modules comprising bite-sized learning activities teach
  students how to design and conduct experiments, to identify and
  solve problems, to understand professional and ethical
  responsibility, and to communicate effectively.'
					singleImage={mockSingleImage}
					thumbnails={mockThumbnails}
					singleAltTag='Treobytes thumbnail'
				/>

				<TemplateThird
					icon={<Robot />}
					headerPrimary='Mechanical Engineering'
					copyPrimary='Robotics is a branch of engineering that involves the
          conception, design, manufacture and operation of robots. The
          objective of the robotics field is to create intelligent
          machines that can assist humans in a variety of ways.'
					headerSecondary='Curriculum Sequence'
					copySecondary='Each unit consist of 6-8 micro learning modules developing
          fundamental engineering knowledge, math and physic application,
          hands on projects and assessments Career explorations is
          incorporated will all programs'
				/>

				<div className='container'>
					<DiagramLevels
						icon={<Robot />}
						rowOne={mockRowOne}
						rowTwo={mockRowTwo}
					/>
				</div>

				<TemplateSecondary
					withIcon={true}
					icon={<Robot />}
					withIconHeader='Robotics Engineering Kits'
					copyPrimary='The components of a robot are the body/frame, control system,
          manipulators, and drivetrain. Body/frame: The body or frame can
          be of any shape and size. Essentially, the body/frame provides
          the structure of the robot.'
					imageSecondary={true}
					imageSrc={mockEngineeringKitPhoto}
					imageAlt='robotics engineering kit'
					singleImage={mockSingleImage}
					thumbnails={mockThumbnails}
					singleAltTag='Treobytes thumbnail'
				/>

				<TemplateFourth
					icon={<PartnerCollab />}
					headerPrimary='Partner Collaboration'
					copyPrimary='Expertly trained Treobytes staff facilitate and deliver online
          learning experiences through a dynamic mix of live sessions, as
          well as interactive and collaborative cohort-based
          opportunities.'
					imageSrc={mockEngineeringKitPhoto}
					imageAlt='robotics engineering kit'
				/>
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
