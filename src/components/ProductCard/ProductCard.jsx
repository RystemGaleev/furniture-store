import style from './ProductCard.module.scss';
import { BsPatchPlus } from 'react-icons/bs';
import { HiPlus } from 'react-icons/hi';

export const ProductCard = ({ img, id, price, old, title, collection, rating }) => {
  return (
    <div className={style.card}>
      <div className={style.content}>
        <div className={style.img}>
          <div className={style.banners}>
            {old ? <div className={style.sale}>Sale</div> : null}
            {collection ? <div className={style.new}>New</div> : null}
          </div>

          <img src={img} alt={`product ${id}`} />
        </div>
        <div className={style.tools}>
          <BsPatchPlus className={style.icon} size={28} />
        </div>
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.block}>
        Price:
        <div className={style.old}>{old ? `$ ${old}` : null}</div>
        <div className={style.price}>$ {price}</div>
      </div>
    </div>
  );
};
