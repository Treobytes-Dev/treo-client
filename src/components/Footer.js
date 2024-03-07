import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { AppContext } from '../context';
import { useRouter } from 'next/router';

import { Instagram } from '../assets/icons/Instagram.js';
import { Facebook } from '../assets/icons/Facebook.js';

// todo:
// create CRUD functionality to add pages
// functionality to order pages in the navigation
// create CRUD functionality to add pages to a title in the navigation
// functionality to order pages in the navigation
// create CRUD functionality to add pages to a title in the footer
// treobytes create CRUD functionality to add link and image to sponsor component

const Footer = () => {
	// context
	const [state, setState, page, setPage] = useContext(AppContext);
	// local
	const [current, setCurrent] = useState();

	const router = useRouter();

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
		<div className='footer'>
			<p className='paragraph'>
				{`\u00A9`} {currentYear} Treobytes. All rights reserved
			</p>
			<ul className='unordered-list base-options'>
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
			</ul>

			<ul className='unordered-list base-options'>
				<li className='list-item'>
					<Link
						className={
							current === '/contact-us' ? `nav-link active` : 'nav-link'
						}
						href='/contact-us'
					>
						Contact Us
					</Link>
				</li>
				<li className='list-item'>
					{/* <Link href={mailto:}></Link> */}
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

				<li className='list-item'>
					<Link
						className='nav-link'
						href='https://www.instagram.com/treobytes/?hl=en'
					>
						<Instagram fill='#fff' />
						<div className='copy'>Instagram</div>
					</Link>
				</li>

				<li className='list-item'>
					<Link className='nav-link' href='https://www.facebook.com/treobytes'>
						<Facebook fill='#fff' />
						<div className='copy'>Facebook</div>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
