import './CustomModal.scss';
import { AiOutlineClose } from 'react-icons/ai';

const CustomModal = ({ isOpen, children, handleClose, style, color, close }) => {
  return (
    <div style={style} className={isOpen ? 'popup show' : 'popup'}>
      {close ? (
        <div onClick={handleClose} style={{ color: `${color}` }} className="popup__close">
          <AiOutlineClose size={30} className="popup__close-icon" />
        </div>
      ) : null}
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
