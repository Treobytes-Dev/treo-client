import Head from 'next/head';

// components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { CopyBlock } from '../../components/CopyBlock';

import { TemplateIntro } from '../../components/TemplateIntro';

// icons
import { RobotFace } from '../../assets/icons/RobotFace';
import { ComputerScreen } from '../../assets/icons/ComputerScreen';
import { ChevronButton } from '../../assets/icons/ChevronButton';
import { PhoneAndWatch } from '../../assets/icons/PhoneAndWatch';
import { RunningPerson } from '../../assets/icons/RunningPerson';

const OurStory = ({ componentName }) => {
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
		'https://treo-assets.s3.us-west-2.amazonaws.com/about-us-hero.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIQCNSEvGdS3iuw2endcSCI8zPDX6Xkf%2BqZTs9Nuv4eyL2wIgXFC0IsGd52u%2FQeZw3xYZeW5JaGk1WCIf299PDMbJofgqhAMIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARACGgw5NzgwMjc0NDI4NjgiDAK6VAfapWNdH9txwyrYAhYVDmVT1emvB9Q7SRJ4WDd6Zj9OW7w%2FvLQEuchtv0p%2BonUG9RGm5ITuxjwqlHaMRowjTFMm6pQ8dG%2FIuSGmuNL23qbky2UoYZNzJ8es0XIU86hxqWgxQba%2FK7GJUptDaA%2FQjZlbA7MoiO%2BG5l%2BaEs2lQkiBfLF5SwkHO5lpYmAlH%2F5D%2BXaO%2BI5fz9QSPUKGEAUGiiiMHr4Li9xQkpq8BLusgxmvi4YtJl8V%2BXbJVQEwKjZRVu96GSsk4ZSXUDxBEEIa8Gmd9MKxYQo78R2XIUq0DzdiZKtJF8oflCZRF8%2B088bHSikYzDNYxeL34RtQCiMbzZdAYMNYyg5iV61M8mu6wI9tv1fhYxiW1D%2BDtTkQ%2BsMd0brWrle%2B4B0t%2F62bjsD%2FkU2g8K318O4zghue6QVgkNT1PP9NdDZSI2eyQqFe1JVDEVhXzBhzuG4BmcfRJltaA0s8WklhMO%2B3ma8GOrMCMqSEr8mbOCqI0ZO76gbJqwq71KGZq5W16fkuJlgq5SrPvCaeUmlGf4goG%2F2PsnIU7WoLDkPiLkaSFVX5EcVbJEZLjsn%2BqH8JMewpf6cAzpSdOLE1JvbzhVk97zXrp1FPqseImb5RL24AsEFlwmHNAQ5Uvt%2BBsXn8nTwS7Q%2Bdwo6gXEBBfZ4Lqr%2FN9Dm982X%2BuKYi%2BPWXNt7Tp7Mxle8LcvppYID9MGDcVAhqaoPuGMiehAqkpBA%2FTK9Ur0FTAZlvgfw%2FijUE0tcnoUq49ftP3qWCi4%2Fgkt%2FBc8onjCJRpn1Crl2F2shB93zZutCrDDOPKSf%2FgZ2jiI7I4MM2mLjtNEA4qIeMUfoAcSHfOg0GFcLxFpiJXH1mscr%2Fpy6bqBvALm6ItCpcq%2FqCi%2BvrtGiKkcf2Yg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240304T234109Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA6HNX2OK2MPCXVM7P%2F20240304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=c68d6fe8dc721380d2030169e0ce4312b40aa0928f868f83ac3cb24dd45a0cd8';

	const mission =
		'https://treo-assets.s3.us-west-2.amazonaws.com/about-us-mission.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIQCNSEvGdS3iuw2endcSCI8zPDX6Xkf%2BqZTs9Nuv4eyL2wIgXFC0IsGd52u%2FQeZw3xYZeW5JaGk1WCIf299PDMbJofgqhAMIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARACGgw5NzgwMjc0NDI4NjgiDAK6VAfapWNdH9txwyrYAhYVDmVT1emvB9Q7SRJ4WDd6Zj9OW7w%2FvLQEuchtv0p%2BonUG9RGm5ITuxjwqlHaMRowjTFMm6pQ8dG%2FIuSGmuNL23qbky2UoYZNzJ8es0XIU86hxqWgxQba%2FK7GJUptDaA%2FQjZlbA7MoiO%2BG5l%2BaEs2lQkiBfLF5SwkHO5lpYmAlH%2F5D%2BXaO%2BI5fz9QSPUKGEAUGiiiMHr4Li9xQkpq8BLusgxmvi4YtJl8V%2BXbJVQEwKjZRVu96GSsk4ZSXUDxBEEIa8Gmd9MKxYQo78R2XIUq0DzdiZKtJF8oflCZRF8%2B088bHSikYzDNYxeL34RtQCiMbzZdAYMNYyg5iV61M8mu6wI9tv1fhYxiW1D%2BDtTkQ%2BsMd0brWrle%2B4B0t%2F62bjsD%2FkU2g8K318O4zghue6QVgkNT1PP9NdDZSI2eyQqFe1JVDEVhXzBhzuG4BmcfRJltaA0s8WklhMO%2B3ma8GOrMCMqSEr8mbOCqI0ZO76gbJqwq71KGZq5W16fkuJlgq5SrPvCaeUmlGf4goG%2F2PsnIU7WoLDkPiLkaSFVX5EcVbJEZLjsn%2BqH8JMewpf6cAzpSdOLE1JvbzhVk97zXrp1FPqseImb5RL24AsEFlwmHNAQ5Uvt%2BBsXn8nTwS7Q%2Bdwo6gXEBBfZ4Lqr%2FN9Dm982X%2BuKYi%2BPWXNt7Tp7Mxle8LcvppYID9MGDcVAhqaoPuGMiehAqkpBA%2FTK9Ur0FTAZlvgfw%2FijUE0tcnoUq49ftP3qWCi4%2Fgkt%2FBc8onjCJRpn1Crl2F2shB93zZutCrDDOPKSf%2FgZ2jiI7I4MM2mLjtNEA4qIeMUfoAcSHfOg0GFcLxFpiJXH1mscr%2Fpy6bqBvALm6ItCpcq%2FqCi%2BvrtGiKkcf2Yg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240305T000539Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA6HNX2OK2MPCXVM7P%2F20240305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=91408277f0acba6144f9b98c1fd579f1ec78c5a7972e125988b4382ef96d19a9';

	const vision =
		'https://treo-assets.s3.us-west-2.amazonaws.com/about-us-vision.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIQCNSEvGdS3iuw2endcSCI8zPDX6Xkf%2BqZTs9Nuv4eyL2wIgXFC0IsGd52u%2FQeZw3xYZeW5JaGk1WCIf299PDMbJofgqhAMIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARACGgw5NzgwMjc0NDI4NjgiDAK6VAfapWNdH9txwyrYAhYVDmVT1emvB9Q7SRJ4WDd6Zj9OW7w%2FvLQEuchtv0p%2BonUG9RGm5ITuxjwqlHaMRowjTFMm6pQ8dG%2FIuSGmuNL23qbky2UoYZNzJ8es0XIU86hxqWgxQba%2FK7GJUptDaA%2FQjZlbA7MoiO%2BG5l%2BaEs2lQkiBfLF5SwkHO5lpYmAlH%2F5D%2BXaO%2BI5fz9QSPUKGEAUGiiiMHr4Li9xQkpq8BLusgxmvi4YtJl8V%2BXbJVQEwKjZRVu96GSsk4ZSXUDxBEEIa8Gmd9MKxYQo78R2XIUq0DzdiZKtJF8oflCZRF8%2B088bHSikYzDNYxeL34RtQCiMbzZdAYMNYyg5iV61M8mu6wI9tv1fhYxiW1D%2BDtTkQ%2BsMd0brWrle%2B4B0t%2F62bjsD%2FkU2g8K318O4zghue6QVgkNT1PP9NdDZSI2eyQqFe1JVDEVhXzBhzuG4BmcfRJltaA0s8WklhMO%2B3ma8GOrMCMqSEr8mbOCqI0ZO76gbJqwq71KGZq5W16fkuJlgq5SrPvCaeUmlGf4goG%2F2PsnIU7WoLDkPiLkaSFVX5EcVbJEZLjsn%2BqH8JMewpf6cAzpSdOLE1JvbzhVk97zXrp1FPqseImb5RL24AsEFlwmHNAQ5Uvt%2BBsXn8nTwS7Q%2Bdwo6gXEBBfZ4Lqr%2FN9Dm982X%2BuKYi%2BPWXNt7Tp7Mxle8LcvppYID9MGDcVAhqaoPuGMiehAqkpBA%2FTK9Ur0FTAZlvgfw%2FijUE0tcnoUq49ftP3qWCi4%2Fgkt%2FBc8onjCJRpn1Crl2F2shB93zZutCrDDOPKSf%2FgZ2jiI7I4MM2mLjtNEA4qIeMUfoAcSHfOg0GFcLxFpiJXH1mscr%2Fpy6bqBvALm6ItCpcq%2FqCi%2BvrtGiKkcf2Yg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240305T000618Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA6HNX2OK2MPCXVM7P%2F20240305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=215f79337e42bfe5d51327f9fd0572443c606197ebac16b773702411afe5bf68';

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<TemplateIntro heroImage={hero} heroHeader='About Us' />

				<div className='container'>
					<div className='column column-1'>
						Treobytes is 501(c)(3) non-profit focused on building the next
						generation of the STEM workforce. Established in 2014, our mission
						is to change the socio and economic trajectory for students by
						providing vocational STEM education. Treobytes strives towards
						developing a diverse workforce who is prepared to meet industry
						demands in STEM disciplines.
					</div>
					<div className='column column-2'>
						We achieve this by providing hands-on classes with a culminating
						ending project. Treobytes collaborates with our “TREO” of partners:
						students, educational systems and industry partners. We are looking
						for any support, no matter how small! Donations would be used to
						update technologies, equipment, and STEM topics offered to students.
					</div>
				</div>

				<div className='the-problem'>
					<div className='container'>
						<RobotFace dimensions={150} fill={'#fff'} />
						<h2 className='header header-two'>The Problem</h2>
						<h3 className='header header-three'>
							Students are falling behind in STEM competencies. Our STEM
							workforce does not represented by many of our communities’
							populations. What ideas and which solutions are not being
							developed by this missing talent?
						</h3>
					</div>
				</div>

				<ComputerScreen dimensions={250} />

				<div className='row'>
					<div className='column column-1'>
						<ChevronButton dimensions={250} />

						<h3 className='header header-three'>
							To empower our youth to master the skills needed to obtain jobs
							for today’s and tomorrow’s economy to ensure that pathways to
							well-paying jobs are accessible.
						</h3>
					</div>
					<div className='column column-2 round'>
						<img className='img  mission' src={mission} alt='mission' />
					</div>
				</div>

				<PhoneAndWatch dimensions={250} />

				<div className='row'>
					<div
						className='column column-1 round'
						// style={{
						// 	backgroundImage: `url(${vision})`,
						// 	backgroundRepeat: 'no-repeat',
						// 	backgroundPosition: 'center center',
						// 	backgroundSize: 'cover',
						// 	height: '300px',
						// }}
					>
						<img className='img mission' src={vision} alt='vision' />
					</div>
					<div className='column column-2'>
						<RunningPerson dimensions={250} />
						<h3 className='header header-three'>
							To empower our youth to master the skills needed to obtain jobs
							for today’s and tomorrow’s economy to ensure that pathways to
							well-paying jobs are accessible.
						</h3>
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
};

OurStory.defaultProps = {
	componentName: 'our-story',
};

export default OurStory;
