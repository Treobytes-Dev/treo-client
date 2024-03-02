import { useEffect, useState } from 'react';
import { string } from 'prop-types';
import { useRouter } from 'next/router';
import { Loader } from '../assets/icons/Loader';

const LoadingToRedirect = ({ path }) => {
	const [count, setCount] = useState(3);
	const router = useRouter();

	useEffect(() => {
		const interval = setInterval(() => {
			setCount(count - 1);
		}, 1000);

		if (count === 0) {
			clearInterval(interval);
			router.push(path);
		}

		return () => clearInterval(interval);
	}, [count]);

	return (
		<div className='loading-to-redirect'>
			<h4 className='header header-four'>{count} seconds</h4>
			<div className='wrapper'>
				<Loader />
			</div>
		</div>
	);
};

LoadingToRedirect.propTypes = {
	path: string,
};

LoadingToRedirect.defaultProps = {
	path: '/',
};

export default LoadingToRedirect;
