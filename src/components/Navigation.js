import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { AppContext } from '../context';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';

import Avatar from '../assets/icons/Avatar.js';
import Logo from '../assets/icons/Logo.js';

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

	return (
		<div className='navigation'>
			{loading && <div className='loader'>Loading...</div>}
			{!!errorMsg && (
				<div
					className='error'
					style={{ backgroundColor: 'red', color: 'white' }}
				>
					{errorMsg}
				</div>
			)}

			<ul className='unordered-list base-options'>
				<li className='list-item'>
					<Link
						href='/'
						className={`logo ${
							current === '/' ? `nav-link active` : 'nav-link'
						}`}
						style={{ width: '300px' }}
					>
						<Logo />
					</Link>
				</li>

				<li className='list-item'>
					<Link
						href='/blog'
						className={current === '/blog' ? `nav-link active` : 'nav-link'}
					>
						Blog
					</Link>
				</li>

				{page?.pages?.map((page) => {
					return (
						<li className='list-item' key={page._id}>
							<Link
								href={`/${page.slug}`}
								className={
									current === `/${page.slug}` ? `nav-link active` : 'nav-link'
								}
							>
								{page.title}
							</Link>
						</li>
					);
				})}
			</ul>

			{!!state && (
				<>
					<div className='user-options'>
						<button className='btn' onClick={() => setIsLoggedIn(!isLoggedIn)}>
							<Avatar />
						</button>

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
					</div>
				</>
			)}
		</div>
	);
};

export default Navigation;
