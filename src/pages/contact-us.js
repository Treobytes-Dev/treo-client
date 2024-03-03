import Head from 'next/head';

// components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { TemplateIntro } from '../components/TemplateIntro';

const ContactUs = ({ componentName }) => {
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
						'https://treo-assets.s3.us-west-2.amazonaws.com/contact-us-hero.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIB18I97zjx57BpICqBgLzITjrQxWeFioKo0Sc9OVSWN8AiEApvIzLiIEXOQZGP78rEwygEL8s9puwsnbmS%2FOsbMm%2B%2FAq5AIIUhACGgw5NzgwMjc0NDI4NjgiDILKS1NK6q93wsy0OyrBAhGe1CoO%2FP4QWPtciQyYt6KDcne1jvRtHr4bZtUSedxUpnngzmN7kT%2Bwo33%2Fz0cp4d7AjkKOrm50e9OEwvBMEStdoAkLVWwPdI2e1%2BBf0PeMsBVYUcrp7s71cy36ZShaPXngZXK9ivfkVWmuiXdp71nimM0dwAs%2BieQcRoxuKAhAgGMUmR0PKlrHydY1CcZTxwywjH5YH7X%2BfZWbQQ7%2BH4sAmD6QARo4w18YjIFhWEBQjGcqJso59d5mJOm6hjVXLnpVBXtjRW8bxH%2FSwlZ00gxazkapBNQyrLhyYcPwlFVFagtABODPeN3apHzR3%2FTfwIyqIwYp4zFr2bxV%2F9%2FAEO%2FYKAGxa35NlQP5WGOK8QBZ%2BD4H6hKrcFifkvfQlqk6dSZ6ZKRRFmNJVM0Tcfcls%2BxCdIrp%2FsYj8cycLYDpIEn1qzDFi4%2BvBjqzAhB9l%2FlvL37HaCu8x6nby6ZyUm38EJLjE4rVGYe%2FlriMT%2FzLtg7v7QGMK0fG1CzgvrMzpj3t6DvIzDYgW3B1TE7kAvYeagv7dtenuvqAQt4VUa%2BLusN5noqIpUjqEUZy8m87cYy%2FeNVKLiMEvRnP1DX%2B0lZBUl4nB5XrKQvahs2%2FVvcVBR77%2BsUZGQ7%2BFhtKYZw0dtrPztmON7o%2F1aCF4pY83SgXC0XXxHubpEI%2FJXQlB6XFfyCSdKxeehUsBYT1KpksuTeBVf%2BW2gRoBJeqiHzIhafnr5vTqiJyMfSOxbuBFXtwCUlx3E2Sx1d7o74%2B5JY01%2F%2FDglj%2BeUpZ8yhKF%2FKVKRQZouqnTmGMoSWaF39PyWVQQLQAYyMYUujHAQoltiCnoUjWtSszcuJPxiGXoiU3uD0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T004347Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA6HNX2OK2EBX744WD%2F20240303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=524d44805e74e7b1c3adc18e790459366a71a5f66f43df604bc4c4b06af92ab4'
					}
					heroHeader='Contact Us'
				/>
				<Footer />
			</div>
		</>
	);
};

ContactUs.defaultProps = {
	componentName: 'contact-us',
};

export default ContactUs;
