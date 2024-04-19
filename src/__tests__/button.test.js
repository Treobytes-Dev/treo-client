import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('Button', () => {
	it('renders correctly with all props', () => {
		render(
			<Button
				componentName='testButton'
				applicationSide='left'
				forSubmit='notSubmit'
				additionalClass='extraClass'
			>
				Click me!
			</Button>
		);

		const button = screen.getByTestId('testButton');

		expect(button).toHaveTextContent('Click me!');
	});

	it('renders with default props', () => {
		render(<Button>Default Button</Button>);

		const button = screen.getByTestId('button');

		expect(button).toHaveTextContent('Default Button');
	});

	it('applies custom classes correctly', () => {
		render(
			<Button
				componentName='customButton'
				applicationSide='right'
				forSubmit='formSubmit'
				additionalClass='customClass'
			>
				Custom Button
			</Button>
		);

		const button = screen.getByTestId('customButton');
		expect(button.className).toBe('customButton right formSubmit customClass');
	});
});
