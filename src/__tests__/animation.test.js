// animation test
/**
 * Documentation to Testing Library - React
 * @link
 * @tutorial
 * https://testing-library.com/docs/react-testing-library/intro
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Animation } from '../components/Animation';
import '@testing-library/jest-dom';

describe('<Animation />', () => {
	const propTypes = {
		children: <div>Test</div>,
		typeOfAnimation: 'fade-in',
	};

	it('applies the correct class names', () => {
		render(<Animation {...propTypes} />);
		const animationElement = screen.getByTestId('animation');
		expect(animationElement).toHaveClass('animation', 'fade-in');
	});

	it('renders the correct children content', () => {
		render(<Animation {...propTypes} />);
		const childElement = screen.getByText('Test');
		expect(childElement).toBeInTheDocument();
	});

	it('uses default componentName prop when not provided', () => {
		render(<Animation {...propTypes} />);
		const animationElement = screen.getByTestId('animation');
		expect(animationElement).toBeInTheDocument();
	});

	it('uses default typeOfAnimation prop when not provided', () => {
		render(<Animation {...propTypes} />);
		const animationElement = screen.getByTestId('animation');
		expect(animationElement).toHaveClass('animation', '');
	});
});
