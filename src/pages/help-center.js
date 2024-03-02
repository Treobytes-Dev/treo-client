import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import Head from 'next/head';

// components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Status from '../components/Status';
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
	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				{/* <TemplateIntro
					heroImage={mockHeroImage}
					heroHeader={mockHeroHeader2}
					heroSubHeader={mockHeroHeader4}
					introHeader={mockIntroHeader}
					introBody={mockIntroParagraph}
					scrollToTarget={scrollToTarget}
				/> */}
				<Footer />
			</div>
		</>
	);
};

HelpCenter.defaultProps = {
	componentName: 'help-center',
};

export default HelpCenter;
