const Modal = ({ isVisible, setIsVisible, content, closeButton }) => {
	return (
		<>
			{isVisible ? (
				<div className='modal'>
					{content}
					{closeButton && (
						<button
							className='button edit'
							style={{ width: '100px' }}
							onClick={() => setIsVisible(!isVisible)}
						>
							Close
						</button>
					)}
				</div>
			) : (
				<></>
			)}
		</>
	);
};

Modal.defaultProps = {
	componentName: 'modal',
	closeButton: true,
};

export default Modal;
