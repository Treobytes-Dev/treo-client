import { useState, useContext, useEffect, useCallback, use } from 'react';
import { AppContext } from '../../../context';

import axios from 'axios';

import { useRouter } from 'next/router';
import {
	lastIdGen,
	addPreviousItems,
	handleDelete,
	handleList,
} from '../../../functions/crudEditHandlers';

// components
import AdminLayout from '../../../components/AdminLayout';
import Animation from '../../../components/Animation';
import CrudMenuEdit from '../../../components/CrudMenuEdit';
import Modal from '../../../components/Modal';
import Status from '../../../components/Status';
// icons
import { Close } from '../../../assets/icons/Close';

const Menus = ({ componentName }) => {
	// context
	const [state, media] = useContext(AppContext);

	// local state
	// const [isFocused, setIsFocused] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');
	const [modalValue, setModalValue] = useState('');
	const [visible, setVisible] = useState(false);

	const [menuList, setMenuList] = useState([]);
	const [menuPreviousItems, setMenuPreviousItems] = useState([]);

	const [isDeleting, setIsDeleting] = useState('');

	const [animationModal, setAnimationModal] = useState('');

	// hooks
	const router = useRouter();

	// This code creates a constant named menuLastIdGen which stores the result of the lastIdGen function. The lastIdGen function takes two arguments, menuList and menuPreviousItems, and returns a value. The value is the last id number in the menuList array or the last id number in the menuPreviousItems array, whichever is greater. The menuLastIdGen constant is used in the handleAddClick function below.
	// const menuLastIdGen = lastIdGen(menuList, menuPreviousItems);

	//This is a function that handles the click event when a user wants to add a language. It takes in the last item ID from the menuLastIdGen, creates a new item with an empty string, true boolean and false boolean. It then pushes the new item to the menuList array and sets both menuList and menuPreviousItems arrays with the spread operator. The menuLastIdGen constant is used in the handleAddClick function below.
	const handleAddClick = useCallback(() => {
		// todo:
		// functionality to select position of menu item for display
		// configure back end modal and controller to handle menu
		// style input fields

		const min = 10; // minimum value
		const max = 99; // maximum value

		const createNewItem = (id, url, linkName, position, subItems, editable) => {
			return {
				id: id,
				url: url,
				linkName: linkName,
				position: position,
				subItems: subItems,
				editable: editable,
			};
		};

		const newItem = createNewItem(
			Math.floor(Math.random() * (max - min + 1)) + min, // id
			'', // url
			'', // linkName
			0, // position
			[], // subItems
			true // editable
		);

		!!newItem.editable &&
			console.log('handleAddClick newItem.editable', newItem.editable);

		menuList.push(newItem);

		setMenuList([...menuList]);
		setMenuPreviousItems([...menuPreviousItems]);
	}, [menuPreviousItems, menuList]);

	const handleAddPreviousItems = useCallback(() => {
		addPreviousItems([], menuPreviousItems);
	});

	const handleItemDelete = useCallback(() => {
		handleDelete(0, menuList, setMenuList, handleAddPreviousItems);
		handleSubmitDelete();

		setTimeout(() => {
			setVisible(false);
		}, 400);
	});

	const handleChange = useCallback(
		(e, item) => {
			const { name, value } = e.target;
			item[name] = value;
			handleList(menuList, setMenuList);

			console.log('handleChange item.url => ', item.url);
			console.log('handleChange item.linkName => ', item.linkName);
			console.log('handleChange item.position => ', item.position);
			console.log('handleChange item.subItems => ', item.subItems);
		},
		[menuList]
	);

	const handleEdit = useCallback(
		(item, editable) => {
			item.editable = editable;
			handleList(menuList, setMenuList);

			console.log('handleEdit item => ', item);

			handleSubmit();
		},
		[menuList]
	);

	const handleDeletePrompt = useCallback((e, item) => {
		const { name, value } = e.target;
		item[name] = value;

		console.log('handleDeletePrompt item.url => ', item.url);
		console.log('handleDeletePrompt item.name => ', item.name);

		setVisible(true);
		setAnimationModal('fade-in');
		setIsDeleting(item.name);
	}, []);

	// Adds a new item to the sub-array
	const addToSubArray = (id) => {
		const updatedItems = menuList.map((item) => {
			if (item.id === id) {
				return {
					...item,
					subItems: [...item.subItems, item.subItems],
				};
			}
			return item;
		});
		setMenuList(updatedItems);
	};

	// Deletes an item from the sub-array
	const deleteFromSubArray = (id, subIndex) => {
		const updatedItems = menuList.map((item) => {
			if (item.id === id) {
				return {
					...item,
					subItems: item.subItems.filter((_, index) => index !== subIndex),
				};
			}
			return item;
		});
		setMenuList(updatedItems);
	};

	const handleSubmitDelete = async () => {
		console.log('handleSubmitDelete: menuList => ', menuList);
	};

	const handleSubmit = async () => {
		console.log('handleSubmit: menuList => ', menuList);
	};

	const renderItems = (item) => {
		const renderUrl = item.url;
		const renderLinkName = item.linkName;
		const renderPosition = item.position;
		const renderSubItems = item.subItems.map((subItem, subIndex) => (
			<div key={subIndex} className='render-item render-sub-items'>
				<div className='sub-link-name'>
					<label className='label'>Sub Link Name</label>
					<p className='paragraph'>{subItem.subLinkName}</p>
				</div>

				<div className='sub-url-name'>
					<label className='label'>Sub URL Name</label>
					<p className='paragraph'>{subItem.subUrlName}</p>
				</div>
			</div>
		));

		return (
			<>
				<div className='render-item render-link-name'>
					<label className='label'>Link Name</label>
					<p className='paragraph'>{renderLinkName}</p>
				</div>

				<div className='render-item render-link-name'>
					<label className='label'>URL</label>
					<p className='paragraph'>{renderUrl}</p>
				</div>

				<div className='render-item render-link-name'>
					<label className='label'>Position</label>
					<p className='paragraph'>{renderPosition}</p>
				</div>

				<>{renderSubItems}</>
			</>
		);
	};

	const renderPrompt = () => (
		<Animation componentName='animation' typeOfAnimation={animationModal}>
			<Modal
				content={
					<div className='wrapper'>
						<div className='header-close'>
							<button
								className='btn-close'
								onClick={() => {
									setAnimationModal('fade-out');
									setTimeout(() => {
										setVisible(false);
									}, 400);
								}}
							>
								<Close />
							</button>
						</div>
						<h5 className='header-five'>
							Are you sure you want to delete {isDeleting}?
						</h5>
						<div className='confirmation'>
							<button className='button delete' onClick={handleItemDelete}>
								Delete
							</button>
							<button
								className='button edit'
								onClick={() => {
									setAnimationModal('fade-out');
									setTimeout(() => {
										setVisible(false);
									}, 400);
								}}
							>
								No
							</button>
						</div>
					</div>
				}
				isVisible={visible}
				setIsVisible={setVisible}
				closeButton={false}
			/>
		</Animation>
	);

	// render number of menus created in the select options
	const menuMin = 1;
	const menuLength = menuList.length;

	let options = [];

	// Prepare options using a for loop
	for (let i = menuMin; i <= menuLength; i++) {
		options.push(
			<option key={i} value={i} className='option'>
				{i}
			</option>
		);
	}

	const focusLinkName = () => {
		// setIsFocused(true);
	};

	const blurLinkName = () => {
		// setIsFocused(false);
		// isNotEmpty();
		// isEmail();
		// isPassword();
	};

	if (errorMsg) setTimeout(() => setErrorMsg(''), 3000);

	function checkDuplicatePositions(items) {
		const positionMap = new Map();

		for (const item of items) {
			if (positionMap.has(item.position)) {
				// If the position is already encountered, return or handle duplicate
				return true; // Indicate that a duplicate was found
			} else {
				// Otherwise, add the position to the map
				positionMap.set(item.position, true);
			}
		}

		return false; // Indicate that no duplicates were found
	}

	function sortByPosition(array) {
		return array.sort((a, b) => parseInt(a.position) - parseInt(b.position));
	}

	useEffect(() => {
		const hasDuplicates = checkDuplicatePositions(menuList);

		if (hasDuplicates) {
			setError('Duplicate positions found');
		} else {
			setError('');
		}
	}, [menuList]);

	return (
		<AdminLayout
			children={
				<div className={`${componentName} main`}>
					{!!errorMsg ||
						(!!loading && <Status errorMsg={errorMsg} loading={loading} />)}

					{JSON.stringify(menuList, null, 5)}
					<div className='wrapper'>
						<h1 className='header-one'>Menus</h1>
						<h3 className='header-three'>Header</h3>
						<CrudMenuEdit
							handleAddClick={handleAddClick}
							listData={sortByPosition(menuList)}
							handleEditClick={handleEdit}
							handleAddToSubArray={addToSubArray}
							handleDeleteFromSubArray={deleteFromSubArray}
							changeHandler={handleChange}
							handlePrompt={handleDeletePrompt}
							handleDelete={handleItemDelete}
							handleDeleteClick={handleDeletePrompt}
							addBtnText={'Add new link'}
							renderItems={renderItems}
							selectOptions={options}
							optionValue='Select'
							errorDuplicates={error}
						/>
						{renderPrompt()}

						<h3 className='header-three'>Footer</h3>
						<div className='wrapper'>Footer menu section</div>
					</div>
				</div>
			}
		/>
	);
};

Menus.defaultProps = {
	componentName: 'menus',
};

export default Menus;
