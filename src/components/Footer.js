import { useEffect, useState } from 'react';
import Link from 'next/link';

import { Instagram } from '../assets/icons/Instagram.js';
import { Facebook } from '../assets/icons/Facebook.js';
import { LinkedIn } from '../assets/icons/LinkedIn.js';

const Footer = ({ componentName = 'footer' }) => {
	// local
	const [current, setCurrent] = useState();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setCurrent(window.location.pathname);
		}
	}, []);

	const footerLinks = [
		{
			id: 44,
			url: '/help-center',
			linkName: 'Help Center',
			position: '1',
			subItems: [],
			editable: false,
		},
	];

	const currentYear = new Date().getFullYear();

	return (
		<div className={componentName}>
			<ul className='unordered-list base-options col-1'>
				<li className='list-item'>
					<p className='paragraph'>961 S 16th St</p>
				</li>

				<li className='list-item'>
					<p className='paragraph'>San Diego, CA 92113</p>
				</li>

				<li className='list-item'>
					<p className='paragraph'>Barrio Logan</p>
				</li>
			</ul>

			<ul className='unordered-list base-options col-2'>
				<li className='list-item'>
					<p className='paragraph'>
						Copyright {`\u00A9`} Treobytes {currentYear}
					</p>
				</li>

				<li className='list-item'>
					<p className='paragraph'>EIN 46-3992953</p>
				</li>

				<div className='icons'>
					<li className='list-item'>
						<Link
							className='nav-link'
							href='https://www.instagram.com/treobytes/?hl=en'
						>
							<Instagram fill='#fff' />
						</Link>
					</li>

					<li className='list-item'>
						<Link
							className='nav-link'
							href='https://www.facebook.com/treobytes'
						>
							<Facebook fill='#fff' />
						</Link>
					</li>

					<li className='list-item'>
						<Link
							className='nav-link'
							href='https://www.linkedin.com/company/treobytes'
						>
							<LinkedIn fill='#fff' />
						</Link>
					</li>
				</div>
			</ul>

			<ul className='unordered-list base-options col-3'>
				{footerLinks.map((link) => (
					<li className='list-item' key={link.id}>
						<Link
							href={link.url}
							className={current === link.url ? `nav-link active` : 'nav-link'}
						>
							{link.linkName}
						</Link>
					</li>
				))}
				<li className='list-item'>
					<Link
						className='nav-link'
						href='mailto:info@treobytes.com?body=My custom mail body'
					>
						info@treobytes.com
					</Link>
				</li>
				<li className='list-item'>
					<Link className='nav-link' href='tel:+6193338589'>
						619.333.8589
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
