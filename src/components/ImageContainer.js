// animation.js
import React from 'react';
import { string, array } from 'prop-types';

const ImageContainer = ({
	componentName,
	singleImage,
	thumbnails,
	singleAltTag,
}) => {
	return (
		<div className={`${componentName}`} data-testid={componentName}>
			<div className='single'>
				<img src={singleImage} alt={singleAltTag} className='img' />
			</div>

			<div className='multiples'>
				{thumbnails.map((thumbnail) => (
					<div
						key={thumbnail}
						className='thumbnail'
						style={{
							backgroundImage: 'url(' + thumbnail + ')',
						}}
					/>
				))}
			</div>
		</div>
	);
};

ImageContainer.propTypes = {
	/**
	 * Define component name
	 */
	componentName: string,
	singleImage: string.isRequired,
	thumbnails: array,
	singleAltTag: string.isRequired,
};

ImageContainer.defaultProps = {
	componentName: 'image-container',
};

export default ImageContainer;
