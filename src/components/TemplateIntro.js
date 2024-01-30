import React from 'react';
import { string } from 'prop-types';
import { Hero } from './Hero';
import { CarrotDown } from '../assets/icons/CarrotDown';

export const TemplateIntro = ({
	heroImage,
	heroHeader,
	heroSubHeader,
	introHeader,
	introBody,
}) => {
	return (
		<>
			<div className='hero-wrapper'>
				<Hero
					children={
						<>
							<div className='fore-ground'>
								<div className='text'>
									<h2 className='header-two'>{heroHeader}</h2>
									<h4 className='header-four'>{heroSubHeader}</h4>
								</div>
							</div>
							<div className='assets'>
								<div className='carrot-down'>
									<CarrotDown fill='#333' />
								</div>
							</div>
						</>
					}
					background={heroImage}
				/>
			</div>

			<div className='container'>
				<div className='intro'>
					<h2 className='header-two'>{introHeader}</h2>
					<p className='paragraph'>{introBody}</p>
				</div>
			</div>
		</>
	);
};

TemplateIntro.propTypes = {
	/**
	 * Add an additional className
	 */
	additionalClassName: string,
	heroImage: string,
	heroHeader: string,
	heroSubHeader: string,
	introHeader: string,
	introBody: string,
};

TemplateIntro.defaultProps = {
	componentName: 'template-intro',
	additionalClassName: '',
};
