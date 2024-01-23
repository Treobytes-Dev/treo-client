// useAnimate
import { useRef, useCallback } from 'react';

const useAnimate = (animation) => {
	const elementRef = useRef(null);

	const animate = useCallback(() => {
		return new Promise((resolve, reject) => {
			if (!elementRef.current) {
				reject('Element not found');
				return;
			}

			const animationName = `${animation}`;
			const node = elementRef.current;

			node.classList.add(animationName);

			function handleAnimationEnd(event) {
				event.stopPropagation();
				node.classList.remove(animationName);
				resolve('Animation ended');
			}

			node.addEventListener('animationend', handleAnimationEnd, { once: true });
		});
	}, [animation]);

	return [elementRef, animate];
};

export default useAnimate;

// Usage
// utils
// import useAnimate from '../utils/useAnimate';
// state
// const [promptRef, promptAnimate] = useAnimate('flip-out');

// component
{
	/* <Prompt
	promptRef={promptRef}
	componentName='delete-prompt prompt'
	message='Are you sure you want to delete this place?'
	textYes='Yes'
	textNo='No'
	submitYes={() => {
		promptAnimate();
		setTimeout(() => {
			setShowPrompt(false);
			deleteLocationFn(deleteLocationIndex);
		}, 400);
	}}
	submitNo={() => {
		promptAnimate();
		setTimeout(() => {
			setShowPrompt(false);
		}, 400);
	}}
/>; */
}
