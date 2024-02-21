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
	changeHandler,
	onFocusPosition,
	onBlurPosition,
	handleDelete,
	handleDeleteClick,
	addBtnText,
	renderItems,
	selectOptions,
	errorDuplicates,
	displayIntro,
	displaySecondary,
	displayThird,
	displayFourth,
	handleChecked,
	checked,
}) => {
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
											<input
												className='checkbox intro'
												name='checkIntro'
												type='checkbox'
												checked={displayIntro}
												onChange={() => handleChecked(!displayIntro)}
												disabled={false}
											/>
											<label className='label' htmlFor='checkIntro'>
												Display intro template?
											</label>
										</div>

										{displayIntro && (
											<>
												{' '}
												<div className='form-group'>
													<label className='label' htmlFor='introTitle'>
														Intro Title
													</label>
													<input
														className='input-text'
														name='introTitle'
														aria-label='introTitle'
														type='text'
														onChange={(e) => {
															changeHandler(e, item);
														}}
														value={!item.introTitle ? '' : item.introTitle}
														disabled={!item.editable}
														placeholder='Intro Title'
													/>
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
											</>
										)}

										{displaySecondary && (
											<div className='form-group'>
												<label className='label' htmlFor='secondaryTitle'>
													Secondary Title
												</label>
												<input
													className='input-text'
													name='secondaryTitle'
													aria-label='secondaryTitle'
													type='text'
													onChange={(e) => {
														changeHandler(e, item);
													}}
													value={
														!item.secondaryTitle ? '' : item.secondaryTitle
													}
													disabled={!item.editable}
													placeholder='Secondary Title'
												/>
											</div>
										)}

										{displayThird && (
											<div className='form-group'>
												<label className='label' htmlFor='thirdTitle'>
													Third Title
												</label>
												<input
													className='input-text'
													name='thirdTitle'
													aria-label='thirdTitle'
													type='text'
													onChange={(e) => {
														changeHandler(e, item);
													}}
													value={!item.thirdTitle ? '' : item.thirdTitle}
													disabled={!item.editable}
													placeholder='Third Title'
												/>
											</div>
										)}

										{displayFourth && (
											<div className='form-group'>
												<label className='label' htmlFor='fourthTitle'>
													Fourth Title
												</label>
												<input
													className='input-text'
													name='fourthTitle'
													aria-label='fourthTitle'
													type='text'
													onChange={(e) => {
														changeHandler(e, item);
													}}
													value={!item.fourthTitle ? '' : item.fourthTitle}
													disabled={!item.editable}
													placeholder='Fourth Title'
												/>
											</div>
										)}
									</div>
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
