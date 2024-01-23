/**
 * File to contain CRUDView component
 * @function
 */

import React, { memo } from 'react';
import { string, array } from 'prop-types';

const CrudView = ({ componentName, additionalClass, listDataProfile }) => {
	return (
		<div
			className={`${componentName} ${additionalClass}`}
			data-testid={componentName}
		>
			{listDataProfile}
		</div>
	);
};

CrudView.propTypes = {
	/**
	 * Define component name
	 */
	componentName: string,

	/**
	 * Add an additional class for modifiers based on parents component
	 */
	additionalClass: string,
	/**
	 * Display data
	 */
	listDataProfile: array.isRequired,
};

CrudView.defaultProps = {
	componentName: 'crud-default',
};

export default memo(CrudView);
