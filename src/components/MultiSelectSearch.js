import { string, func, bool, array } from 'prop-types';
import { randomId } from '../functions/randomId';

// ui reference
// https://ant.design/components/select#components-select-demo-multiple

const MultiSelectSearch = ({
	componentName,
	queryValue,
	handleSearch,
	isLoading,
	searchResults,
	handleAddOption,
}) => {
	return (
		<div className={componentName} data-testid={componentName}>
			<input
				name='input-search'
				className='input-text search'
				value={queryValue}
				onChange={handleSearch}
				type='search'
			/>
			{isLoading && <p>Loading...</p>}
			<div className='group'>
				{!!searchResults &&
					searchResults.map((option, i) => (
						<>
							<button
								key={option}
								onClick={() => handleAddOption(option)}
								className='anchor'
								style={{ margin: '0 5px' }}
							>
								{option}
							</button>{' '}
							|
						</>
					))}
			</div>
		</div>
	);
};

MultiSelectSearch.propTypes = {
	queryValue: string.isRequired,
	handleSearch: func.isRequired,
	isLoading: bool,
	searchResults: array.isRequired,
	handleAddOption: func.isRequired,
};

MultiSelectSearch.defaultProps = {
	componentName: 'multi-select-search',
};

export default MultiSelectSearch;
