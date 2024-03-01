// categories page on the admin side
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../context';
// axios
import axios from 'axios';
// next imports
import Link from 'next/link';
// functions & hooks
import { formatTimeStamp } from '../../../functions/formatTimeStamp';
// components
import Modal from '../../../components/Modal';
import AdminLayout from '../../../components/AdminLayout';
import Status from '../../../components/Status';

const Categories = ({ componentName }) => {
	const [state] = useContext(AppContext);

	// local state
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [successMsg, setSuccessMsg] = useState('');
	const [errorMsg, setErrorMsg] = useState('');

	const [post, setPost] = useState({});

	// update state
	const [updatingCategory, setUpdatingCategory] = useState({});
	const [visible, setVisible] = useState(false);

	const { categories } = post;

	const [name, setName] = useState('');
	const [modalValue, setModalValue] = useState('');

	useEffect(() => {
		getCategories();
	}, []);

	const getCategories = async () => {
		setLoading(true);

		try {
			const { data } = await axios.get('/categories');

			setLoading(false);
			setPost((prev) => ({ ...prev, categories: data }));
		} catch (err) {
			setLoading(false);
			console.error(err);
		}
	};

	const handleChangeName = (event) => {
		event.preventDefault();
		setName(event.target.value);
		setError('');
	};

	const onFinish = async (event) => {
		event.preventDefault();
		setLoading(true);
		try {
			const { data } = await axios.post('/category', { name });
			setPost((prev) => ({ ...prev, categories: [data, ...categories] }));
			setSuccessMsg('Category created successfully');
			setLoading(false);
			setName('');
		} catch (err) {
			console.error(err);

			setErrorMsg('Category create failed');
			setLoading(false);
		}
	};

	const handleDelete = async (item) => {
		setLoading(true);
		try {
			const { data } = await axios.delete(`/category/${item.slug}`);
			setLoading(false);

			setPost((prev) => ({
				...prev,
				categories: categories.filter((cat) => cat._id !== data._id),
			}));
			setSuccessMsg('Category deleted successfully');
			setModalValue('');
		} catch (err) {
			console.error(err);
			setLoading(false);
			setErrorMsg('Category delete failed');
		}
	};

	const handleEdit = async (item) => {
		setUpdatingCategory(item);
		setVisible(true);
	};

	const handleUpdate = async (e) => {
		e.preventDefault();
		setLoading(false);
		try {
			const { data } = await axios.put(`/category/${updatingCategory.slug}`, {
				slug: modalValue,
				name: modalValue,
			});

			const newCategories = categories.map((cat) => {
				if (cat._id === data._id) {
					return data;
				}
				return cat;
			});

			setLoading(false);
			setPost((prev) => ({ ...prev, categories: newCategories }));
			setSuccessMsg('Category updated successfully');
			setVisible(false);
			setUpdatingCategory({});
			setModalValue('');
		} catch (err) {
			console.error(err);
			setLoading(false);
			setErrorMsg('Category update failed');
		}
	};

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

					<div className='wrapper'>
						<div className='group heading'>
							<h1 className='header-one'>Categories</h1>
							<h3 className='header-three'>({categories?.length})</h3>
						</div>

						<div className='content'>
							<div className='add-category'>
								<h4 className='header-four'>Add new category</h4>
								<form className='form-group'>
									<div className='form-group'>
										<label className='label'>Name of category</label>
										<input
											onChange={handleChangeName}
											type='text'
											className='input-text'
											value={name}
										/>
									</div>

									<button
										onClick={onFinish}
										className='button submit'
										style={{ width: '150px' }}
									>
										{loading ? '...Loading' : 'Submit'}
									</button>
								</form>
							</div>

							{categories &&
								categories.map((category) => (
									<div key={category._id} className='each-category'>
										<h3 className='header-three title'>{category.name}</h3>
										<div className='text'>
											<label className='label'>Slug:</label>
											<p className='paragraph slug'>{category.slug}</p>
										</div>

										<div className='text'>
											<label className='label'>Created at:</label>
											<p className='paragraph created'>
												{formatTimeStamp(category.createdAt)} ago
											</p>
										</div>

										<div className='text'>
											<label className='label'>Updated:</label>
											<p className='paragraph updated'>
												{formatTimeStamp(category.updatedAt)} ago
											</p>
										</div>

										<div className='group'>
											<Link
												href={`/category/${category.slug}`}
												className='anchor'
											>
												View
											</Link>
											<button
												className='button edit'
												onClick={() => handleEdit(category)}
											>
												edit
											</button>
											{/* TODO: add prompt for warning before deleting */}
											<button
												className='button delete'
												onClick={() => handleDelete(category)}
											>
												delete
											</button>
										</div>
									</div>
								))}

							<Modal
								content={
									<form
										className='form'
										style={{
											backgroundColor: 'rgba(255,255,255,0.9)',
											width: '50%',
											height: '50%',
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'center',
											alignItems: 'center',
										}}
									>
										<input
											className='input-text'
											type='text'
											placeholder='Add a category'
											value={modalValue || updatingCategory.name}
											onChange={(e) => {
												setModalValue(e.target.value);
											}}
										/>
										<button className='button submit' onClick={handleUpdate}>
											Submit
										</button>
									</form>
								}
								isVisible={visible}
								setIsVisible={setVisible}
							/>
						</div>
					</div>
				</div>
			}
		/>
	);
};

Categories.defaultProps = {
	componentName: 'categories',
};

export default Categories;
