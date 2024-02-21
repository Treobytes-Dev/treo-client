import { useContext, useState, useEffect, useCallback } from 'react';
import { AppContext } from '../../../context';

// next
import { useRouter } from 'next/router';
// axios
import axios from 'axios';

// layout
import AdminLayout from '../../../components/AdminLayout';
import Status from '../../../components/Status';

// components
import CrudTemplateEdit from '../../../components/CrudTemplateEdit';
import Animation from '../../../components/Animation';
import Modal from '../../../components/Modal';

// icons
import { Close } from '../../../assets/icons/Close';

// functions
import {
	lastIdGen,
	addPreviousItems,
	handleDelete,
	handleList,
} from '../../../functions/crudEditHandlers';

const EditPage = ({ componentName }) => {
	// context
	const [state, setState, media, setMedia] = useContext(AppContext);

	// state
	const [pageId, setPageId] = useState('');
	const [name, setName] = useState('');
	const [title, setTitle] = useState('');
	const [content, setContent] = useState({});
	const [featuredImage, setFeaturedImage] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	// template list
	const [templateList, setTemplateList] = useState([]);
	const [templatePreviousItems, setTemplatePreviousItems] = useState([]);

	const [isDeleting, setIsDeleting] = useState('');

	// modal component state
	const [visible, setVisible] = useState(false);
	const [animationModal, setAnimationModal] = useState('');

	// statuses
	const [successMsg, setSuccessMsg] = useState('');
	const [errorMsg, setErrorMsg] = useState('');

	const router = useRouter();

	useEffect(() => {
		loadPage();
	}, [router?.query?.slug]);

	const loadPage = async () => {
		try {
			const { data } = await axios.get(`/page/${router.query.slug}`);

			console.log('loadPage => ', data);
			setPageId(data._id);
			setName(data.name);
			setTitle(data.title);
			setContent(data.content);
		} catch (err) {
			console.error(`Error loading page. ${err}`);
			setErrorMsg('Error loading page.');
		}
	};

	// This code creates a constant named menuLastIdGen which stores the result of the lastIdGen function. The lastIdGen function takes two arguments, templateList and templatePreviousItems, and returns a value. The value is the last id number in the templateList array or the last id number in the templatePreviousItems array, whichever is greater. The menuLastIdGen constant is used in the handleAddClick function below.
	// const menuLastIdGen = lastIdGen(templateList, templatePreviousItems);

	//This is a function that handles the click event when a user wants to add a language. It takes in the last item ID from the menuLastIdGen, creates a new item with an empty string, true boolean and false boolean. It then pushes the new item to the templateList array and sets both templateList and templatePreviousItems arrays with the spread operator. The menuLastIdGen constant is used in the handleAddClick function below.
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

		templateList.push(newItem);

		setTemplateList([...templateList]);
		setTemplatePreviousItems([...templatePreviousItems]);
	}, [templatePreviousItems, templateList]);

	const handleAddPreviousItems = useCallback(() => {
		addPreviousItems([], templatePreviousItems);
	});

	const handleItemDelete = useCallback(() => {
		handleDelete(0, templateList, setTemplateList, handleAddPreviousItems);
		handleSubmitDelete();

		setTimeout(() => {
			setVisible(false);
		}, 400);
	});

	const handleChange = useCallback(
		(e, item) => {
			const { name, value } = e.target;
			item[name] = value;
			handleList(templateList, setTemplateList);

			console.log('handleChange item.url => ', item.url);
			console.log('handleChange item.linkName => ', item.linkName);
			console.log('handleChange item.position => ', item.position);
			console.log('handleChange item.subItems => ', item.subItems);
		},
		[templateList]
	);

	const handleEdit = useCallback(
		(item, editable) => {
			item.editable = editable;
			handleList(templateList, setTemplateList);

			console.log('handleEdit item => ', item);

			handleSubmit();
		},
		[templateList]
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

	const handleSubmitDelete = async () => {
		console.log('handleSubmitDelete: templateList => ', templateList);
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

	// render number of menus created in the select options
	const menuMin = 1;
	const menuLength = templateList.length;

	let options = [];

	// Prepare options using a for loop
	for (let i = menuMin; i <= menuLength; i++) {
		options.push(
			<option key={i} value={i} className='option'>
				{i}
			</option>
		);
	}

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
		const hasDuplicates = checkDuplicatePositions(templateList);

		if (hasDuplicates) {
			setError('Duplicate positions found');
		} else {
			setError('');
		}
	}, [templateList]);

	const handleSave = async () => {
		setLoading(true);

		try {
			const { data } = await axios.post(`/edit-page/${pageId}`, {
				name,
				title,
				content,
			});

			if (data?.error) {
				setErrorMsg(data?.error);
				setLoading(false);
			} else {
				setSuccessMsg('Page updated successfully');
				setLoading(false);

				// offset by 1 second to display the success message
				setTimeout(() => router.push(`/admin/pages`), 4000);
			}
		} catch (err) {
			console.error(`Error saving page. ${err}`);
			setLoading(false);
			setErrorMsg('Error saving page.');
		}
	};

	// status messages
	if (errorMsg) setTimeout(() => setErrorMsg(''), 3000);
	if (successMsg) setTimeout(() => setSuccessMsg(''), 3000);

	return (
		<AdminLayout
			children={
				<div className={`${componentName} main`}>
					{!!errorMsg ||
						(!!successMsg && (
							<Status errorMsg={errorMsg} successMsg={successMsg} />
						))}
					<h1 className='pages'>Edit Page</h1>

					<div className='form-group'>
						<label className='label'>Title</label>
						<input
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className='input-text'
							type='text'
						/>
					</div>

					<CrudTemplateEdit
						handleAddClick={handleAddClick}
						listData={sortByPosition(templateList)}
						handleEditClick={handleEdit}
						changeHandler={handleChange}
						handlePrompt={handleDeletePrompt}
						handleDelete={handleItemDelete}
						handleDeleteClick={handleDeletePrompt}
						addBtnText={'Add template'}
						renderItems={renderItems}
						selectOptions={options}
						optionValue='Select'
						errorDuplicates={error}
					/>
					{renderPrompt()}

					<button
						onClick={handleSave}
						className='button submit'
						style={{ width: '150px' }}
					>
						{loading ? '...Loading' : 'Submit'}
					</button>
				</div>
			}
		/>
	);
};

EditPage.defaultProps = {
	componentName: 'edit-page',
};

export default EditPage;
