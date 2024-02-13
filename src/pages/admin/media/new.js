import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../context';
import axios from 'axios';
import Link from 'next/link';

// components
import AdminLayout from '../../../components/AdminLayout';
import Status from '../../../components/Status';
// icons
import AddPhoto from '../../../assets/icons/AddPhoto';

const NewMedia = ({ componentName }) => {
	const [media, setMedia] = useContext(AppContext);

	// local state
	const [uploadedImage, setUploadedImage] = useState('');
	const [loading, setLoading] = useState(false);
	const [successMsg, setSuccessMsg] = useState('');
	const [errorMsg, setErrorMsg] = useState('');

	useEffect(() => {
		fetchMedia();
	}, []);

	const fetchMedia = async () => {
		try {
			const { data } = await axios.get('/media');
			setMedia((prev) => ({ ...prev, images: data }));
		} catch (err) {
			console.error(err);
		}
	};

	// image methods
	const handleImageUpload = async (e) => {
		const file = e.target.files[0];
		let formData = new FormData();
		formData.append('file', file);
		setLoading(true);

		try {
			const { data } = await axios.post('/upload-image-file', formData);

			// new implementation
			setMedia({
				images: [...media.images, data],
			});

			setUploadedImage(data.url);

			setLoading(false);
			setSuccessMsg('Image uploaded successfully');
		} catch (err) {
			console.error(err);
			setErrorMsg(err.message);
			setLoading(false);
		}
	};

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
						<div className='content'>
							<Link className='anchor' href='/admin/media/library'>
								View Library
							</Link>
							<h1 className='header-one'>New Media</h1>

							<label className='label upload-image'>
								<p className='paragraph'>
									Upload an image to the media library
								</p>
								<AddPhoto fill='#000' dimensions='100' viewBox='0 96 960 960' />

								<input
									onChange={handleImageUpload}
									type='file'
									accept='images/*'
									hidden
								/>
							</label>
							{uploadedImage !== '' && (
								<div className='img-container'>
									<img src={uploadedImage} alt='uploaded image' />
								</div>
							)}
						</div>
					</div>
				</div>
			}
		/>
	);
};

NewMedia.defaultProps = {
	componentName: 'new-media',
};

export default NewMedia;
