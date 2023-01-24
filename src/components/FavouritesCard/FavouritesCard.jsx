import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeInFavourites } from '../../redux/FavouritesSlice';
import { currentProduct } from '../../redux/SingleProductSlice';

import { IoEnterOutline } from 'react-icons/io5';
import { IconUi } from '../ui/IconUi';
import { frameAnimationX } from '../../Animations/Animation';
import { motion } from 'framer-motion';
import style from './FavouritesCard.module.scss';

export const FavouritesCard = ({ price, title, id, img, old }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);

  const redirectToProduct = () => {
    dispatch(currentProduct(products));
    navigate(`/product/${id}`);
  };
  return (
    <motion.div
      variants={frameAnimationX}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.4, delay: 0.3 }}
      className={style.card}
    >
      <div className={style.content}>
        <div className={style.img}>
          <img src={img} alt={`product${id}`} />
        </div>
        <div className={style.tools}>
          <button onClick={redirectToProduct} className={style.check}>
            View
            <IoEnterOutline className={style.icon} size={30} />
          </button>

          <button
            onClick={() => dispatch(removeInFavourites(id))}
            className={style.circle}
          >
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
    </motion.div>
  );
};
