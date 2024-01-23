import { useState, useContext } from 'react';
import { AppContext } from '../../../context';
import axios from 'axios';

import generator from 'generate-password';

// components
import AdminLayout from '../../../components/AdminLayout';
import Status from '../../../components/Status';

// TODO: review https://github.com/kaloraat/merncms-code3/blob/main/185_final_code/client/pages/admin/users/new.js
// TODO: set up sending emails from AWS SES

const NewUser = ({ componentName }) => {
	// state
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [website, setWebsite] = useState('');
	const [password, setPassword] = useState(generator.generate({ length: 6 }));
	const [role, setRole] = useState('');
	const [checked, setChecked] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [successMsg, setSuccessMsg] = useState('');
	const [errorMsg, setErrorMsg] = useState('');

	// TODO: add validation for name, email, password, website, role

	const isNotEmpty = () => {
		role.length === 0 ? setError(true) : setError(false);
	};

	const blur = () => {
		isNotEmpty();
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const { data } = await axios.post('/create-user', {
				email,
				name,
				website,
				password,
				role,
				checked,
			});

			if (data.error) {
				setErrorMsg(data.error);
				setLoading(false);
			} else {
				setSuccessMsg('User created successfully');
				setLoading(false);
			}
		} catch (err) {
			console.error(err);
			setErrorMsg('Signup failed. Try again.');
			setLoading(false);
		}
	};

	const handleChangeName = (event) => {
		setName(event.target.value);
		setError('');
	};

	const handleChangeEmail = (event) => {
		setEmail(event.target.value);
		setError('');
	};

	const handleChangePassword = (event) => {
		setPassword(event.target.value);
		setError('');
	};

	const handleChangeWebsite = (event) => {
		setWebsite(event.target.value);
		setError('');
	};

	const handleChangeRole = (event) => {
		setError('');

		setRole(event.target.value);
	};

	const handleGeneratePassword = (e) => {
		e.preventDefault();
		setPassword(generator.generate({ length: 6 }));
	};

	const handleCheckbox = (e) => setChecked(e.target.checked);

	const roleOptions = [
		{ id: 1, value: 'Subscriber', label: 'Subscriber' },
		{ id: 2, value: 'Author', label: 'Author' },
		{ id: 3, value: 'Admin', label: 'Admin' },
	];

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
						<h1 className='header-one'>New User</h1>
						<form className='form'>
							<div className='form-group'>
								<label className='label'>Name</label>
								<input
									onChange={handleChangeName}
									type='text'
									className='input-text'
									value={name}
								/>
							</div>

							<div className='form-group'>
								<label className='label'>Email</label>
								<input
									onChange={handleChangeEmail}
									type='email'
									className='input-text'
									value={email}
								/>
							</div>

							<div className='form-group'>
								<label className='label'>Website</label>

								<input
									onChange={handleChangeWebsite}
									type='website'
									className='input-text'
									value={website}
								/>
							</div>

							<div className='form-group'>
								<label className='label'>Password</label>
								<div className='group'>
									<button className='button' onClick={handleGeneratePassword}>
										Generate password
									</button>
									<input
										onChange={handleChangePassword}
										type='password'
										className='input-text'
										value={password}
									/>
								</div>
							</div>

							<div className='form-group'>
								<label className='label'>Role</label>
								<select
									className='select'
									value={role}
									onBlur={blur}
									onChange={handleChangeRole}
								>
									<option value='' className='option' disabled>
										Select a role
									</option>
									{roleOptions.map((option) => (
										<option
											key={option.id}
											value={option.value}
											className='option'
										>
											{option.value}
										</option>
									))}
								</select>
							</div>

							<div
								className='form-group'
								style={{
									display: 'flex',
									alignItems: 'center',
									flexDirection: 'row',
								}}
							>
								<input
									className='checkbox'
									type='checkbox'
									checked={checked}
									onChange={handleCheckbox}
								/>
								<label
									className='label'
									style={{
										margin: '0 0 0 10px',
									}}
								>
									Send the new user an email about their account.
								</label>
							</div>

							<button onClick={handleSubmit} className='button submit'>
								{loading ? '...Loading' : 'Submit'}
							</button>

							{error && error.errors && (
								<ul>
									{error.errors.map((err, index) => {
										return (
											<li key={index} style={{ color: 'red' }}>
												{err}
											</li>
										);
									})}
								</ul>
							)}
						</form>
					</div>
				</div>
			}
		/>
	);
};

NewUser.defaultProps = {
	componentName: 'new-user',
};

export default NewUser;
