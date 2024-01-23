import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../../context';

import axios from 'axios';

import { useRouter } from 'next/router';

// components
import AdminLayout from '../../../components/AdminLayout';
import Status from '../../../components/Status';

const UpdateUser = ({ componentName }) => {
	// context
	const [state, setState, media, setMedia] = useContext(AppContext);

	// state
	const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [website, setWebsite] = useState('');
	const [password, setPassword] = useState();
	const [role, setRole] = useState('');
	const [image, setImage] = useState({});
	const [loading, setLoading] = useState(false);

	// statuses
	const [error, setError] = useState('');
	const [successMsg, setSuccessMsg] = useState('');
	const [errorMsg, setErrorMsg] = useState('');

	// hooks
	const router = useRouter();

	useEffect(() => {
		const currentUser = async () => {
			try {
				const { data } = await axios.get(`/user/${router?.query?.id}`);

				setId(data._id);
				setName(data.name);
				setEmail(data.email);
				setWebsite(data.website);
				setRole(data.role);
				setImage(data.image);
			} catch (err) {
				console.error('Error getting current user.', err);
			}
		};
		if (state?.token) currentUser();
	}, [state, router?.query?.id]);

	const handleSubmit = async (e) => {
		const userRole = state?.user?.role;
		setLoading(true);

		e.preventDefault();
		try {
			const { data } = await axios.put(
				`/update-user-by-${userRole === 'admin' ? 'admin' : 'user'}`,
				{
					id,
					name,
					email,
					password,
					website,
					role,
					image: media?.selected?._id
						? media?.selected?._id
						: image?._id
						? image?._id
						: undefined,
				}
			);

			if (data?.error) {
				setErrorMsg(data.error);
				console.error(data.error);
				setLoading(false);
			} else {
				// update context and local storage for current user only
				if (state?.user?._id === data._id) {
					setState({ ...state, user: data });
					let fromLocalStorage = JSON.parse(localStorage.getItem('auth'));
					fromLocalStorage.user = data;
					localStorage.setItem('auth', JSON.stringify(fromLocalStorage));
				}

				setSuccessMsg('User updated successfully');
				setLoading(false);
			}
		} catch (err) {
			console.error(err);

			setErrorMsg('User update failed. Try again.');
			setLoading(false);
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

					<h1 className='header-one'>Profile Update</h1>

					<div style={{ marginBottom: 20, textAlign: 'center' }}>
						{media.selected ? (
							<img src={media.selected.url} />
						) : image ? (
							<img src={image.url} />
						) : (
							''
						)}
					</div>

					{/* TODO: add Media
					 * option for user to upload profile image
					 * option for user to select from existing images
					 */}
					{/* {auth?.user?.role !== "Subscriber" && <Media />} */}
					<form className='form-group'>
						<div className='form-group'>
							{/* TODO: add validation for if empty */}
							<label className='label'>Name</label>
							<input
								className='input-text'
								style={{ margin: '20px 0px 10px 0px' }}
								placeholder='Name'
								type='text'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div className='form-group'>
							{/* TODO: add validation for if empty */}
							<label className='label'>Email</label>
							<input
								className='input-text'
								style={{ margin: '10px 0px 10px 0px' }}
								placeholder='Email'
								type='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div className='form-group'>
							<label className='label'>Website</label>
							<input
								className='input-text'
								style={{ margin: '10px 0px 10px 0px' }}
								placeholder='Website'
								value={website}
								onChange={(e) => setWebsite(e.target.value)}
							/>
						</div>

						<div className='form-group'>
							<label className='label'>Password</label>
							<input
								className='input-text'
								style={{ margin: '10px 0px 10px 0px' }}
								placeholder='Password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						{state.user.role === 'admin' && (
							<div className='form-group'>
								<label className='label'>Role</label>
								<select
									value={role}
									style={{ margin: '10px 0px 10px 0px', width: '100%' }}
									onChange={(e) => setRole(e.target.value)}
									className='select'
								>
									{id !== state.user._id && (
										<>
											<option value='subscriber' className='option'>
												Subscriber
											</option>
											<option value='author' className='option'>
												Author
											</option>
										</>
									)}

									<option value='admin'>Admin</option>
								</select>
							</div>
						)}

						<button onClick={handleSubmit} className='button submit'>
							{loading ? '...Loading' : 'Submit'}
						</button>
					</form>
				</div>
			}
		/>
	);
};

UpdateUser.defaultProps = {
	componentName: 'update-user',
};

export default UpdateUser;
