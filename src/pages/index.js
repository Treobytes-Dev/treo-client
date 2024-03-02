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
import Footer from '../components/Footer';
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

const Home = ({ componentName }) => {
	const [state] = useContext(AppContext);

	// comments
	const [errorMsg, setErrorMsg] = useState('');
	const [successMsg, setSuccessMsg] = useState('');

	if (errorMsg) setTimeout(() => setErrorMsg(''), 3000);
	if (successMsg) setTimeout(() => setSuccessMsg(''), 3000);

	// scroll to logic
	const scrollToTarget = () => {
		const targetElement = document.getElementById('scroll-to-el');
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

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
					scrollToTarget={scrollToTarget}
				/>

				<div id='scroll-to-el' />
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

				<Footer />
			</div>
		</>
	);
};

Home.defaultProps = {
	componentName: 'home',
};

export default Home;
