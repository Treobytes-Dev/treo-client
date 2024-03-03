import { array, func } from 'prop-types';
import Link from 'next/link';

const PageList = ({ componentName, pages, handlePrompt, handleEdit }) => {
	return (
		<>
			{pages?.length ? (
				pages.map((page) => (
					<div key={page._id} className={componentName}>
						<h4 className='header header-four'>{page.title}</h4>
						<div className='options'>
							<Link className='view anchor' href={`/${page.slug}`}>
								View
							</Link>
							<button className='button edit' onClick={() => handleEdit(page)}>
								edit
							</button>
							{/* <button onClick={() => handleDelete(page)}>delete</button> */}
							<button
								className='button delete'
								onClick={() => handlePrompt(page)}
							>
								delete
							</button>
						</div>
					</div>
				))
			) : (
				<h4 className='header header-four'>No pages</h4>
			)}
		</>
	);
};

PageList.propTypes = {
	pages: array.isRequired,
	handlePrompt: func.isRequired,
	handleEdit: func.isRequired,
};

PageList.defaultProps = {
	componentName: 'page-list',
};

export default PageList;
