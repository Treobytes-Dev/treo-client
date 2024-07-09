import { use, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { AppContext } from '../context';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';

import { MobileMenu } from './MobileMenu.js';
import Avatar from '../assets/icons/Avatar.js';
import Logo from '../assets/icons/Logo.js';
import { Loader } from '../assets/icons/Loader.js';
import { CarrotDown } from '../assets/icons/CarrotDown.js';

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
	const [highlightIndex, setHighlightIndex] = useState('');
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
					subLinkName: 'After School Enrichment',
					subUrlName: '/programs/after-school-enrichment',
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
					subLinkName: 'Our Team',
					subUrlName: '/about/our-team',
				},
				{
					subLinkName: 'Accomplishments',
					subUrlName: '/about/accomplishments',
				},
			],
			editable: false,
		},

		{
			id: 20,
			url: '/donate',
			linkName: 'Donate',
			position: '3',
			subItems: [],
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

	useEffect(() => {}, [highlightIndex]);

	const handleDisplaySubOptions = (e) => {
		console.log('e', highlightIndex);
		setHighlightIndex(e.target.innerText);
	};

	const handleHideSubOptions = () => {
		setHighlightIndex('');
	};

	const renderNavContent = () => (
		<nav className='nav'>
			<ul className='unordered-list base-options'>
				{/* mobile first */}
				{windowWidth < 768
					? navLinks.map((link) => (
							<li
								className='list-item '
								key={link.id}
								onMouseEnter={handleDisplaySubOptions}
								onMouseLeave={handleHideSubOptions}
							>
								<Link
									href={link.url}
									className={
										current === link.url ? `nav-link current` : 'nav-link'
									}
								>
									<p className='paragraph'>{link.linkName}</p>
									{link?.subItems?.length > 0 && (
										<CarrotDown
											fill='#333'
											viewBox='0 96 960 960'
											dimensions='20'
										/>
									)}
								</Link>
								{link?.subItems?.length > 0 && (
									<ul className='unordered-list sub-options'>
										{link.subItems.map((subLink) => (
											<li className='list-item' key={subLink.subLinkName}>
												<Link
													href={subLink.subUrlName}
													className={
														current === subLink.subUrlName
															? `nav-link current`
															: 'nav-link'
													}
												>
													{subLink.subLinkName}
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
					  ))
					: navLinks.map((link) => (
							// desktop
							<li
								className={`list-item ${
									link.linkName === highlightIndex ? 'highlight' : ''
								}`}
								key={link.id}
								onMouseEnter={handleDisplaySubOptions}
								onMouseLeave={handleHideSubOptions}
							>
								<Link
									href={link.url}
									className={
										current === link.url ? `nav-link current` : 'nav-link'
									}
								>
									<p className='paragraph'>{link.linkName}</p>
									{link?.subItems?.length > 0 && (
										<CarrotDown
											fill='#333'
											viewBox='0 96 960 960'
											dimensions='20'
										/>
									)}
								</Link>

								{link?.subItems?.length > 0 && (
									<ul className='unordered-list sub-options'>
										{link.linkName === highlightIndex &&
											link.subItems.map((subLink) => (
												<li className='list-item' key={subLink.subLinkName}>
													<Link
														href={subLink.subUrlName}
														className={
															current === subLink.subUrlName
																? `nav-link current`
																: 'nav-link'
														}
													>
														{subLink.subLinkName}
													</Link>
												</li>
											))}
									</ul>
								)}
							</li>
					  ))}
			</ul>
		</nav>
	);

	return (
		<header className='navigation'>
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
				className={`wrapper-logo ${
					current === '/' ? `nav-link current` : 'nav-link'
				}`}
				style={{ width: '300px' }}
			>
				<Logo />
			</Link>

			{windowWidth < 768 && <MobileMenu children={renderNavContent()} />}
			{windowWidth > 768 && renderNavContent()}
		</header>
	);
};

export default Navigation;
