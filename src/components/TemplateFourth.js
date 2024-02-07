import React from 'react';
import { string, object } from 'prop-types';

export const TemplateFourth = ({
	componentName,
	icon,
	headerPrimary,
	copyPrimary,
	imageSrc,
	imageAlt,
}) => {
	return (
		<div className='container'>
			<div className={`template-${componentName} ${componentName}`}>
				<div className='column col-1'>
					<div className='heading'>
						<div className='wrapper-icon'>{icon}</div>

						<h4 className='header-four'>{headerPrimary}:</h4>
					</div>
					<p className='paragraph'>{copyPrimary}</p>
				</div>

				<div className='column col-2'>
					<div className='wrapper-image'>
						<img src={imageSrc} alt={imageAlt} className='img' />
					</div>
				</div>
			</div>
		</div>
	);
};

TemplateFourth.propTypes = {
	componentName: string,
	icon: object,
	headerPrimary: string,
	copyPrimary: string,
	imageSrc: string,
	imageAlt: string,
};

TemplateFourth.defaultProps = {
	componentName: 'fourth',
	additionalClassName: '',
};
