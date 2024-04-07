import { string, bool } from 'prop-types';

const IntroToCamp = ({
	componentName,
	listItemMarks,
	collegeName,
	collegeText,
	collegeImage,
	headerText,
}) => (
	<div className={componentName}>
		<div className='container'>
			<h2 className='header header-two'>{headerText}</h2>
			<div className='columns'>
				<div className='col col-1'>
					<ul className='unordered-list'>{listItemMarks}</ul>
				</div>
				<div className='col col-2'>
					<div className='image'>
						<img className='img' src={collegeImage} />
					</div>
					<h4 className='header header-four'>{collegeName.toUpperCase()}</h4>
					<p className='paragraph'>{collegeText}</p>
				</div>
			</div>
		</div>
	</div>
);

IntroToCamp.propTypes = {
	headerText: string,
	errorMsg: string,
	successMsg: string,
	loading: bool,
};

IntroToCamp.defaultProps = {
	componentName: 'intro-to-camp',
	headerText: 'WHY SPEND THE SUMMER WITH US?',
};

export default IntroToCamp;
