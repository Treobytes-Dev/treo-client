import { useState, useEffect } from 'react';

// this hook checks for objects

export const useCheckDuplicates = (arr) => {
	const [hasDuplicates, setHasDuplicates] = useState(false);

	useEffect(() => {
		const names = arr.map((obj) => obj.name);
		const uniqueNames = new Set(names);

		if (names.length !== uniqueNames.size) {
			setHasDuplicates(true);
		} else {
			setHasDuplicates(false);
		}
	}, [arr]);

	return hasDuplicates;
};
