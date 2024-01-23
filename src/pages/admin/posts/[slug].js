// page to edit a single post
import { useContext, useState, useEffect, useRef } from 'react';
import { AppContext } from '../../../context';
import axios from 'axios';

// next
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// react quill
import 'react-quill/dist/quill.snow.css';
import { formats, modules } from '../../../modules/reactQuill';
// components
import AdminLayout from '../../../components/AdminLayout';
import MultiSelectSearch from '../../../components/MultiSelectSearch';
import Library from '../../../components/Library';
import Modal from '../../../components/Modal';
// icons
import AddPhoto from '../../../assets/icons/AddPhoto';
import NoImage from '../../../assets/icons/NoImage';
// functions && modules
import { uploadImage } from '../../../functions/upload';

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */

const QuillNoSSRWrapper = dynamic(
	async () => {
		const { default: RQ } = await import('react-quill');
		return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
	},
	{ ssr: false }
);

const EditPost = ({ componentName }) => {
	const [media, setMedia] = useContext(AppContext);
	// state
	const [postId, setPostId] = useState('');
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [categories, setCategories] = useState([]); // post's existing categories
	const [loadedCategories, setLoadedCategories] = useState([]);
	const [featuredImage, setFeaturedImage] = useState({});
	const [visible, setVisible] = useState(false);
	const [loading, setLoading] = useState(true);

	// tabs component state
	const [activeTab, setActiveTab] = useState('tab1');

	// STATE for query
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	// statuses
	const [error, setError] = useState('');
	const [successMsg, setSuccessMsg] = useState('');
	const [errorMsg, setErrorMsg] = useState('');

	// media Modal
	// const [visibleMedia, setVisibleMedia] = useState(false);

	// hook
	const router = useRouter();

	useEffect(() => {
		loadPost();
	}, [router?.query?.slug]);

	useEffect(() => {
		loadCategories();
		fetchMedia();
	}, []);

	// Debounce search input
	useEffect(() => {
		const categoryNames = loadedCategories.map((category) => category.name);

		if (searchTerm === '') {
			// currently return all categories without filtering
			// if queries aren't supposed to be present, setSearchResults([])
			setSearchResults(categoryNames);
			setIsLoading(false);
		} else {
			setIsLoading(true);
			const timerId = setTimeout(() => {
				const results = categoryNames.filter((item) =>
					item.toLowerCase().includes(searchTerm.toLowerCase())
				);
				setIsLoading(false);
				setSearchResults(results);
			}, 500); // delay of 500ms
			return () => clearTimeout(timerId);
		}
	}, [searchTerm, loadedCategories]);

	const fetchMedia = async () => {
		try {
			const { data } = await axios.get('/media');
			setMedia((prev) => ({ ...prev, images: data }));
		} catch (err) {
			console.error(err);
		}
	};

	const loadPost = async () => {
		try {
			const { data } = await axios.get(`/post/${router.query.slug}`);

			setTitle(data.post.title);
			setContent(data.post.content);
			setFeaturedImage(data.post.featuredImage);
			setPostId(data.post._id);
			// push category names
			let arr = [];
			data.post.categories.map((c) => arr.push(c.name));

			setCategories(arr);
			setLoading(false);
		} catch (err) {
			console.error('There was a error loading the post for editing a post');
		}
	};

	const loadCategories = async () => {
		try {
			const { data } = await axios.get('/categories');
			setLoadedCategories(data);
		} catch (err) {
			console.error(
				'There was a error loading the categories for editing a post'
			);
		}
	};

	// image methods
	const handleImageUpload = async (e) => {
		const file = e.target.files[0];
		let formData = new FormData();
		formData.append('file', file);
		setLoading(true);

		try {
			const { data } = await axios.post('/upload-image-file', formData);

			// new implementation
			setMedia({
				images: [...media.images, data],
				selected: data,
			});

			setLoading(false);
			setSuccessMsg('Image uploaded successfully');
		} catch (err) {
			console.error(err);
			setErrorMsg(err.message);
			setLoading(false);
		}
	};

	const handleImageDelete = async (imageId) => {
		setLoading(true);

		try {
			const { data } = await axios.delete(`/media/${imageId}`);
			if (data.ok) {
				setMedia({
					...media,
					images: media.images.filter((image) => image._id !== imageId),
					selected: null,
				});
				setSuccessMsg('Image deleted successfully');
			}
			setLoading(false);
		} catch (err) {
			console.error(err);
			setErrorMsg('Image delete failed. Try again.');
			setLoading(false);
		}
	};

	const handleSelectedMedia = (image) => {
		setMedia({ ...media, selected: image });
		setVisible(false);
	};

	// methods for selecting categories
	const handleOptionClick = (option) => {
		categories.push(option);

		let newCategories = [...new Set(categories)];

		setCategories([...newCategories]);
	};

	const handleDeleteSelectedCategory = (indexToDelete) => {
		setCategories(categories.filter((_, index) => index !== indexToDelete));
	};

	// TODO: fix handlePublish() with selected image
	const handlePublish = async () => {
		setLoading(true);

		try {
			const { data } = await axios.put(`/edit-post/${postId}`, {
				title,
				content,
				categories,
				// The conditional logic has been simplified using the nullish coalescing operator (??). This operator returns the first non-null/undefined value from the provided options.
				// If media.selected._id is not null or undefined, it is assigned to featuredImage.
				// If media.selected._id is null or undefined, featuredImage._id is assigned to featuredImage if it is not null or undefined.
				// If both media.selected._id and featuredImage._id are null or undefined, undefined is assigned to featuredImage.
				featuredImage: media?.selected?._id ?? featuredImage?._id ?? undefined,

				// original implementation
				// featuredImage: media?.selected?._id
				// ? media?.selected?._id
				// : featuredImage?._id
				// ? featuredImage._id
				// : undefined,
			});

			if (data?.error) {
				setErrorMsg(data?.error);
				setLoading(false);
			} else {
				setSuccessMsg('Post updated successfully');
				setMedia({ ...media, selected: null });
				setLoading(false);

				// offset by 1 second to display the success message
				setTimeout(() => router.push(`/admin/posts`), 4000);
			}
		} catch (err) {
			console.error(err);
			setErrorMsg('Post create failed. Try again.');
			setLoading(false);
		}
	};

	// react quill methods
	const reactQuillRef = useRef(null);
	useEffect(() => {
		if (reactQuillRef && reactQuillRef.current) {
			// Get the Quill instance
			const quill = reactQuillRef.current.getEditor();

			// Set the custom image handler
			if (quill && quill.getModule) {
				quill.getModule('toolbar').addHandler('image', () => {
					const input = document.createElement('input');
					input.setAttribute('type', 'file');
					input.setAttribute('accept', 'image/*');
					input.click();

					input.onchange = async () => {
						const file = input.files[0];
						handleEmbeddedImage(file, (url) => {
							const range = quill.getSelection(true);
							quill.insertEmbed(range.index, 'image', url);
						});
					};
				});
			}

			return () => {
				quill.getModule('toolbar').removeHandler('image');
			};
		}
	}, [reactQuillRef]);
	// Empty dependency array means this useEffect runs once when the component mounts.

	// Assuming the handleEmbeddedImage function is moved outside this component
	// or is provided from a higher-level component as a prop.
	const handleEmbeddedImage = (file) => {
		console.log('HEY!');

		uploadImage(file);
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
					<div className='wrapper'>
						<div className='columns content'>
							<div className='col col-1'>
								<div
									className='group title'
									style={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
									}}
								>
									<h1 className='header-one'>Edit -</h1>
									<h3 className='header-three' style={{ marginLeft: '15px' }}>
										{title}
									</h3>
								</div>
								{error && <div className='error'>{error}</div>}
								<form className='form-group'>
									<label className='label' style={{ marginBottom: '10px' }}>
										Title
									</label>
									<input
										style={{
											marginBottom: '10px',
										}}
										onChange={(e) => {
											setTitle(e.target.value);

											if (title && title.length > 0) {
												localStorage.setItem(
													'post-title',
													JSON.stringify(e.target.value)
												);
											}
										}}
										type='text'
										className='input-text'
										value={title}
									/>
									{/* TODO:
									 * refer to react-node-mern-cms-wordpress-clone - section 13
									 * resolve issue with react-quill embedded image upload
									 * https://dev.to/a7u/reactquill-with-nextjs-478b
									 *
									 * Alternatives:
									 * (google search : https://www.google.com/search?q=react+markdown+editor+with+image+upload&rlz=1CDGOYI_enUS759US759&oq=react+hooks+text+editor+image&gs_lcrp=EgZjaHJvbWUqBwgDEAAYogQyBggAEEUYOTIKCAEQABiiBBiJBTIHCAIQABiiBDIHCAMQABiiBNIBCTIwODY3ajBqN6gCALACAA&hl=en-US&sourceid=chrome-mobile&ie=UTF-8#ip=1)
									 * https://www.npmjs.com/package/react-markdown-editor-lite?activeTab=readme
									 * https://reactjsexample.com/a-markdown-editor-with-react/
									 *
									 */}
									<QuillNoSSRWrapper
										forwardedRef={reactQuillRef}
										modules={modules}
										formats={formats}
										theme='snow'
										onChange={(e) => {
											setContent(e);

											if (content && content.length > 0) {
												localStorage.setItem('post-content', JSON.stringify(e));
											}
										}}
										placeholder='write something...'
										value={content}
									/>
								</form>
							</div>

							<div className='col col-2'>
								{/* TODO: functionality to preview */}
								{/* <button
								onClick={() => {
									console.log('button col-2');
								}}
								className='button submit'
							>
								{!!loading ? '...Loading' : 'Preview'}
							</button> */}

								<div className='group featured-image'>
									{/* TODO
									 * add functionality to select featured image
									 */}
									{/* add functionality to show modal with image at full size */}
									<button
										onClick={() => setVisible(true)}
										className='button edit'
									>
										{!!loading ? '...Loading' : 'Featured Image'}
									</button>

									{media?.selected ? (
										<>
											<label className='label'>Featured image</label>
											<img
												style={{ marginTop: '15px', width: '100px' }}
												src={media?.selected?.url}
												alt={`${title} featured image`}
											/>
										</>
									) : featuredImage?.url ? (
										<>
											<label className='label'>Featured image</label>
											<img
												style={{ marginTop: '15px', width: '100px' }}
												src={featuredImage?.url}
												alt={`${title} featured image`}
											/>
										</>
									) : (
										<>
											<NoImage />
											<p className='paragraph'>No featured image selected </p>
										</>
									)}
								</div>

								<div className='group search-categories'>
									<label className='label'>Search categories</label>
									<MultiSelectSearch
										queryValue={searchTerm}
										handleSearch={(e) => setSearchTerm(e.target.value)}
										isLoading={isLoading}
										handleAddOption={handleOptionClick}
										searchResults={searchResults}
									/>
								</div>

								<div className='group selected-categories'>
									<label className='label'>Selected categories</label>
									<div className='selected-category'>
										{!!categories &&
											categories.map((item, index) => {
												return (
													<div key={index} className='category'>
														<p className='item'>{item}</p>
														<button
															className='close btn'
															onClick={() =>
																handleDeleteSelectedCategory(index)
															}
														>
															x
														</button>
													</div>
												);
											})}
									</div>
								</div>

								<button className='button submit' onClick={handlePublish}>
									{loading ? '...Publishing' : 'Publish'}
								</button>
							</div>

							<Modal
								content={
									<div className='featured-image add-image'>
										<div className='tabs'>
											<h2 className='header-two'>Media</h2>
											<div className='tab-list'>
												<button
													className={activeTab === 'tab1' ? 'active' : ''}
													onClick={() => setActiveTab('tab1')}
												>
													Upload Files
												</button>
												<button
													className={activeTab === 'tab2' ? 'active' : ''}
													onClick={() => setActiveTab('tab2')}
												>
													Media Library
												</button>
											</div>
											<div className='tab-content'>
												{activeTab === 'tab1' && (
													<>
														{/* TODO:
														 * BUILD drag-drop component
														 */}

														{/* upload image */}
														<label className='label upload-image'>
															<AddPhoto
																fill='#000'
																dimensions='100'
																viewBox='0 96 960 960'
															/>

															<input
																onChange={handleImageUpload}
																type='file'
																accept='images/*'
																hidden
															/>
														</label>
													</>
												)}
												{activeTab === 'tab2' && (
													<Library
														media={media}
														handleImageDelete={handleImageDelete}
														handleSelectedMedia={handleSelectedMedia}
														altTag={title}
													/>
												)}
											</div>
										</div>
									</div>
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

EditPost.defaultProps = {
	componentName: 'edit-post',
};

export default EditPost;
