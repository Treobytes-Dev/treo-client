import Head from 'next/head';

// components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import { TemplateIntro } from '../../components/TemplateIntro';
import Sponsors from '../../components/Sponsors';

const Accomplishments = ({ componentName }) => {
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
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1709777328/accomplishments-hero_umpyrg.webp';

	const sponsors = [
		{
			id: 1,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711847936/sd-foundation_rqsypg.png',
			alt: 'san diego foundation',
		},
		{
			id: 2,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711847938/sd-mesa-college_ht4xnb.png',
			alt: 'mesa college',
		},
		{
			id: 3,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711847509/service-now_o4ib5c.png',
			alt: 'service now',
		},
		{
			id: 4,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711640935/Level%20Up%20City%20College/CityCollege_color_iikxno.jpg',
			alt: 'san diego city college',
		},
		{
			id: 5,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711847506/infento_q1jjde.png',
			alt: 'infento',
		},
		{
			id: 6,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711847935/research-group_ndomjt.jpg',
			alt: 'auguste research group',
		},
		{
			id: 7,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710808991/sponsor-2_odeaot.jpg',
			alt: 'escondido union school district',
		},
		{
			id: 8,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711847507/sd-education_xh85jg.png',
			alt: 'san diego county office of education',
		},
		{
			id: 9,
			url: 'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711225328/primetime_lgtxbl.png',
			alt: 'sdusd prime time',
		},
	];

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<TemplateIntro heroImage={hero} introHeader='Accomplishments' />

				<div className='numbers'>
					<div className='block block-1'>
						<h4 className='header header-four'>
							Over <span className='callout'>25,000</span> STUDENTS
						</h4>
					</div>
					<div className='block block-2'>
						<h4 className='header header-four'>
							Over <span className='callout'>35</span> DIFFERENT COURSES
						</h4>
					</div>
					<div className='block block-3'>
						<h4 className='header header-four'>
							OVER THE SPAN <span className='callout'>10</span> YEARS
						</h4>
					</div>
				</div>

				<div className='image-sponsor-row'>
					<div className='container'>
						<div className='image-box'>
							<img
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1711848370/great-non-profits_ptbkxc.png'
								alt='great non profits'
							/>
						</div>

						<div className='image-box'>
							<img
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1711848384/Screenshot_2024-03-30_at_6.24.33_PM_qkazli.png'
								alt='treobytes president'
							/>
						</div>

						<div className='image-box'>
							<img
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1711847936/sd-foundation_rqsypg.png'
								alt='san diego foundation'
							/>
						</div>
					</div>
				</div>

				<h3
					className='header header-three sponsors'
					style={{ textAlign: 'center' }}
				>
					{`sponsors`.toUpperCase()}
				</h3>
				<Sponsors sponsors={sponsors} />

				<div className='copy-block'>
					<div className='container'>
						<h3 className='header header-three section-title'>OUR REACH</h3>
						<div className='body-content'>
							<div className='lists'>
								<ul className='unordered-list'>
									<li className='list-item'>
										<h5 className='header header-five'>
											{`san diego unified school district`.toUpperCase()}
										</h5>
									</li>

									<li className='list-item indent'>
										<h5 className='header header-five '>
											{`steam magnet program`.toUpperCase()}
										</h5>
									</li>

									<li className='list-item'>
										<h5 className='header header-five'>
											{`lemon grove school district`.toUpperCase()}
										</h5>
									</li>
									<li className='list-item'>
										<h5 className='header header-five'>
											{`escondido union school district`.toUpperCase()}
										</h5>
									</li>
									<li className='list-item'>
										<h5 className='header header-five'>
											{`banning school unified school district`.toUpperCase()}
										</h5>
									</li>
									<li className='list-item'>
										<h5 className='header header-five'>
											{`south bay school district`.toUpperCase()}
										</h5>
									</li>
									<li className='list-item'>
										<h5 className='header header-five'>
											{`charter schools`.toUpperCase()}
										</h5>
									</li>
									<li className='list-item'>
										<h5 className='header header-five'>
											{`birch aquarium / scripps`.toUpperCase()}
										</h5>
									</li>
									<li className='list-item'>
										<h5 className='header header-five'>
											{`boys and girls club`.toUpperCase()}
										</h5>
									</li>
									<li className='list-item'>
										<h5 className='header header-five'>
											{`ymca`.toUpperCase()}
										</h5>
									</li>
									<li className='list-item'>
										<h5 className='header header-five'>
											{`houston area (2025)`.toUpperCase()}
										</h5>
									</li>
								</ul>
							</div>
							<div className='diagram'>
								<div
									className='image'
									style={{
										backgroundImage:
											'url(' +
											'https://res.cloudinary.com/dtjvswb7v/image/upload/v1711846729/diagram_lhzife.png' +
											')',
										backgroundRepeat: 'no-repeat',
										backgroundPosition: 'center center',
										backgroundSize: 'contain',
										height: '500px',
										width: '100%',
									}}
								/>
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
};

Accomplishments.defaultProps = {
	componentName: 'accomplishments',
};

export default Accomplishments;
