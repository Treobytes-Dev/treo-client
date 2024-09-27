import React from 'react';
import { string } from 'prop-types';
import { Hero } from './Hero';
import { CarrotDown } from '../assets/icons/CarrotDown';

export const TemplateIntro = ({
	componentName = 'intro',
	additionalClassName = '',
	heroImage,
	heroHeader,
	heroSubHeader,
	introHeader,
	introBody,
	scrollToTarget,
}) => {
	return (
		<>
			<div className='hero-wrapper'>
				<Hero
					children={
						<>
							{heroHeader ||
								(heroSubHeader && (
									<div className='fore-ground'>
										<div className='text'>
											<h2 className='header header-two'>{heroHeader}</h2>
											<h4 className='header header-four'>{heroSubHeader}</h4>
										</div>
									</div>
								))}

							{/* <button > */}
							{scrollToTarget && (
								<button className='assets' onClick={scrollToTarget}>
									<div className='carrot-down'>
										<CarrotDown fill='#333' />
									</div>
								</button>
							)}

							{/* </button> */}
						</>
					}
					background={heroImage}
				/>
			</div>

			{(introHeader || introBody) && (
				<div
					className={`template-${componentName} ${additionalClassName} intro`}
					id={`template-${componentName}`}
				>
					<div className='container'>
						<h2 className='header header-two'>{introHeader}</h2>
						{introBody && <p className='paragraph'>{introBody}</p>}
					</div>
				</div>
			)}
		</>
	);
};

TemplateIntro.propTypes = {
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
};
