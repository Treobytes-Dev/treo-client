// this page shows a single post on the visitor side
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context';

// next imports
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// components
import Navigation from '../components/Navigation';
import Status from '../components/Status';
import { Loader } from '../assets/icons/Loader';

const SinglePage = ({ data }) => {
	const [state] = useContext(AppContext);

	if (!data) {
		// Data is still loading
		return (
			<>
				<p className='paragraph'>Loading...</p>
				<Loader />
			</>
		);
	}

	useEffect(() => {
		pageId.length > 0 && setPageId(data._id);
	}, []);

	// comments
	const [errorMsg, setErrorMsg] = useState('');
	const [successMsg, setSuccessMsg] = useState('');
	const [pageId, setPageId] = useState(data._id);
	// editing

	const [content, setContent] = useState('');

	if (errorMsg) setTimeout(() => setErrorMsg(''), 3000);
	if (successMsg) setTimeout(() => setSuccessMsg(''), 3000);

	const componentName = data.slug;

	return (
		<>
			<Head>
				<title>{data.title}</title>
				<meta
					description={
						data?.content ? data.content.substring(0, 160) : data.title
					}
				/>
			</Head>

			<Navigation />
			<div className={`page ${componentName}`}>
				<div className='container'>
					{!!errorMsg ||
						(!!successMsg && (
							<Status errorMsg={errorMsg} successMsg={successMsg} />
						))}
					{state?.user && state?.token && (
						<Link className='anchor' href={'/admin/pages'}>
							Back to Pages
						</Link>
					)}
					<div className='group page' style={{ margin: '20px 0' }}>
						<h1 className='header-one'>{!!data && data.title}</h1>
						{data?.featuredImage?.url && (
							<div className='img-container'>
								<Image
									src={data?.featuredImage?.url}
									alt={data.title}
									// fill
									width={500}
									height={500}
									priority
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export async function getServerSideProps({ params }) {
	const { slug } = params;

	try {
		const { data } = await axios.get(`/page/${slug}`);

		return {
			props: {
				data,
			},
		};
	} catch (error) {
		console.error('Error fetching page:', error);
		return {
			props: {
				data: {},
			},
		};
	}
}

export default SinglePage;
