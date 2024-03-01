import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { AppContext } from '../context';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';

import { MobileMenu } from './MobileMenu.js';
import Avatar from '../assets/icons/Avatar.js';
import Logo from '../assets/icons/Logo.js';
import { Loader } from '../assets/icons/Loader.js';

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
	const [loading, setLoading] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [windowWidth, setWindowWidth] = useState(0); // initialize with a default value, like 0

	const router = useRouter();
	const { pages } = page;

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setCurrent(window.location.pathname);
		}
	}, []);

	useEffect(() => {
		if (state?.token) fetchPages();
	}, [state?.token]);

	useEffect(() => {
		// Ensure the code runs only in the client-side
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleResize);

			// Set the initial width
			setWindowWidth(window.innerWidth);

			// Cleanup
			return () => window.removeEventListener('resize', handleResize);
		}
	}, []);

	const fetchPages = async () => {
		setLoading(true);

		try {
			const { data } = await axios.get('/pages-all');

			setLoading(false);
			setPage((prev) => ({ ...prev, pages: data }));
		} catch (err) {
			setLoading(false);
			setErrorMsg('Unable to fetch pages.');
			console.error(`Unable to fetch pages. ${err}`);
		}
	};

	const logout = () => {
		try {
			axios.get(`/signout`);

			window.localStorage.removeItem('auth');
			Cookies.remove('token');
			setState(null);
			router.push('/admin/signin');
		} catch (err) {
			console.error(err.response.data);
		}
	};

	const allPages = page?.pages?.map((page) => {
		return (
			<li className='list-item' key={page._id}>
				<Link
					href={`/admin/pages/${page.slug}`}
					className={
						current === `/admin/pages/${page.slug}`
							? `nav-link active`
							: 'nav-link'
					}
				>
					{page.name}
				</Link>
			</li>
		);
	});

	const currentYear = new Date().getFullYear();

	return (
		<div className='footer'>
			<p className='paragraph'>
				{`\u00A9`} {currentYear} Treobytes. All rights reserved
			</p>
			<ul className='unordered-list base-options'>
				<li className='list-item'>
					<Link
						href='/help-center'
						className={
							current === '/help-center' ? `nav-link active` : 'nav-link'
						}
					>
						Help Center
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
