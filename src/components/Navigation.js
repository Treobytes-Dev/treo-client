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
	const pages = [
		{
			title: 'Programs',
			links: [
				{
					title: 'Summer Camps',
					url: '/programs',
				},
				{
					title: 'Our Curriculum',
					url: '/our-curriculum',
				},
				{
					title: 'Our Approach',
					url: '/our-approach',
				},
			],
		},
		{
			title: 'About',
			links: [
				{
					title: 'Our Story',
					url: '/our-story',
				},
				{
					title: 'Our Team',
					url: '/our-team',
				},
				{
					title: 'Our Mission',
					url: '/our-mission',
				},
			],
		},
		{
			title: 'Students',
			links: [
				{
					title: 'Student Life',
					url: '/student-life',
				},
				{
					title: 'Student Projects',
					url: '/student-projects',
				},
				{
					title: 'Student Stories',
					url: '/student-stories',
				},
			],
		},
		{
			title: 'Parents',
			links: [
				{
					title: 'Parent Resources',
					url: '/parent-resources',
				},
				{
					title: 'Parent Testimonials',
					url: '/parent-testimonials',
				},
			],
		},
		{
			title: 'Partner with Us',
			links: [
				{
					title: 'Partners',
					url: '/partners',
				},
				{
					title: 'Sponsorship',
					url: '/sponsorship',
				},
				{
					title: 'Collaboration',
					url: '/collaboration',
				},
			],
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
				{}
				<li className='list-item'>
					<Link
						href='/programs'
						className={current === '/programs' ? `nav-link active` : 'nav-link'}
					>
						Programs
					</Link>
				</li>

				<li className='list-item'>
					<Link
						href='/about'
						className={current === '/about' ? `nav-link active` : 'nav-link'}
					>
						About
					</Link>
				</li>

				<li className='list-item'>
					<Link
						href='/students'
						className={current === '/students' ? `nav-link active` : 'nav-link'}
					>
						Students
					</Link>
				</li>

				<li className='list-item'>
					<Link
						href='/parents'
						className={current === '/parents' ? `nav-link active` : 'nav-link'}
					>
						Parents
					</Link>
				</li>

				<li className='list-item'>
					<Link
						href='/partner-with-us'
						className={
							current === '/partner-with' ? `nav-link active` : 'nav-link'
						}
					>
						Partner with us
					</Link>
				</li>
			</ul>

			{!!state && (
				<>
					<button
						className='user-options'
						onClick={() => setIsLoggedIn(!isLoggedIn)}
					>
						<Avatar />

						{isLoggedIn && (
							<ul className='unordered-list'>
								<li className='list-item'>
									<Link
										href='/admin/dashboard'
										className={
											current === '/admin/dashboard'
												? `nav-link active`
												: 'nav-link'
										}
									>
										{state?.user?.role}
									</Link>
								</li>
								<li className='list-item'>
									<a onClick={logout} className='anchor log-out'>
										Log out
									</a>
								</li>
							</ul>
						)}
					</button>
				</>
			)}
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
