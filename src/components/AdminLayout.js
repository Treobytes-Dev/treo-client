import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import { node } from 'prop-types';

import UserRoute from './routes/UserRoute';

import Navigation from '../components/Navigation';
import SideNav from '../components/SideNav';

const AdminLayout = ({ componentName, children }) => {
	// context
	const [state] = useContext(AppContext);
	// local state
	const [isPostsVisible, setIsPostVisible] = useState(false);
	const [isMediaVisible, setIsMediaVisible] = useState(false);
	const [isUsersVisible, setIsUsersVisible] = useState(false);
	const [isPagesVisible, setIsPagesVisible] = useState(false);
	const [isMenuVisible, setIsMenuVisible] = useState(false);

	const [windowWidth, setWindowWidth] = useState(0); // initialize with a default value, like 0

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

	return (
		<UserRoute>
			<Navigation />
			<div className={componentName}>
				<SideNav
					state={state}
					isPostsVisible={isPostsVisible}
					setIsPostVisible={setIsPostVisible}
					isMediaVisible={isMediaVisible}
					setIsMediaVisible={setIsMediaVisible}
					isUsersVisible={isUsersVisible}
					setIsUsersVisible={setIsUsersVisible}
					isPagesVisible={isPagesVisible}
					setIsPagesVisible={setIsPagesVisible}
					isMenuVisible={isMenuVisible}
					setIsMenuVisible={setIsMenuVisible}
				/>
				{windowWidth < 768 && isMenuVisible && children}
				{windowWidth > 768 && children}
			</div>
		</UserRoute>
	);
};

AdminLayout.propTypes = {
	children: node.isRequired,
};

AdminLayout.defaultProps = {
	componentName: 'layout',
};

export default AdminLayout;
