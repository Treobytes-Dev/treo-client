import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import Head from 'next/head';

// components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Status from '../components/Status';
import { CopyBlock } from '../components/CopyBlock';
import { FAQs } from '../assets/icons/FAQs';

import { TemplateIntro } from '../components/TemplateIntro';
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
				<TemplateIntro
					heroImage={
						'https://treo-assets.s3.us-west-2.amazonaws.com/help-center-hero.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIB18I97zjx57BpICqBgLzITjrQxWeFioKo0Sc9OVSWN8AiEApvIzLiIEXOQZGP78rEwygEL8s9puwsnbmS%2FOsbMm%2B%2FAq5AIIUhACGgw5NzgwMjc0NDI4NjgiDILKS1NK6q93wsy0OyrBAhGe1CoO%2FP4QWPtciQyYt6KDcne1jvRtHr4bZtUSedxUpnngzmN7kT%2Bwo33%2Fz0cp4d7AjkKOrm50e9OEwvBMEStdoAkLVWwPdI2e1%2BBf0PeMsBVYUcrp7s71cy36ZShaPXngZXK9ivfkVWmuiXdp71nimM0dwAs%2BieQcRoxuKAhAgGMUmR0PKlrHydY1CcZTxwywjH5YH7X%2BfZWbQQ7%2BH4sAmD6QARo4w18YjIFhWEBQjGcqJso59d5mJOm6hjVXLnpVBXtjRW8bxH%2FSwlZ00gxazkapBNQyrLhyYcPwlFVFagtABODPeN3apHzR3%2FTfwIyqIwYp4zFr2bxV%2F9%2FAEO%2FYKAGxa35NlQP5WGOK8QBZ%2BD4H6hKrcFifkvfQlqk6dSZ6ZKRRFmNJVM0Tcfcls%2BxCdIrp%2FsYj8cycLYDpIEn1qzDFi4%2BvBjqzAhB9l%2FlvL37HaCu8x6nby6ZyUm38EJLjE4rVGYe%2FlriMT%2FzLtg7v7QGMK0fG1CzgvrMzpj3t6DvIzDYgW3B1TE7kAvYeagv7dtenuvqAQt4VUa%2BLusN5noqIpUjqEUZy8m87cYy%2FeNVKLiMEvRnP1DX%2B0lZBUl4nB5XrKQvahs2%2FVvcVBR77%2BsUZGQ7%2BFhtKYZw0dtrPztmON7o%2F1aCF4pY83SgXC0XXxHubpEI%2FJXQlB6XFfyCSdKxeehUsBYT1KpksuTeBVf%2BW2gRoBJeqiHzIhafnr5vTqiJyMfSOxbuBFXtwCUlx3E2Sx1d7o74%2B5JY01%2F%2FDglj%2BeUpZ8yhKF%2FKVKRQZouqnTmGMoSWaF39PyWVQQLQAYyMYUujHAQoltiCnoUjWtSszcuJPxiGXoiU3uD0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T003904Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA6HNX2OK2EBX744WD%2F20240303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=edcad9ed80da04e5c435ef01a582e7df129566cecd65ce558e0887dea7c966d9'
					}
					heroHeader='Help Center'
				/>

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
