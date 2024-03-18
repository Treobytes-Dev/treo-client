import { string } from 'prop-types';

import ImageContainer from './ImageContainer';
import Button from './Button';

const ProgramContainer = ({
	componentName,
	programTitle,
	programSubtitle,
	programDescription,
	programFootText,
	btnColor,
	thumbnails,
	singleImage,
	singleAltTag,
}) => (
	<div className={componentName}>
		<div className='container'>
			<div className='column col-1'>
				<h3 className='header header-three'>
					{`${programTitle}`.toUpperCase()}
				</h3>
				<p className='paragraph'>{programSubtitle}</p>

				<p className='paragraph'>{programDescription}</p>

				<p className='paragraph'>{programFootText}</p>

				<Button
					children={`Click to sign up!`.toUpperCase()}
					additionalClass={btnColor}
				/>
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

ProgramContainer.propTypes = {
	/**
	 * Define component name
	 */
	componentName: string,
};

ProgramContainer.defaultProps = {
	componentName: 'program-container',
};

export default ProgramContainer;
