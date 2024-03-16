import { string, bool } from 'prop-types';

const IntroToCamp = ({
	componentName,
	listItemMarks,
	collegeName,
	collegeText,
}) => (
	<div className={componentName}>
		<div className='container'>
			<h2 className='header header-two'>WHY SPEND THE SUMMER WITH US?</h2>
			<div className='columns'>
				<div className='col col-1'>
					<ul className='unordered-list'>{listItemMarks}</ul>
				</div>
				<div className='col col-2'>
					<div className='image'>
						<img
							className='img'
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710524188/mesa-college_pbflas.jpg'
						/>
					</div>
					<h3 className='header header-three'>{collegeName.toUpperCase()}</h3>
					<p className='paragraph'>{collegeText}</p>
				</div>
			</div>
		</div>
	</div>
);

IntroToCamp.propTypes = {
	errorMsg: string,
	successMsg: string,
	loading: bool,
};

IntroToCamp.defaultProps = {
	componentName: 'intro-to-camp',
};

export default IntroToCamp;
