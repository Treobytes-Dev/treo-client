import { useState, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { AppContext } from '../../context';
import Cookies from 'js-cookie';

// components
import Navigation from '../../components/Navigation';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const [state, setState] = useContext(AppContext);

	const handleChangeEmail = (event) => {
		setEmail(event.target.value);
		setError('');
	};

	const handleChangePassword = (event) => {
		setPassword(event.target.value);
		setError('');
	};

	const router = useRouter();

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			setLoading(true);
			const { data } = await axios.post(`/signin`, {
				email,
				password,
			});

			// save in local storage
			// TODO: Refactor to not display TOKEN in local storage
			window.localStorage.setItem('auth', JSON.stringify(data));
			Cookies.set('token', data.token);

			// update content
			setState({
				user: data.user,
				token: Cookies.get('token'),
			});

			setLoading(false);

			router.push('/admin/dashboard');
		} catch (err) {
			// TODO: configure error to be thrown on screen
			console.error(err.response.data);
			setError(err.response.data);
			setLoading(false);
		}
	};

	if (state && state.token) router.push('/admin/dashboard');

	return (
		<>
			<Navigation />
			<div className='sign-up'>
				<h1>SignIn</h1>
				{loading && <h3>Loading...</h3>}

				<form>
					<div className='form-group'>
						<label className='label'>
							<p>Email</p>
							<input
								onChange={handleChangeEmail}
								type='email'
								className='input-text'
								value={email}
							/>
						</label>
					</div>

					<div className='form-group'>
						<label className='label'>
							<p>Password</p>
							<input
								onChange={handleChangePassword}
								type='password'
								className='input-text'
								value={password}
							/>
						</label>
					</div>

					<button onClick={handleSubmit} className='button submit'>
						{loading ? '...Loading' : 'Submit'}
					</button>

					{error && (
						<ul className='unordered-list'>
							{error.errors.map((err, index) => {
								return (
									<li key={index} style={{ color: 'red' }}>
										{err}
									</li>
								);
							})}
						</ul>
					)}

					{/* {JSON.stringify(error, null, 4)} */}

					{/* {error && <p style={{ color: "red" }}>{error.error}</p>} */}
				</form>
			</div>
		</>
	);
};

export default SignIn;
