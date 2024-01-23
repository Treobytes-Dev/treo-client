import { useState, useContext, useEffect } from 'react';
import axios from 'axios';

const useGetPages = () => {
	// state
	const [title, setTitle] = useState('');
	const [slug, setSlug] = useState('');

	useEffect(() => {
		loadPages();
	}, []);

	const loadPages = async () => {
		try {
			const { data } = await axios.get('/pages-all');

			setTitle(data.title);
			setSlug(data.slug);

			console.log('loadPages => ', data);
		} catch (err) {
			console.error(`Error loading pages. ${err}`);
		}
	};

	return {
		title,
		slug,
	};
};

export default useGetPages;
