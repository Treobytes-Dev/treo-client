import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import Head from 'next/head';

// components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Status from '../components/Status';
import { CopyBlock } from '../components/CopyBlock';
import { FAQs } from '../assets/icons/FAQs';

const HelpCenter = ({ componentName }) => {
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

	const listItems = [
		{
			id: 1,
			text: '- learning theory and working on projects that apply this knowledge',
		},
		{ id: 2, text: '- classroom learning, breaks, and fun activities' },
		{
			id: 3,
			text: '- a safe and healthy learning environment for all students',
		},
	];

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				{/* <TemplateIntro
					heroImage={mockHeroImage}
					heroHeader='Help Center'
				/> */}

				<div className='container'>
					<div className='heading'>
						<h2 className='header header-two'>FAQs</h2>
						<FAQs dimensions={50} />
					</div>
					<CopyBlock
						header='Why should my student join a Treobytes program?'
						copyPrimary='We take pride in always improving our programs and developing new offerings to students that keep up with industry standards. Technology is always getting better, and we are too! Our staff are STEM college students with a passion for preparing the next generation for the challenges they will likely face.'
					/>
					<CopyBlock
						header='What can me and my student expect from a Treobytes experience?'
						copyPrimary='Our programs provide an optimal balance of:'
						listItem={listItems.map((item) => (
							<li className='list-item' key={item.id}>
								{item.text}
							</li>
						))}
					/>
					<CopyBlock
						header='Who can speak with if I have a question about a Treobytes program?'
						copyPrimary={`Reach out to us at info@treobytes.com or 619.333.8589`}
					/>
					<CopyBlock
						header='What are the student to facilitator ratios?'
						copyPrimary='The most dense ratio would be 12 students for each facilitator. Often our programs are close to 6 students per facilitator.'
					/>
					<CopyBlock
						header='What is provided to the students?'
						copyPrimary='Snacks and all materials for the course will be provided. For day camps, lunch will also be provided.'
					/>
					<CopyBlock
						header='What is Treobytes looking to achieve?'
						copyPrimary='We strive to ensure that as many students as possible are introduced to the world of STEM. An unfortunate reality is that students who would excel in the STEM workforce do not choose it because they were never introduced to the field or never considered it open to them. We want to provides students an informed choice when deciding what to purse after high school, which includes a possible STEM career.'
					/>{' '}
				</div>

				<Footer />
			</div>
		</>
	);
};

HelpCenter.defaultProps = {
	componentName: 'help-center',
};

export default HelpCenter;
