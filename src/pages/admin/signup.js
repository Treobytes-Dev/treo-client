import { useState, useContext } from 'react';
import { AppContext } from '../../context';
import { useRouter } from 'next/router';
import axios from 'axios';

// components
import Navigation from '../../components/Navigation';

const SignUp = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);

	const [state, setState] = useContext(AppContext);

	const router = useRouter();

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

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			setLoading(true);
			const { data } = await axios.post(`/signup`, {
				name,
				email,
				password,
			});

			setLoading(false);
			setName('');
			setEmail('');
			setPassword('');
			setError('');
			setSuccess(true);

			// save in local storage
			// TODO: Refactor to not display TOKEN in local storage
			window.localStorage.setItem('auth', JSON.stringify(data));
			Cookies.set('token', data.token);

			// update content
			setState({
				user: data.user,
				token: Cookies.get('token'),
			});

			// redirect user
			router.push('/admin/dashboard');
		} catch (err) {
			console.error(err);
			setError(err);
			setLoading(false);
		}
	};

	if (state && state.token) router.push('/admin/dashboard');

	return (
		<>
			<Navigation />
			<div className='sign-up'>
				<h1>SignUp</h1>
				{loading && <h3>Loading...</h3>}

				{success && (
					<p
						style={{ color: 'white', backgroundColor: 'green', color: 'white' }}
					>
						Success!
					</p>
				)}

				<form>
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
						<label className='label'>Password</label>
						<input
							onChange={handleChangePassword}
							type='password'
							className='input-text'
							value={password}
						/>
					</div>

					<button onClick={handleSubmit} className='button submit'>
						{loading ? '...Loading' : 'Submit'}
					</button>

					{/* {JSON.stringify(error, null, 4)} */}
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

					{/* {error && <p style={{ color: "red" }}>{error.errors}</p>} */}
				</form>
			</div>
		</>
	);
};

export default SignUp;
