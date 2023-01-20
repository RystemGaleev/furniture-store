import './CustomModal.scss';

const CustomModal = ({ isOpen, children, handleClose, style, color }) => {
  return (
    <div style={style} className={isOpen ? 'popup show' : 'popup'}>
      <div onClick={handleClose} style={{ color: `${color}` }} className="popup__close">
        x
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={isOpen ? 'popup__content show' : 'popup__content'}
      >
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
