import React from 'react';
import { string, bool, object } from 'prop-types';
import ImageContainer from './ImageContainer';

export const TemplateSecondary = ({
	componentName,
	header,
	withIcon,
	icon,
	withIconHeader,
	copyPrimary,
	imageSecondary,
	imageSrc,
	imageAlt,
	copySecondary,
	singleImage,
	thumbnails,
	singleAltTag,
}) => {
	return (
		<div className='container'>
			<div
				className={`template-${componentName} ${componentName}`}
				id={`template-${componentName}`}
			>
				<div className='column col-1'>
					{withIcon ? (
						<div className='heading'>
							<div className='wrapper-icon'>{icon}</div>
							<h4 className='header header-four'>{withIconHeader}:</h4>
						</div>
					) : (
						<h2 className='header header-two'>{header}</h2>
					)}

					<p className='paragraph'>{copyPrimary}</p>

					{imageSecondary ? (
						<div className='wrapper-image'>
							<img src={imageSrc} alt={imageAlt} className='img' />
						</div>
					) : (
						<p className='paragraph'>{copySecondary}</p>
					)}
				</div>
				<div className='column col-2'>
					<ImageContainer
						singleImage={singleImage}
						thumbnails={thumbnails}
						singleAltTag={singleAltTag}
					/>
				</div>
			</div>
		</div>
	);
};

TemplateSecondary.propTypes = {
	componentName: string,
	/**
	 * Add an additional className
	 */
	additionalClassName: string,
	heroImage: string,
	heroHeader: string,
	heroSubHeader: string,
	introHeader: string,
	introBody: string,
	withIcon: bool,
	icon: object,
	withIconHeader: string,
};

TemplateSecondary.defaultProps = {
	componentName: 'secondary',
	additionalClassName: '',
};
