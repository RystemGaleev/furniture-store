import style from './OrderCard.module.scss';
import { ToastContainer } from 'react-toastify';
import { currentProduct } from '../../redux/SingleProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoEnterOutline } from 'react-icons/io5';

export const OrderCard = ({ img, id, price, old, title, quantity }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const redirectToProduct = () => {
    dispatch(currentProduct(products));
    navigate(`/product/${id}`);
  };
  return (
    <div className={style.card}>
      <ToastContainer
        closeOnClick={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        position={'top-right'}
        draggable={false}
        limit={7}
        closeButton={false}
        toastStyle={{ width: '260px' }}
      />
      <div className={style.content}>
        <div className={style.img}>
          <img src={img} alt={`product${id}`} />
        </div>
        <div className={style.tools}>
          <button onClick={redirectToProduct} className={style.check}>
            View
            <IoEnterOutline className={style.icon} size={30} />
          </button>
          {quantity}
        </div>
      </div>
      <div className={style.blockText}>
        <div className={style.title}>{title}</div>
        <div className={style.block}>
          Price:
          <div className={style.old}>{old ? `$${old}` : null}</div>
          <div className={style.price}>${price}</div>
        </div>
      </div>
    </div>
  );
};
