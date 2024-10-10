const Modal = ({
	componentName,
	isVisible,
	setIsVisible,
	content,
	closeButton = true,
}) => {
	return (
		<>
			{isVisible ? (
				<div className={componentName}>
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

export default Modal;
