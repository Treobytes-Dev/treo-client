import { useContext, useState } from 'react';
import { AppContext } from '../../context';
// layout
import AdminLayout from '../../components/AdminLayout';
// hooks
import useNumbers from '../../hooks/useNumbers';
import useLatestPosts from '../../hooks/useLatestPosts';
import useCategory from '../../hooks/useCategory';
import useGetPages from '../../hooks/useGetPages';
// next
import Link from 'next/link';
// icons
import { CarrotDown } from '../../assets/icons/CarrotDown.js';

const Admin = ({ componentName }) => {
	const [state] = useContext(AppContext);
	// local state
	const [isPostsVisible, setIsPostVisible] = useState(false);
	const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);

	// hooks
	const { numbers } = useNumbers();
	const { latestPosts } = useLatestPosts();
	const { categories } = useCategory();
	const { pages } = useGetPages();

	console.log('pages => ', pages);

	return (
		<AdminLayout
			children={
				<div className={`${componentName} main`}>
					<h1 className='header-one'>Dashboard</h1>
					<h5 className='header-five'>
						Hello {state && state.user && state.user.name}
					</h5>
					<div className='group one'>
						<Link className='stat' href='/admin/posts'>
							<button className='button edit'>Posts: {numbers.posts}</button>
						</Link>

						<Link className='stat' href='/admin/comments'>
							<button className='button edit'>
								Comments: {numbers.comments}
							</button>
						</Link>

						<Link className='stat' href='/admin/categories'>
							<button className='button edit'>
								Categories: {numbers.categories}
							</button>
						</Link>

						<Link className='stat' href='/admin/users'>
							<button className='button edit'>Users: {numbers.users}</button>
						</Link>
					</div>

					<div className='group two'>
						<div className='column one'>
							<button
								className='btn'
								style={{ display: 'flex', flexDirection: 'row' }}
								onClick={() => setIsPostVisible(!isPostsVisible)}
							>
								<h5 className='header-five'>Blog Posts </h5>
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

							{!isPostsVisible && (
								<div className='list'>
									{!isPostsVisible &&
										latestPosts.map((post) => (
											<Link
												className='anchor'
												href={`/post/${post.slug}`}
												key={post._id}
												style={{ display: 'flex' }}
											>
												{post.title}
											</Link>
										))}
								</div>
							)}
						</div>

						<div className='column two'>
							<button
								className='btn'
								style={{ display: 'flex', flexDirection: 'row' }}
								onClick={() => setIsCategoriesVisible(!isCategoriesVisible)}
							>
								<h5 className='header-five'>Categories</h5>
								{isCategoriesVisible ? (
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

							{!isCategoriesVisible && (
								<div className='list'>
									{!isCategoriesVisible &&
										categories.map((c) => (
											<Link
												className='anchor'
												href={`/category/${c.slug}`}
												key={c._id}
												style={{ display: 'flex' }}
											>
												{c.name}
											</Link>
										))}
								</div>
							)}
						</div>
					</div>
				</div>
			}
		/>
	);
};

Admin.defaultProps = {
	componentName: 'dashboard',
};
export default Admin;
