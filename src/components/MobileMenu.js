import React, { useState } from 'react';
import { node, string } from 'prop-types';
import Link from 'next/link';

// components
import Logo from '../assets/icons/Logo';

// icons
import Menu from '../assets/icons/Menu';
import { Close } from '../assets/icons/Close';
/**
 * Primary UI component for user interaction
 */

export const MobileMenu = ({
	componentName,
	children,
	additionalClassName,
}) => {
	const [style, setStyle] = useState('menu');
	const [menuStatus, setMenuStatus] = useState('open');

	const handleClick = () => {
		switch (menuStatus) {
			case 'open':
				setMenuStatus('close');
				setStyle('active');
				break;

			case 'close':
				setMenuStatus('open');
				setStyle('');
				break;

			default:
				setMenuStatus('open');
				setStyle('');
				break;
		}
	};

	return (
		<div
			className={`${componentName} ${additionalClassName}`}
			data-test-id={`${componentName}`}
		>
			<div className='trigger' data-test-id='trigger' onClick={handleClick}>
				<Menu fill='#333' />
			</div>

			<div
				onClick={handleClick}
				data-test-id={style === 'active' ? `overlay ${style}` : 'overlay'}
				className={style === 'active' ? `overlay ${style}` : 'overlay'}
			/>

			<div
				data-test-id={
					style === 'active' ? `menu menu-y ${style}` : 'menu menu-y'
				}
				className={style === 'active' ? `menu menu-y ${style}` : 'menu menu-y'}
			>
				<div className='wrapper-header'>
					<i
						className='icon-left'
						data-test-id='icon-left'
						onClick={handleClick}
					>
						<Close />
					</i>

					<Link href='/' className='wrapper-logo'>
						<Logo />
					</Link>
				</div>

				<div className='wrapper-content'>{children}</div>
			</div>
		</div>
	);
};

MobileMenu.propTypes = {
	/**
	 * Optional additional className
	 */
	additionalClassName: string,

	/**
	 * children to populate component's body
	 */
	children: node.isRequired,
};

MobileMenu.defaultProps = {
	componentName: 'mobile-menu',
};
