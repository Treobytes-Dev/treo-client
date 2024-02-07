import { useState, useContext, useEffect, useCallback } from 'react';
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
	const [loading, setLoading] = useState(false);
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
		// const lastItemId = menuLastIdGen;

		// todo:
		// add functionality to check if has sub menu
		// functionality for sub menu
		// functionality to view existing pages
		// functionality to select position of menu item for display
		// configure back end modal and controller to handle menu
		// style input fields

		const min = 10; // minimum value
		const max = 99; // maximum value

		const createNewItem = (
			id,
			url,
			linkName,
			position,
			subItems,
			editable,
			checked
		) => {
			return {
				id: id,
				url: url,
				linkName: linkName,
				position: position,
				subItems: subItems,
				editable: editable,
				checked: checked,
			};
		};

		const newItem = createNewItem(
			Math.floor(Math.random() * (max - min + 1)) + min, // id
			'', // url
			'', // linkName
			0, // position
			[], // subItems
			true, // editable
			false // checked
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
					subItems: [...item.subItems, `SubItem ${item.subItems.length + 1}`],
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
		const renderSubItems = item.subItems.length;

		return (
			<>
				<p className={renderLinkName}>{renderLinkName}</p>
				<p className={renderUrl}>{renderUrl}</p>
				<p className={renderPosition}>{renderPosition}</p>
				<p className={renderSubItems}>{renderSubItems}</p>HEY
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

	if (errorMsg) setTimeout(() => setErrorMsg(''), 3000);

	return (
		<AdminLayout
			children={
				<div className={`${componentName} main`}>
					{!!errorMsg ||
						(!!loading && <Status errorMsg={errorMsg} loading={loading} />)}

					<div className='wrapper'>
						<h1 className='header-one'>Menus</h1>

						<h3 className='header-three'>Header</h3>
						<CrudMenuEdit
							handleAddClick={handleAddClick}
							listData={menuList}
							handleEditClick={handleEdit}
							handleAddToSubArray={addToSubArray}
							handleDeleteFromSubArray={deleteFromSubArray}
							changeHandler={handleChange}
							handlePrompt={handleDeletePrompt}
							handleDelete={handleItemDelete}
							handleDeleteClick={handleDeletePrompt}
							addBtnText={'Add new link'}
							renderItems={renderItems}
							// selectOptions={languagesArr.map((option) => (
							// 	<option key={randomId(10)} className='option' value={option.id}>
							// 		{option.id}
							// 	</option>
							// ))}
							optionValue='Select'
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
