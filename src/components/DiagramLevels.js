// animation.js
import React from 'react';
import { string, array, object } from 'prop-types';

const DiagramLevels = ({ componentName, rowOne, rowTwo, icon }) => {
	return (
		<div className={`${componentName}`} data-testid={componentName}>
			<div className='row row-1'>
				{rowOne.map((row) => (
					<div className={`box box-${row.classModifier}`} key={row.number}>
						<h6 className={`header-6 position ${row.classModifier}`}>
							{row.number}
						</h6>
						<p className='paragraph'>{row.text}</p>
					</div>
				))}
			</div>

			<div className='row row-2'>
				<div className='section one first'>
					<div className='number one'>
						<div className='with-icon'>{icon}</div>
					</div>
				</div>

				{rowTwo.map((row) => (
					<div className={`section ${row.classModifier}`} key={row.number}>
						<div className={`text`}>
							<p className='paragraph'>{row.text}</p>
						</div>
						<div className={`number ${row.classModifier}`}>
							<h4 className='header-four'>{row.number}</h4>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

DiagramLevels.propTypes = {
	/**
	 * Define component name
	 */
	componentName: string,
	rowOne: array.isRequired,
	rowTwo: array.isRequired,
	icon: object,
};

DiagramLevels.defaultProps = {
	componentName: 'diagram-levels',
};

export default DiagramLevels;
