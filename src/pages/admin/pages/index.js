import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../context';
// components
import AdminLayout from '../../../components/AdminLayout';
import PageList from '../../../components/PageList';
import Modal from '../../../components/Modal';
import Status from '../../../components/Status';
// next
import { useRouter } from 'next/router';
import Link from 'next/link';
// axios
import axios from 'axios';

const Pages = ({ componentName }) => {
	// context
	const [state, setState, media, setMedia, page, setPage] =
		useContext(AppContext);

	const router = useRouter();
	const { pages } = page;

	// state
	const [loading, setLoading] = useState('');
	const [keyword, setKeyword] = useState('');
	const [visible, setVisible] = useState(false);
	const [activePage, setActivePage] = useState({});
	// statuses
	const [successMsg, setSuccessMsg] = useState('');
	const [errorMsg, setErrorMsg] = useState('');

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

	const handleEdit = async (page) => {
		router.push(`/admin/pages/${page.slug}`);
		console.log('handleEdit => ', page);
	};

	const handlePrompt = (page) => {
		setVisible(true);
		setActivePage(page);
	};

	const handleDelete = async (page) => {
		setLoading(true);

		try {
			setLoading(false);

			const { data } = await axios.delete(`/page/${page._id}`);

			if (data.ok) {
				setPage((prev) => ({
					...prev,
					pages: prev.pages.filter((p) => p._id !== page._id),
				}));
			}
			setVisible(false);
			setSuccessMsg('Page deleted successfully');
		} catch (err) {
			console.error(`Page delete failed ${err}`);

			setErrorMsg('Page delete failed');
			setLoading(false);
		}
	};

	// status messages
	if (errorMsg) setTimeout(() => setErrorMsg(''), 3000);
	if (successMsg) setTimeout(() => setSuccessMsg(''), 3000);

	return (
		<AdminLayout
			children={
				<div className={`${componentName} main`}>
					{!!errorMsg ||
						!!successMsg ||
						(!!loading && (
							<Status
								errorMsg={errorMsg}
								successMsg={successMsg}
								loading={loading}
							/>
						))}

					<div className='wrapper'>
						<div className='group heading'>
							<h1 className='header-one'>Pages</h1>
							<h3 className='header-three'>({pages?.length})</h3>
						</div>

						<button className='button edit add-new'>
							<Link className='anchor add-new' href='/admin/pages/new'>
								+ Create Page
							</Link>
						</button>
						<input
							onChange={(e) => setKeyword(e.target.value.toLowerCase())}
							type='text'
							className='input-text'
							placeholder='Search...'
							value={keyword}
							style={{
								margin: '1rem 0',
							}}
						/>

						<PageList
							pages={pages?.filter((p) =>
								p.title.toLowerCase().includes(keyword)
							)}
							handleEdit={handleEdit}
							// handleDelete={handleDelete}
							handlePrompt={handlePrompt}
						/>
					</div>

					<Modal
						content={
							<div>
								<h3 className='heading-three' style={{ color: '#fff' }}>
									Are you sure you want to delete the "{activePage.title}" page?
								</h3>
								<button onClick={() => handleDelete(activePage)}>Delete</button>
							</div>
						}
						isVisible={visible}
						setIsVisible={setVisible}
					/>
				</div>
			}
		/>
	);
};

Pages.defaultProps = {
	componentName: 'pages',
};

export default Pages;
