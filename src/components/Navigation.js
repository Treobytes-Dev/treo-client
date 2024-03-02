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

const Navigation = () => {
	// context
	const [state, setState, page, setPage] = useContext(AppContext);
	// local
	const [current, setCurrent] = useState();
	const [loading, setLoading] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [windowWidth, setWindowWidth] = useState(0); // initialize with a default value, like 0

	const router = useRouter();
	const navLinks = [
		{
			id: 44,
			url: '/programs/summer-camps',
			linkName: 'Programs',
			position: '1',
			subItems: [
				{
					subLinkName: 'Summer Camps',
					subUrlName: '/programs/summer-camps',
				},
				{
					subLinkName: 'Scholars Program',
					subUrlName: '/programs/scholars-program',
				},
				{
					subLinkName: 'Workshops',
					subUrlName: '/programs/workshops',
				},
			],
			editable: false,
		},
		{
			id: 64,
			url: '/about/our-story',
			linkName: 'About',
			position: '2',
			subItems: [
				{
					subLinkName: 'Our Story',
					subUrlName: '/about/our-story',
				},
				{
					subLinkName: 'Leadership',
					subUrlName: '/about/leadership',
				},
				{
					subLinkName: 'Accomplishments',
					subUrlName: '/about/accomplishments',
				},
			],
			editable: false,
		},
		{
			id: 17,
			url: '/students',
			linkName: 'Students',
			position: '3',
			subItems: [],
			editable: false,
		},
		{
			id: 20,
			url: '/parents',
			linkName: 'Parents',
			position: '4',
			subItems: [],
			editable: false,
		},
		{
			id: 93,
			url: '/partner-with-us/districts',
			linkName: 'Partner with us',
			position: '5',
			subItems: [
				{
					subLinkName: 'Districts',
					subUrlName: '/partner-with-us/districts',
				},
				{
					subLinkName: 'Corporate',
					subUrlName: '/partner-with-us/corporate',
				},
				{
					subLinkName: 'Colleges',
					subUrlName: '/partner-with-us/colleges',
				},
				{
					subLinkName: 'Foundations',
					subUrlName: '/partner-with-us/foundations',
				},
				{
					subLinkName: 'Donate',
					subUrlName: '/partner-with-us/donate',
				},
			],
			editable: false,
		},
	];

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setCurrent(window.location.pathname);
		}
	}, []);

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

	const renderNavContent = () => (
		<>
			<ul className='unordered-list base-options'>
				{navLinks.map((link) => (
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
		</>
	);

	return (
		<div className='navigation'>
			{loading && (
				<div className='loader'>
					<Loader />
				</div>
			)}
			{!!errorMsg && (
				<div
					className='error'
					style={{ backgroundColor: 'red', color: 'white' }}
				>
					{errorMsg}
				</div>
			)}
			<Link
				href='/'
				className={`logo ${current === '/' ? `nav-link active` : 'nav-link'}`}
				style={{ width: '300px' }}
			>
				<Logo />
			</Link>

			{windowWidth < 768 && (
				<MobileMenu
					trigger='Click me'
					leftIconClose='Left Close'
					children={renderNavContent()}
				/>
			)}
			{windowWidth > 768 && renderNavContent()}
		</div>
	);
};

export default Navigation;
