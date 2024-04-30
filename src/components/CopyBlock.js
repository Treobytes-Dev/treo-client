import React from 'react';
import { string } from 'prop-types';

export const CopyBlock = ({ componentName, header, copyPrimary, listItem }) => {
	return (
		<div className={`${componentName} `} id={`${componentName}`}>
			<h4 className='header header-four'>{header}</h4>

			<p className='paragraph'>{copyPrimary}</p>
			<ul className='unordered-list'>{listItem}</ul>
		</div>
	);
};

CopyBlock.propTypes = {
	componentName: string,
	/**
	 * Add an additional className
	 */
	additionalClassName: string,
	header: string,
	copyPrimary: string,
};

CopyBlock.defaultProps = {
	componentName: 'copy-block',
	additionalClassName: '',
};
