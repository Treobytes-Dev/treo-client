import { useRouter } from 'next/router';
import { func, object, bool } from 'prop-types';
import Link from 'next/link';
import { CarrotDown } from '../assets/icons/CarrotDown.js';
import { Close } from '../assets/icons/Close.js';
import Avatar from '../assets/icons/Avatar.js';
import Dashboard from '../assets/icons/Dashboard.js';
import Media from '../assets/icons/Media.js';
import Pages from '../assets/icons/Pages.js';
import Widgets from '../assets/icons/Widgets.js';
import Posts from '../assets/icons/Posts.js';
import Users from '../assets/icons/Users.js';
import Comments from '../assets/icons/Comments.js';
import Menu from '../assets/icons/Menu.js';

const SideNav = ({
	componentName,
	state,
	isPostsVisible,
	setIsPostVisible,
	isMediaVisible,
	setIsMediaVisible,
	isUsersVisible,
	setIsUsersVisible,
	isPagesVisible,
	setIsPagesVisible,
	isMenuVisible,
	setIsMenuVisible,
}) => {
	const router = useRouter();
	const currentURL = router.asPath;

	return (
		<div className={`${componentName} ${isMenuVisible ? 'slim' : 'open'}`}>
			{isMenuVisible && (
				<>
					<div
						className='trigger'
						data-test-id='trigger'
						onClick={() => {
							setIsMenuVisible(!isMenuVisible);
						}}
					>
						<Menu />
					</div>

					<ul className='unordered-list'>
						<li className='list-item'>
							<Link
								href='/admin/dashboard'
								className={
									currentURL === '/admin/dashboard'
										? `nav-link current`
										: 'nav-link'
								}
							>
								<Dashboard />
							</Link>
						</li>

						<li className='list-item'>
							<Link
								href='/admin/posts'
								className={
									currentURL === '/admin/posts'
										? `nav-link current`
										: 'nav-link'
								}
							>
								<Posts />
							</Link>
						</li>

						<li className='list-item'>
							<Link
								href='/admin/media/library'
								className={
									currentURL === '/admin/media/library'
										? `nav-link current`
										: 'nav-link'
								}
							>
								<Media />
							</Link>
						</li>

						<li className='list-item'>
							<Link
								href='/admin/comments'
								className={
									currentURL === '/admin/comments'
										? `nav-link current`
										: 'nav-link'
								}
							>
								<Comments />
							</Link>
						</li>

						<li className='list-item'>
							<Link
								href='/admin/users'
								className={
									currentURL === '/admin/users'
										? `nav-link current`
										: 'nav-link'
								}
							>
								<Users />
							</Link>
						</li>

						<li className='list-item'>
							<Link
								href='/admin/pages'
								className={
									currentURL === '/admin/pages'
										? `nav-link current`
										: 'nav-link'
								}
							>
								<Pages />
							</Link>
						</li>

						<li className='list-item'>
							<Link
								href={`/admin/profile/${state?.user?._id}`}
								className={
									currentURL === `/admin/profile/${state?.user?._id}`
										? `nav-link current icon`
										: 'nav-link'
								}
							>
								<Avatar />
							</Link>
						</li>
					</ul>
				</>
			)}

			{!isMenuVisible && (
				<>
					<div className='header'>
						<i
							className='icon-right'
							data-test-id='icon-right'
							onClick={() => setIsMenuVisible(!isMenuVisible)}
						>
							<Close />
						</i>
					</div>
					<div className='wrapper'>
						<div className='wrapper-content'>
							<ul
								className={`unordered-list ${
									currentURL === '/admin/dashboard' ? `current` : ''
								}`}
							>
								<li className='list-item'>
									<Link
										href='/admin/dashboard'
										className={
											currentURL === '/admin/dashboard'
												? `nav-link current`
												: 'nav-link'
										}
									>
										<Dashboard />
										<h6 className='header header-six'>Dashboard</h6>
									</Link>
								</li>
							</ul>
							<>
								{/* POSTS */}
								{/* admin and author  */}
								{state && state?.user?.role !== 'subscriber' && (
									<ul className='unordered-list'>
										<li className='list-item'>
											<button
												className='btn'
												onClick={() => setIsPostVisible(!isPostsVisible)}
											>
												<Posts />
												<h6 className='header header-six'>Posts</h6>
												{isPostsVisible ? (
													<CarrotDown
														fill='#333'
														viewBox='0 96 960 960'
														dimensions='20'
													/>
												) : (
													<div style={{ transform: 'rotate(180deg)' }}>
														<CarrotDown
															fill='#333'
															viewBox='0 96 960 960'
															dimensions='20'
														/>
													</div>
												)}
											</button>
										</li>
										{!isPostsVisible && (
											<>
												<li className='list-item'>
													<Link
														href='/admin/posts'
														className={
															currentURL === '/admin/posts'
																? `nav-link current`
																: 'nav-link'
														}
													>
														All Posts
													</Link>
												</li>

												<li className='list-item'>
													<Link
														href='/admin/posts/new'
														className={
															currentURL === '/admin/posts/new'
																? `nav-link current`
																: 'nav-link'
														}
													>
														Add New
													</Link>
												</li>
												<li className='list-item'>
													<Link
														href='/admin/categories'
														className={
															currentURL === '/admin/categories'
																? `nav-link current`
																: 'nav-link'
														}
													>
														Categories
													</Link>
												</li>
											</>
										)}
									</ul>
								)}

								{/* MEDIA */}
								{/* admin and author  */}

								{state && state?.user?.role !== 'subscriber' && (
									<ul className='unordered-list'>
										<li className='list-item'>
											<button
												className='btn'
												onClick={() => setIsMediaVisible(!isMediaVisible)}
											>
												<Media />
												<h6 className='header header-six'>Media</h6>
												{isMediaVisible ? (
													<CarrotDown
														fill='#333'
														viewBox='0 96 960 960'
														dimensions='20'
													/>
												) : (
													<div style={{ transform: 'rotate(180deg)' }}>
														<CarrotDown
															fill='#333'
															viewBox='0 96 960 960'
															dimensions='20'
														/>
													</div>
												)}
											</button>
										</li>

										{!isMediaVisible && (
											<>
												<li className='list-item'>
													<Link
														href='/admin/media/library'
														className={
															currentURL === '/admin/media/library'
																? `nav-link current`
																: 'nav-link'
														}
													>
														Library
													</Link>
												</li>
												<li className='list-item'>
													<Link
														href='/admin/media/new'
														className={
															currentURL === '/admin/media/new'
																? `nav-link current`
																: 'nav-link'
														}
													>
														Add New
													</Link>
												</li>
											</>
										)}
									</ul>
								)}

								{/* COMMENTS */}
								{/* admin and author  */}
								{state && state?.user?.role !== 'subscriber' && (
									<ul
										className={`unordered-list ${
											currentURL === '/admin/comments' ? `current` : ''
										}`}
									>
										<li className='list-item'>
											<Link
												href='/admin/comments'
												className={
													currentURL === '/admin/comments'
														? `nav-link current`
														: 'nav-link'
												}
											>
												<Comments />
												<h6 className='header header-six'>Comments</h6>
											</Link>
										</li>
									</ul>
								)}

								{/* USERS */}
								{/* admin   */}
								{state && state?.user?.role === 'admin' && (
									<ul className='unordered-list'>
										<li className='list-item'>
											<button
												className='btn'
												onClick={() => setIsUsersVisible(!isUsersVisible)}
											>
												<Users />
												<h6 className='header header-six'>Users</h6>
												{isUsersVisible ? (
													<CarrotDown
														fill='#333'
														viewBox='0 96 960 960'
														dimensions='20'
													/>
												) : (
													<div style={{ transform: 'rotate(180deg)' }}>
														<CarrotDown
															fill='#333'
															viewBox='0 96 960 960'
															dimensions='20'
														/>
													</div>
												)}
											</button>
										</li>

										{!isUsersVisible && (
											<>
												<li className='list-item'>
													<Link
														href='/admin/users'
														className={
															currentURL === '/admin/users'
																? `nav-link current`
																: 'nav-link'
														}
													>
														All Users
													</Link>
												</li>
												<li className='list-item'>
													<Link
														href='/admin/users/new'
														className={
															currentURL === '/admin/users/new'
																? `nav-link current`
																: 'nav-link'
														}
													>
														Add New
													</Link>
												</li>
											</>
										)}
									</ul>
								)}

								{/* Pages */}
								{/* admin and author  */}
								{state && state?.user?.role !== 'subscriber' && (
									<ul className='unordered-list'>
										<li className='list-item'>
											<button
												className='btn'
												onClick={() => setIsPagesVisible(!isPagesVisible)}
											>
												<Pages />
												<h6 className='header header-six'>Pages</h6>
												{isPagesVisible ? (
													<CarrotDown
														fill='#333'
														viewBox='0 96 960 960'
														dimensions='20'
													/>
												) : (
													<div style={{ transform: 'rotate(180deg)' }}>
														<CarrotDown
															fill='#333'
															viewBox='0 96 960 960'
															dimensions='20'
														/>
													</div>
												)}
											</button>
										</li>

										{!isPagesVisible && (
											<>
												<li className='list-item'>
													<Link
														href='/admin/pages'
														className={
															currentURL === '/admin/pages'
																? `nav-link current`
																: 'nav-link'
														}
													>
														All Pages
													</Link>
												</li>
												<li className='list-item'>
													<Link
														href='/admin/pages/new'
														className={
															currentURL === '/admin/pages/new'
																? `nav-link current`
																: 'nav-link'
														}
													>
														Create
													</Link>
												</li>
												<li className='list-item'>
													<Link
														href='/admin/pages/menus'
														className={
															currentURL === '/admin/pages/menus'
																? `nav-link current`
																: 'nav-link'
														}
													>
														Menus
													</Link>
												</li>
											</>
										)}
									</ul>
								)}

								{/* Widgets */}
								{/* admin and author  */}
								{state && state?.user?.role !== 'subscriber' && (
									<ul
										className={`unordered-list ${
											currentURL === '/admin/widgets' ? `current` : ''
										}`}
									>
										<li className='list-item'>
											<Link
												href='/admin/widgets'
												className={
													currentURL === '/admin/widgets'
														? `nav-link current`
														: 'nav-link'
												}
											>
												<Widgets />
												<h6 className='header header-six'>Widgets</h6>
											</Link>
										</li>
									</ul>
								)}
							</>
						</div>

						<div
							className='wrapper-content'
							style={{ borderTop: '1px solid #ced4da' }}
						>
							{/* PROFILE */}
							{/* admin and author  */}
							{state && state?.user?.role !== 'subscriber' && (
								<ul className='unordered-list'>
									<li className='list-item'>
										<Link
											href={`/admin/profile/${state?.user?._id}`}
											className={
												currentURL === `/admin/profile/${state?.user?._id}`
													? `nav-link current icon`
													: 'nav-link'
											}
										>
											<Avatar />
										</Link>
									</li>
								</ul>
							)}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

SideNav.propTypes = {
	state: object.isRequired,
	isPostsVisible: bool.isRequired,
	setIsPostVisible: func.isRequired,
	isMediaVisible: bool.isRequired,
	setIsMediaVisible: func.isRequired,
	isUsersVisible: bool.isRequired,
	setIsUsersVisible: func.isRequired,
	isPagesVisible: bool.isRequired,
	setIsPagesVisible: func.isRequired,
	isMenuVisible: bool.isRequired,
	setIsMenuVisible: func.isRequired,
};

SideNav.defaultProps = {
	componentName: 'side-nav',
};

export default SideNav;
