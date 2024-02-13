/**
 * File to contain CrudMenuEdit component
 * @function
 */

import React, { memo } from 'react';
import { array, func, string, bool, oneOfType, object } from 'prop-types';

import Trash from '../assets/icons/Trash';
import CheckWCircle from '../assets/icons/CheckWCircle';
import Edit from '../assets/icons/Edit';
import { AddCircle } from '../assets/icons/AddCircle';

const CrudMenuEdit = ({
	componentName,
	handleAddClick,
	listData,
	handleEditClick,
	handleAddToSubArray,
	handleDeleteFromSubArray,
	changeHandler,
	onFocusLinkName,
	onBlurLinkName,
	onFocusUrl,
	onBlurUrl,
	onFocusPosition,
	onBlurPosition,
	handleDelete,
	handleDeleteClick,
	addBtnText,
	renderItems,
	selectOptions,
	errorDuplicates,
	errorValidateUrl,
}) => {
	let urlRegex =
		/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

	return (
		<div className={componentName} data-testid={componentName}>
			<div className='list'>
				{listData.map((item) => (
					<div
						key={item.id}
						className={!item.editable ? 'item' : 'item item-editable'}
					>
						<div className='input-container'>
							{!!errorDuplicates && (
								<p className='error-msg' style={{ color: 'red' }}>
									Duplicate positions found
								</p>
							)}
							{item.editable ? (
								<form className='editable'>
									<div className='default-menu'>
										<div className='form-group'>
											<label className='label' htmlFor='linkName'>
												Link Name
											</label>
											<input
												className='input-text'
												name='linkName'
												aria-label='linkName'
												type='text'
												onChange={(e) => {
													changeHandler(e, item);
												}}
												value={!item.linkName ? '' : item.linkName}
												disabled={!item.editable}
												placeholder='Link name'
											/>
										</div>

										<div className='form-group'>
											<label className='label' htmlFor='url'>
												URL
											</label>
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
											{urlRegex.test(item.url) === false &&
												item.url.length > 2 && (
													<p className='error-msg' style={{ color: 'red' }}>
														Please enter a valid URL.
													</p>
												)}
										</div>

										<div className='form-group'>
											<label className='label' htmlFor='position'>
												Position
											</label>
											<select
												className='select'
												name='position'
												aria-label='position'
												type='text'
												onChange={(e) => changeHandler(e, item)}
												onFocus={onFocusPosition}
												onBlur={onBlurPosition}
												value={!item.position ? '' : item.position}
												disabled={!item.editable}
												placeholder='Position'
											>
												<option className='option' value=''>
													Select Position
												</option>

												{selectOptions}
											</select>
										</div>
									</div>

									<ul className='unordered-list sub-menu'>
										{item.editable && (
											<button
												className='btn add-sub-menu'
												onClick={(e) => {
													e.preventDefault();
													handleAddToSubArray(item.id);
												}}
											>
												<AddCircle fill='#4caf50' />
												<p className='paragraph'>Add Sub Menu</p>
											</button>
										)}
										{item.subItems.map((subItem, subIndex) => (
											<li className='list-item sub-list-item' key={subIndex}>
												<div className='form-group'>
													<label className='label' htmlFor='subLinkName'>
														Sub Menu Link Name
													</label>
													<input
														className='input-text'
														name='subLinkName'
														aria-label='subLinkName'
														type='text'
														onChange={(e) => changeHandler(e, subItem)}
														value={subItem.subLinkName}
														placeholder='Link name'
													/>
												</div>

												<div className='form-group'>
													<label className='label' htmlFor='subUrlName'>
														Sub Menu URL Name
													</label>
													<input
														className='input-text'
														name='subUrlName'
														aria-label='subUrlName'
														type='text'
														onChange={(e) => changeHandler(e, subItem)}
														value={subItem.subUrlName}
														placeholder='URL name'
													/>
												</div>
												<button
													className='button delete-sub-menu'
													onClick={() =>
														handleDeleteFromSubArray(item.id, subIndex)
													}
												>
													<Trash fill='#f44336' />
													<p className='paragraph'>Delete Sub Menu</p>
												</button>
											</li>
										))}
									</ul>
								</form>
							) : (
								<>
									{(item.url === '' || item.linkName === '') &&
										handleDelete(item.id)}
									{renderItems(item)}
								</>
							)}
						</div>

						<div className='inside-btns'>
							{item.editable ? (
								<div className={item.editable && 'editable'}>
									<button
										className='btn'
										data-testid='crud-save-btn'
										onClick={() => handleEditClick(item, false)}
										disabled={errorDuplicates ? true : false}
									>
										<CheckWCircle fill='#4caf50' />
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
								</div>
							) : (
								<div className={!item.editable && 'not-editable'}>
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
								</div>
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
