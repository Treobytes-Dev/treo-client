import { func, object } from 'prop-types';
import { Close } from '../assets/icons/Close';

const Library = ({
	componentName = 'library',
	media,
	handleImageDelete,
	handleSelectedMedia,
}) => (
	<div className={`${componentName}`}>
		<div style={{ textAlign: 'center' }}>
			{media?.images?.map((image) => (
				<div key={image._id} className='media'>
					<button
						className='btn set-media'
						onClick={() => {
							handleSelectedMedia(image);
						}}
					>
						<img
							src={image.url}
							alt='CMS Media Library image thumbnail'
							className='img thumbnail'
						/>
					</button>

					<button
						className='btn delete-media'
						onClick={() => handleImageDelete(image._id)}
					>
						<Close fill={'#f44336'} />
					</button>
				</div>
			))}
		</div>
	</div>
);

Library.propTypes = {
	media: object.isRequired,
	handleImageDelete: func.isRequired,
	handleSelectedMedia: func.isRequired,
};

export default Library;
