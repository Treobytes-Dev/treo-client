/**
 * File to contain CrudMenuEdit component
 * @function
 */

import React, { memo } from 'react';
import { array, func, string, bool, oneOfType, object } from 'prop-types';

import Trash from '../assets/icons/Trash';
import CheckWCircle from '../assets/icons/CheckWCircle';
import Edit from '../assets/icons/Edit';

const CrudMenuEdit = ({
	componentName,
	handleAddClick,
	listData,
	handleEditClick,
	handleAddToSubArray,
	handleDeleteFromSubArray,
	changeHandler,
	handleDelete,
	handleDeleteClick,
	addBtnText,
	renderItems,
}) => {
	// todo: sub menu functionality
	// add check mark to indicate if has sub menu
	// if true, add a input field to capture title menu item
	// then render a new crud menu edit component

	// if false, render crud menu edit component as is

	return (
		<div className={componentName} data-testid={componentName}>
			<div className='list'>
				{listData.map((item) => (
					<div key={item.id} className='item'>
						<div className='input-container'>
							{item.editable ? (
								<form className='editable'>
									<div className='default-menu'>
										<div className='form-group'>
											<label htmlFor='linkName'>Link Name</label>
											<input
												className='input-text'
												name='linkName'
												aria-label='linkName'
												type='text'
												onChange={(e) => changeHandler(e, item)}
												value={!item.linkName ? '' : item.linkName}
												disabled={!item.editable}
												placeholder='Link name'
											/>
										</div>

										<div className='form-group'>
											<label htmlFor='url'>URL</label>
											<input
												className='input-text'
												name='url'
												aria-label='url'
												type='text'
												onChange={(e) => changeHandler(e, item)}
												value={!item.url ? '' : item.url}
												disabled={!item.editable}
												placeholder='URL'
											/>
										</div>

										<div className='form-group'>
											<label htmlFor='position'>Position</label>
											<input
												className='input-text'
												name='position'
												aria-label='position'
												type='text'
												onChange={(e) => changeHandler(e, item)}
												value={!item.position ? '' : item.position}
												disabled={!item.editable}
												placeholder='Position'
											/>
										</div>
									</div>

									<ul className='unordered-list sub-menu'>
										{item.editable && (
											<button
												onClick={(e) => {
													e.preventDefault();
													handleAddToSubArray(item.id);
												}}
											>
												Add to Sub-Array
											</button>
										)}
										{item.subItems.map((subItem, subIndex) => (
											<li className='list-item' key={subIndex}>
												{subItem}
												<button
													className='button'
													onClick={() =>
														handleDeleteFromSubArray(item.id, subIndex)
													}
												>
													Delete
												</button>
											</li>
										))}
									</ul>
								</form>
							) : (
								<>
									{item.url === '' ||
										(item.linkName === '' && handleDelete(item.id))}
									{renderItems(item)}
								</>
							)}
						</div>

						<div className='inside-btns'>
							{item.editable ? (
								<>
									<button
										className='btn'
										data-testid='crud-save-btn'
										onClick={() => handleEditClick(item, false)}
									>
										<CheckWCircle fill='#4caf50' />{' '}
										<p className='paragraph'>Save</p>
									</button>

									<button
										className='btn'
										data-testid='crud-save-btn'
										onClick={() => handleDelete(item.id)}
									>
										<Trash fill='#f44336' />
										<p className='paragraph'>Delete</p>
									</button>
								</>
							) : (
								<>
									<button
										className='btn'
										data-testid='crud-edit-btn'
										onClick={() => handleEditClick(item, true)}
									>
										<Edit /> <p className='paragraph'>Edit</p>
									</button>

									<button
										className='btn'
										onClick={(e) => handleDeleteClick(e, item)}
										data-testid='delete-btn'
									>
										<Trash fill='#f44336' />
										<p className='paragraph'>Delete</p>
									</button>
								</>
							)}
						</div>
					</div>
				))}
			</div>

			<div className='wrapper-btn'>
				<button
					className='button submit add-btn'
					data-testid='crud-add-btn'
					onClick={handleAddClick}
				>
					{addBtnText}
				</button>
			</div>
		</div>
	);
};

CrudMenuEdit.propTypes = {
	/**
	 * Define component name
	 */
	componentName: string,
	/**
	 * Invoke add functionality
	 */
	handleAddClick: func.isRequired,
	/**
	 * Display data
	 */
	listData: array.isRequired,
	/**
	 * Invoke edit functionality
	 */
	handleEditClick: func.isRequired,
	/**
	 * Handle onChange functionality
	 */
	changeHandler: func.isRequired,
	/**
	 * Handle delete functionality out of focus
	 */
	handleDelete: func.isRequired,
	/**
	 * Invoke delete functionality
	 */
	handleDeleteClick: func.isRequired,
	/**
	 * Edit button text
	 */
	addBtnText: oneOfType([string, bool]).isRequired,

	/**
	 * Specific value for option
	 */
	optionValue: string,
	/**
	 * Define data to iterate over
	 */
	selectOptions: array.isRequired,
	/**
	 * Define UI element to render data for each item
	 */
	renderItems: func.isRequired,
};

CrudMenuEdit.defaultProps = {
	componentName: 'crud-edit menu',
	selectOptions: [],
};

export default memo(CrudMenuEdit);
