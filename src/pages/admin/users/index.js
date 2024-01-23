// this page displays the users that are registered in the app
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../../context';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';

// components
import AdminLayout from '../../../components/AdminLayout';
import Status from '../../../components/Status';

// icons
import Avatar from '../../../assets/icons/Avatar';

const AllUsers = ({ componentName }) => {
	const [state] = useContext(AppContext);

	// state
	const [keyword, setKeyword] = useState('');
	// hook
	const router = useRouter();
	// state
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [successMsg, setSuccessMsg] = useState('');
	const [errorMsg, setErrorMsg] = useState('');

	useEffect(() => {
		if (state?.token) loadUsers();
	}, [state?.token]);

	const loadUsers = async (req, res) => {
		setLoading(true);

		try {
			const { data } = await axios.get('users');
			setUsers(data);
			setLoading(false);
		} catch (err) {
			console.error(`There is an error retrieving all users: ${err}`);
			setErrorMsg('There is an error retrieving all users');
			setLoading(false);
		}
	};

	const handleDelete = async (user) => {
		setLoading(true);

		try {
			if (user._id === state.user._id) {
				setErrorMsg('You can not delete yourself!');
				return;
			}

			try {
				await axios.delete(`/user/${user._id}`);
				setUsers((prev) => prev.filter((u) => u._id !== user._id));
				setSuccessMsg('User deleted');
			} catch (err) {
				console.error(`There is an error deleting user: ${err}`);
				setErrorMsg('There is an error deleting user');
			}

			setLoading(false);
		} catch (err) {
			console.error(`There is an error deleting user: ${err}`);
			setErrorMsg('There is an error deleting user');
			setLoading(false);
		}
	};

	const filteredUsers = users?.filter((u) =>
		u.name.toLowerCase().includes(keyword)
	);

	const handleSearchUsers = (e) => {
		setKeyword(e.target.value.toLowerCase());
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
							<h1 className='header-one'>Users</h1>
							<h4 className='header-four'>({users?.length})</h4>
						</div>
						<input
							placeholder='Search'
							type='search'
							value={keyword}
							onChange={handleSearchUsers}
							className='input-text search'
						/>
						<div className='group titles'>
							<h5 className='title header-five'>Name</h5>
							<h5 className='title header-five'>Email</h5>
							<h5 className='title header-five'>Role</h5>
							<h5 className='title header-five'>Posts</h5>
						</div>
						{/* replace filteredUsers for user to return all users */}
						{filteredUsers?.length > 0 &&
							filteredUsers?.map((user) => (
								<div key={user._id} className='group user'>
									<div className='info'>
										{!user?.image?.url ? (
											<Avatar />
										) : (
											<img
												className='avatar'
												src={user?.image?.url}
												alt={user?.name}
											/>
										)}

										<p className='paragraph name'>
											<Link
												className='anchor'
												href={`/admin/profile/${user._id}`}
											>
												{user.name}
											</Link>
										</p>

										<p className='paragraph email'>{user.email}</p>
										<p className='paragraph role'>{user.role}</p>
										<p className='paragraph posts'>
											{user?.posts?.length || 0}
										</p>
									</div>

									{state.user.role === 'admin' && (
										<div className='buttons'>
											<button className='button edit'>
												<Link
													className='anchor'
													href={`/admin/users/${user._id}`}
												>
													Edit
												</Link>
											</button>
											<button
												className='button delete'
												disabled={user._id === state.user._id}
												onClick={() => handleDelete(user)}
											>
												{loading ? 'Loading...' : 'Delete'}
											</button>
										</div>
									)}
								</div>
							))}
					</div>
				</div>
			}
		/>
	);
};

AllUsers.defaultProps = {
	componentName: 'all-users',
};

export default AllUsers;
