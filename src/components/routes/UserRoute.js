import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { AppContext } from '../../context';
import LoadingToRedirect from '../LoadingToRedirect';

const UserRoute = ({ children }) => {
	const [ok, setOk] = useState(false);
	const router = useRouter();
	const [state] = useContext(AppContext);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (state && state.token) getCurrentUser();
	}, [state && state.token]);

	const getCurrentUser = async () => {
		try {
			const { data } = await axios.get(`/current-user`);

			if (data.ok) setOk(true);
			setLoading(false);
		} catch (err) {
			router.push('/admin/signin');
			console.error(`'Error getting current user in UserRoute:${err}`);
		}
	};

	if (typeof window !== 'undefined' && !state) {
		setTimeout(() => {
			router.push('/admin/signin');
		}, 1000);
	}

	if (loading) return <LoadingToRedirect />;

	// TODO: Create a loading page for this
	// refer to modal
	return !ok ? (
		<h2 className='header-two'>...Loading UserRoute</h2>
	) : (
		<>{children}</>
	);
};

export default UserRoute;
