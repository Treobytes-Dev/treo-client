import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [state, setState] = useState({
		user: {},
		token: '',
	});

	const [post, setPost] = useState({
		categories: [],
		posts: [],
	});

	const [media, setMedia] = useState({
		images: [],
		selected: null,
	});

	const [page, setPage] = useState({
		pages: [],
	});

	useEffect(() => {
		setState(JSON.parse(window.localStorage.getItem('auth')));
	}, []);

	const router = useRouter();

	const token = state && state.token ? state.token : '';
	axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

	axios.interceptors.response.use(
		function (response) {
			// Do something before request is sent
			return response;
		},
		function (error) {
			// Do something with request error
			let res = error.response;
			// res.status === 401 && res.config && !res.config.__isRetryRequest

			if (
				error.response === 401 &&
				res.config &&
				!res.config.__isRetryRequest
			) {
				// setState(null);
				// window.localStorage.removeItem('auth');
				// Cookies.remove('token');

				console.error('error.response => ', error.response);
				router.push('/error');
			}
		}
	);

	return (
		<AppContext.Provider
			value={[state, setState, post, setPost, media, setMedia, page, setPage]}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppProvider };
