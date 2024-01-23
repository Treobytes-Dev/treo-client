import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../../context';

import axios from 'axios';

import { useRouter } from 'next/router';

// components
import AdminLayout from '../../../components/AdminLayout';
import Status from '../../../components/Status';
// icons
import Avatar from '../../../assets/icons/Avatar';

const Profile = ({ componentName }) => {
	// context
	const [state, media] = useContext(AppContext);

	// local state
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [role, setRole] = useState('');
	const [image, setImage] = useState({});
	const [loading, setLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');

	// hooks
	const router = useRouter();

	useEffect(() => {
		const currentUser = async () => {
			setLoading(true);
			try {
				const { data } = await axios.get(`/user/${router?.query?.id}`);

				setName(data.name);
				setEmail(data.email);
				setRole(data.role);
				setImage(data.image);
				setLoading(false);
			} catch (err) {
				console.error('Error getting current user.', err);
				setErrorMsg('Error getting current user.');
				setLoading(false);
			}
		};
		if (state?.token) currentUser();
	}, [state, router?.query?.id]);

	if (errorMsg) setTimeout(() => setErrorMsg(''), 3000);

	return (
		<AdminLayout
			children={
				<div className={`${componentName} main`}>
					{!!errorMsg ||
						(!!loading && <Status errorMsg={errorMsg} loading={loading} />)}
					<div className='wrapper'>
						{' '}
						<h1 className='header-one'>Profile</h1>
						<div className='group info'>
							{media.selected ? (
								<img src={media.selected.url} />
							) : image ? (
								<img className='avatar' src={image.url} alt={name} />
							) : (
								<Avatar />
							)}
							<h3 className='header-three'>{name}</h3>
						</div>
						<div className='group email'>
							<label className='label'>Email:</label>
							<p className='paragraph'>{email}</p>
						</div>
						<div className='group role'>
							<label className='label'>Role:</label>
							<p className='paragraph'>{role}</p>
						</div>
					</div>
				</div>
			}
		/>
	);
};

Profile.defaultProps = {
	componentName: 'profile',
};

export default Profile;
