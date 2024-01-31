import React from 'react';
import { string, object } from 'prop-types';

export const TemplateThird = ({
	icon,
	headerPrimary,
	copyPrimary,
	headerSecondary,
	copySecondary,
}) => {
	return (
		<div className='container'>
			<div className='third'>
				<div className='group one'>
					<div className='heading'>
						<div className='wrapper-icon'>{icon}</div>
						<h4 className='header-four'>{headerPrimary}:</h4>
					</div>
					<p className='paragraph'>{copyPrimary}</p>
				</div>
				<div className='group two'>
					<h4 className='header-four'>{headerSecondary}:</h4>
					<p className='paragraph'>{copySecondary}</p>
				</div>
			</div>
		</div>
	);
};

TemplateThird.propTypes = {
	/**
	 * Add an additional className
	 */
	additionalClassName: string,
	icon: object,
	headerPrimary: string,
	copyPrimary: string,
	headerSecondary: string,
	copySecondary: string,
};

TemplateThird.defaultProps = {
	componentName: 'template-third',
	additionalClassName: '',
};
