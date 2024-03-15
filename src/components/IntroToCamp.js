import { string, bool } from 'prop-types';

const IntroToCamp = ({ componentName, errorMsg, successMsg, loading }) => (
	<div className={componentName}>
		<div className='container'>
			<h2 className='header header-two'>WHY SPEND THE SUMMER WITH US</h2>
			<div className='columns'>
				<div className='col col-1'>
					<ul className='unordered-list'>
						<li className='list-item'>
							<img
								className='check'
								src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710524188/program-checkmark_rwdl56.png'
								alt='check mark'
							/>
							<p className='paragraph'>World class STEM instruction</p>
						</li>
					</ul>
				</div>
				<div className='col col-2'>COL1</div>
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
