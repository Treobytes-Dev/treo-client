import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../context';

// next
import { useRouter } from 'next/router';
// axios
import axios from 'axios';

// layout
import AdminLayout from '../../../components/AdminLayout';
import Status from '../../../components/Status';

const EditPage = ({ componentName }) => {
	// context
	const [state, setState, media, setMedia] = useContext(AppContext);

	// state
	const [pageId, setPageId] = useState('');
	const [name, setName] = useState('');
	const [title, setTitle] = useState('');
	const [content, setContent] = useState({});
	const [featuredImage, setFeaturedImage] = useState({});
	const [loading, setLoading] = useState('');

	// modal component state
	const [visible, setVisible] = useState(false);
	// tabs component state
	const [activeTab, setActiveTab] = useState('tab1');

	// statuses
	const [successMsg, setSuccessMsg] = useState('');
	const [errorMsg, setErrorMsg] = useState('');

	const router = useRouter();

	useEffect(() => {
		loadPage();
	}, [router?.query?.slug]);

	const loadPage = async () => {
		try {
			const { data } = await axios.get(`/page/${router.query.slug}`);

			console.log('loadPage => ', data);
			setPageId(data._id);
			setName(data.name);
			setTitle(data.title);
			setContent(data.content);
		} catch (err) {
			console.error(`Error loading page. ${err}`);
			setErrorMsg('Error loading page.');
		}
	};

	const handleSave = async () => {
		setLoading(true);

		try {
			const { data } = await axios.post(`/edit-page/${pageId}`, {
				name,
				title,
				content,
			});

			if (data?.error) {
				setErrorMsg(data?.error);
				setLoading(false);
			} else {
				setSuccessMsg('Page updated successfully');
				setLoading(false);

				// offset by 1 second to display the success message
				setTimeout(() => router.push(`/admin/pages`), 4000);
			}
		} catch (err) {
			console.error(`Error saving page. ${err}`);
			setLoading(false);
			setErrorMsg('Error saving page.');
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
						(!!successMsg && (
							<Status errorMsg={errorMsg} successMsg={successMsg} />
						))}
					<h1 className='pages'>Edit Page</h1>

					<div className='form-group'>
						<label className='label'>Title</label>
						<input
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className='input-text'
							type='text'
						/>
					</div>

					<button
						onClick={handleSave}
						className='button submit'
						style={{ width: '150px' }}
					>
						{loading ? '...Loading' : 'Submit'}
					</button>
				</div>
			}
		/>
	);
};

EditPage.defaultProps = {
	componentName: 'edit-page',
};

export default EditPage;
