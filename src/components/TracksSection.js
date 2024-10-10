import { string } from 'prop-types';

const TracksSection = ({ componentName = 'tracks-section' }) => (
	<div className={componentName}>
		<div className='container'>
			<h3 className='header header-three'>{`Tracks 2024`.toUpperCase()}</h3>
			<h6 className='header header-six'>
				Note:
				<span className='callout'>
					Each track's curriculum will repeat each week
				</span>
			</h6>
		</div>
	</div>
);

TracksSection.propTypes = {
	componentName: string,
};

export default TracksSection;
