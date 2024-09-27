import { string } from 'prop-types';

const Sponsors = ({ componentName = 'sponsors', sponsors }) => (
	<div className={componentName}>
		<div className='container'>
			{sponsors.map((sponsor) => (
				<div className='sponsor' key={sponsor.id}>
					<img src={sponsor.url} alt={sponsor.alt} />
				</div>
			))}
		</div>
	</div>
);

Sponsors.propTypes = {
	componentName: string,
};

Sponsors.defaultProps = {
	componentName: 'sponsors',
};

export default Sponsors;
