import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../context';
import axios from 'axios';
// components
import AdminLayout from '../../../components/AdminLayout';
import Library from '../../../components/Library';
import Modal from '../../../components/Modal';

const MediaLibrary = ({ componentName }) => {
	const [media, setMedia] = useContext(AppContext);
	const [loading, setLoading] = useState(false);
	const [successMsg, setSuccessMsg] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	// modal component state
	const [visible, setVisible] = useState(false);
	const [activeImage, setActiveImage] = useState({});

	// TODO
	// when user hovers image, display preview icon with text
	// when user clicks image, display modal of image at full size

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

	const handleImageDelete = async (imageId) => {
		setLoading(true);

		try {
			const { data } = await axios.delete(`/media/${imageId}`);
			if (data.ok) {
				setMedia({
					...media,
					images: media.images.filter((image) => image._id !== imageId),
					selected: null,
				});
				setSuccessMsg('Image deleted successfully');
			}
			setLoading(false);
		} catch (err) {
			console.error(err);
			setErrorMsg('Image delete failed. Try again.');
			setLoading(false);
		}
	};

	const handleSelectedMedia = (image) => {
		setMedia({ ...media, selected: image });
		setVisible(true);
		setActiveImage(image);
	};

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
						<h1 className='header-one'>Media Library</h1>

						<Library
							media={media}
							// add modal and prompt for image delete
							handleImageDelete={handleImageDelete}
							handleSelectedMedia={handleSelectedMedia}
						/>

						<Modal
							content={
								<div className='featured-image show-image'>
									<img
										className='img'
										src={activeImage.url}
										alt={'CMS Media Library image'}
									/>
								</div>
							}
							isVisible={visible}
							setIsVisible={setVisible}
						/>
					</div>
				</div>
			}
		/>
	);
};

MediaLibrary.defaultProps = {
	componentName: 'media-library',
};

export default MediaLibrary;
