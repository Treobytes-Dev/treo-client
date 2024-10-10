import Head from 'next/head';
import Link from 'next/link';

// components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { TemplateIntro } from '../components/TemplateIntro';

// icons
import CommentsWLines from '../assets/icons/CommentsWLines';
import Questions from '../assets/icons/Questions';
import Inquiries from '../assets/icons/Inquiries';
import Suggestions from '../assets/icons/Suggestions';
import Partnerships from '../assets/icons/Partnerships';
import Edit from '../assets/icons/Edit';
import AnythingElse from '../assets/icons/AnythingElse';
import EmailUs from '../assets/icons/EmailUs';
import CallUs from '../assets/icons/CallUs';

const ContactUs = ({ componentName = 'contact-us' }) => {
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
				<TemplateIntro
					heroImage={
						'https://treo-assets.s3.us-west-2.amazonaws.com/contact-us-hero.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIB18I97zjx57BpICqBgLzITjrQxWeFioKo0Sc9OVSWN8AiEApvIzLiIEXOQZGP78rEwygEL8s9puwsnbmS%2FOsbMm%2B%2FAq5AIIUhACGgw5NzgwMjc0NDI4NjgiDILKS1NK6q93wsy0OyrBAhGe1CoO%2FP4QWPtciQyYt6KDcne1jvRtHr4bZtUSedxUpnngzmN7kT%2Bwo33%2Fz0cp4d7AjkKOrm50e9OEwvBMEStdoAkLVWwPdI2e1%2BBf0PeMsBVYUcrp7s71cy36ZShaPXngZXK9ivfkVWmuiXdp71nimM0dwAs%2BieQcRoxuKAhAgGMUmR0PKlrHydY1CcZTxwywjH5YH7X%2BfZWbQQ7%2BH4sAmD6QARo4w18YjIFhWEBQjGcqJso59d5mJOm6hjVXLnpVBXtjRW8bxH%2FSwlZ00gxazkapBNQyrLhyYcPwlFVFagtABODPeN3apHzR3%2FTfwIyqIwYp4zFr2bxV%2F9%2FAEO%2FYKAGxa35NlQP5WGOK8QBZ%2BD4H6hKrcFifkvfQlqk6dSZ6ZKRRFmNJVM0Tcfcls%2BxCdIrp%2FsYj8cycLYDpIEn1qzDFi4%2BvBjqzAhB9l%2FlvL37HaCu8x6nby6ZyUm38EJLjE4rVGYe%2FlriMT%2FzLtg7v7QGMK0fG1CzgvrMzpj3t6DvIzDYgW3B1TE7kAvYeagv7dtenuvqAQt4VUa%2BLusN5noqIpUjqEUZy8m87cYy%2FeNVKLiMEvRnP1DX%2B0lZBUl4nB5XrKQvahs2%2FVvcVBR77%2BsUZGQ7%2BFhtKYZw0dtrPztmON7o%2F1aCF4pY83SgXC0XXxHubpEI%2FJXQlB6XFfyCSdKxeehUsBYT1KpksuTeBVf%2BW2gRoBJeqiHzIhafnr5vTqiJyMfSOxbuBFXtwCUlx3E2Sx1d7o74%2B5JY01%2F%2FDglj%2BeUpZ8yhKF%2FKVKRQZouqnTmGMoSWaF39PyWVQQLQAYyMYUujHAQoltiCnoUjWtSszcuJPxiGXoiU3uD0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T005856Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA6HNX2OK2EBX744WD%2F20240303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=e005980e1d7f91d73f71a427e3f3a2a9e37f7a5a0f951427a6f2abd461b55d9b'
					}
					heroHeader='Contact Us'
				/>

				<div className='splits'>
					<div className='column column-1'>
						<h2 className='header header-two intro-copy'>
							We would love to hear from you!
						</h2>

						<ul className='unordered-list contact-links'>
							<li className='list-item'>
								<EmailUs dimensions={50} />
								<Link
									className='anchor'
									href='mailto:info@treobytes.com?body=My custom mail body'
								>
									<h2 className='header header-two'>info@treobytes.com</h2>
								</Link>
							</li>
							<li className='list-item'>
								<CallUs dimensions={50} />
								<Link className='anchor' href='tel:+6193338589'>
									<h2 className='header header-two'>619.333.8589</h2>
								</Link>
							</li>
						</ul>
					</div>

					<div className='column column-2'>
						<div className='group'>
							<CommentsWLines dimensions={50} />
							<h5 className='header header-five'>Comments</h5>
						</div>

						<div className='group'>
							<Questions dimensions={50} />
							<h5 className='header header-five'>Questions</h5>
						</div>

						<div className='group'>
							<Inquiries dimensions={50} />
							<h5 className='header header-five'>Inquiries</h5>
						</div>

						<div className='group'>
							<Suggestions dimensions={50} />
							<h5 className='header header-five'>Suggestions</h5>
						</div>

						<div className='group'>
							<Partnerships dimensions={50} />
							<h5 className='header header-five'>Partnerships</h5>
						</div>

						<div className='group'>
							<Edit dimensions={50} />
							<h5 className='header header-five'>Feedback</h5>
						</div>

						<div className='group'>
							<AnythingElse dimensions={50} />
							<h5 className='header header-five'>Anything Else!</h5>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default ContactUs;
