import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../context';
// components
import AdminLayout from '../../../components/AdminLayout';
import Library from '../../../components/Library';
import Modal from '../../../components/Modal';
import Status from '../../../components/Status';
// icons
import AddPhoto from '../../../assets/icons/AddPhoto';
// next
import { useRouter } from 'next/router';
// axios
import axios from 'axios';

const NewPage = ({ componentName }) => {
	// state
	const [name, setName] = useState('');
	const [title, setTitle] = useState('');
	const [content, setContent] = useState({});
	const [loading, setLoading] = useState('');

	// statuses
	const [successMsg, setSuccessMsg] = useState('');
	const [errorMsg, setErrorMsg] = useState('');

	const router = useRouter();

	const handleSave = async () => {
		setLoading(true);

		try {
			const { data } = await axios.post('/create-page', {
				name,
				title,
			});

			if (data?.error) {
				console.error(data?.error);
				setErrorMsg(data?.error);
			} else {
				setSuccessMsg('Page created successfully');

				router.push(`/admin/pages`);
			}
			setLoading(false);
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
						(!!loading && <Status errorMsg={errorMsg} loading={loading} />)}

					<h1 className='pages'>New Page</h1>

					<form className='form'>
						<div className='form-group'>
							<label className='label'>Page Name ( Defines the slug )</label>
							<input
								value={name}
								onChange={(e) => setName(e.target.value)}
								className='input-text'
								type='text'
							/>
						</div>

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
					</form>
				</div>
			}
		/>
	);
};

NewPage.defaultProps = {
	componentName: 'new-page',
};

export default NewPage;
