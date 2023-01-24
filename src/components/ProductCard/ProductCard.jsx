import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';
import { addToFavourites } from '../../redux/FavouritesSlice';
import { useNavigate } from 'react-router-dom';

import { currentProduct } from '../../redux/SingleProductSlice';
import { ToastContainer, toast } from 'react-toastify';

import { TfiShoppingCart, TfiHeart } from 'react-icons/tfi';
import { IoEnterOutline } from 'react-icons/io5';
import { IconUi } from '../ui/IconUi';
import 'react-toastify/dist/ReactToastify.css';
import style from './ProductCard.module.scss';

export const ProductCard = ({ img, id, price, old, title, collection, rating }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);

  const redirectToProduct = () => {
    dispatch(currentProduct(products));
    navigate(`/product/${id}`);
  };

  const item = {
    id,
    price,
    img,
    title,
    old,
  };

  const AddedInCart = () => {
    toast.info('Product added to cart', {
      autoClose: 1500,
      icon: <TfiShoppingCart size={30} color={'#3392ff'} />,
    });
    dispatch(addToCart(item));
  };

  const AddedInFavourite = () => {
    toast.info('Product added to favourites', {
      autoClose: 1500,
      icon: <TfiHeart size={30} color={'#3392ff'} />,
    });
    dispatch(addToFavourites(item));
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
      />
      <div className={style.content}>
        <div className={style.img}>
          <div className={style.banners}>
            {old ? <div className={style.sale}>Sale</div> : null}
            {collection ? <div className={style.new}>New</div> : null}
          </div>

          <img src={img} alt={`product${id}`} />
        </div>
        <div className={style.tools}>
          <button onClick={redirectToProduct} className={style.check}>
            View
            <IoEnterOutline className={style.icon} size={30} />
          </button>
          <button onClick={AddedInCart} className={style.circle}>
            <IconUi name="cart" cl={style.icon} />
          </button>
          <button onClick={AddedInFavourite} className={style.circle}>
            <IconUi name="favorite" cl={style.icon} />
          </button>
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
