import { string } from 'prop-types';
import Button from './Button';

const IntroSignUp = ({ componentName, href, btnText, btnColor }) => (
	<div className={componentName}>
		<div className='container'>
			<a
				href={href}
				target='_blank'
				rel='noreferrer noopener'
				className='wrapper-btn'
			>
				<Button children={btnText} additionalClass={btnColor} />
			</a>
		</div>
	</div>
);

IntroSignUp.propTypes = {
	componentName: string,
	href: string,
	btnText: string,
	btnColor: string,
};

IntroSignUp.defaultProps = {
	componentName: 'intro-sign-up',
	btnColor: 'red',
};

export default IntroSignUp;
