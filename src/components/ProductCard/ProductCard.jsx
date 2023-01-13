import style from './ProductCard.module.scss';
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';

export const ProductCard = ({ img, id, price, old, title, collection, rating }) => {
  const dispatch = useDispatch();

  const item = {
    id,
    price,
    img,
    title,
  };

  return (
    <div className={style.card}>
      <div className={style.content}>
        <div className={style.img}>
          <div className={style.banners}>
            {old ? <div className={style.sale}>Sale</div> : null}
            {collection ? <div className={style.new}>New</div> : null}
          </div>

          <img src={img} alt={`product${id}`} />
        </div>
        <div className={style.tools}>
          <button onClick={() => dispatch(addToCart(item))} className={style.circle}>
            <svg
              className={style.icon}
              width="24"
              height="24"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9718 2.22589H4.36918L4.30984 2.01763H4.3097C4.18037 1.56902 3.90895 1.17453 3.5363 0.893166C3.16365 0.61194 2.70995 0.459059 2.24303 0.457642H0.423919C0.189683 0.457642 -0.00012207 0.647446 -0.00012207 0.881682C-0.00012207 1.11578 0.189683 1.30558 0.423919 1.30558H2.24303C2.52567 1.30657 2.80037 1.39899 3.02609 1.56934C3.25167 1.7397 3.41594 1.97848 3.49429 2.25003L6.06325 11.2643C6.23303 11.8528 6.58908 12.3704 7.07799 12.7393C7.5669 13.1083 8.1623 13.3087 8.77474 13.3106H18.1314C18.3656 13.3106 18.5554 13.1208 18.5554 12.8866C18.5554 12.6525 18.3656 12.4627 18.1314 12.4627H8.77474C8.34644 12.4614 7.93022 12.3211 7.58835 12.0632C7.2465 11.8051 6.99764 11.4432 6.87895 11.0317L6.70731 10.4296H16.0004C16.9007 10.4286 17.7637 10.0705 18.4002 9.43394C19.0367 8.79737 19.3947 7.93439 19.3957 7.03423V2.6499C19.3957 2.41581 19.2059 2.22601 18.9718 2.22601L18.9718 2.22589ZM18.5478 7.03432C18.5471 7.70964 18.2784 8.35711 17.8009 8.83468C17.3234 9.3124 16.6759 9.58097 16.0004 9.58184H6.46569L5.13211 4.90278H14.2962C14.5304 4.90278 14.7202 4.71298 14.7202 4.47874C14.7202 4.24465 14.5304 4.05485 14.2962 4.05485H4.89044L4.61077 3.0739H18.548L18.5478 7.03432Z"
                fill="currentColor"
              />
              <path
                d="M8.047 14.6238C7.52062 14.6238 7.01564 14.8328 6.64343 15.205C6.27121 15.5772 6.0621 16.0821 6.06195 16.6085C6.06195 17.1348 6.27092 17.6397 6.64313 18.0119C7.01535 18.3841 7.52018 18.5934 8.04656 18.5934C8.57294 18.5934 9.07777 18.3844 9.44999 18.0122C9.82235 17.64 10.0315 17.1351 10.0315 16.6087C10.0309 16.0826 9.82165 15.5781 9.44955 15.206C9.07763 14.8339 8.57309 14.6245 8.04696 14.6238L8.047 14.6238ZM8.047 17.7455C7.74547 17.7455 7.45629 17.6258 7.24307 17.4126C7.02985 17.1993 6.91003 16.9102 6.91003 16.6086C6.90989 16.3071 7.0297 16.0179 7.24293 15.8049C7.45616 15.5916 7.74533 15.4718 8.04686 15.4718C8.34839 15.4718 8.63756 15.5916 8.85064 15.8049C9.06386 16.0181 9.18354 16.3072 9.18354 16.6088C9.18325 16.9102 9.0633 17.199 8.85021 17.4121C8.63713 17.6252 8.34825 17.745 8.04698 17.7454L8.047 17.7455Z"
                fill="currentColor"
              />
              <path
                d="M16.5707 14.6238C16.0443 14.6238 15.5395 14.8328 15.1673 15.205C14.7949 15.5771 14.5858 16.0819 14.5858 16.6083C14.5857 17.1348 14.7948 17.6397 15.167 18.0119C15.5391 18.3841 16.0439 18.5934 16.5703 18.5934C17.0967 18.5934 17.6016 18.3844 17.9739 18.0122C18.3461 17.64 18.5552 17.1351 18.5553 16.6087C18.5548 16.0826 18.3454 15.5781 17.9734 15.206C17.6013 14.8339 17.097 14.6245 16.5707 14.6238L16.5707 14.6238ZM16.5707 17.7455C16.2692 17.7455 15.98 17.6258 15.7668 17.4126C15.5536 17.1993 15.4337 16.9102 15.4337 16.6086C15.4337 16.3071 15.5536 16.0179 15.7667 15.8049C15.9799 15.5916 16.269 15.4718 16.5706 15.4718C16.8721 15.4718 17.1613 15.5916 17.3745 15.8049C17.5876 16.0181 17.7074 16.3072 17.7073 16.6088C17.707 16.9102 17.5872 17.199 17.3741 17.4121C17.161 17.6252 16.8721 17.745 16.5707 17.7454L16.5707 17.7455Z"
                fill="currentColor"
              />
              <path
                d="M15.9852 4.78089C16.065 4.85812 16.1712 4.90198 16.2821 4.90369C16.339 4.90355 16.3952 4.89205 16.4475 4.8699C16.4981 4.84932 16.5441 4.81908 16.5832 4.78089C16.6232 4.74086 16.6549 4.6933 16.6766 4.64106C16.7452 4.48249 16.7078 4.29808 16.5832 4.17868C16.5444 4.13921 16.4983 4.10756 16.4476 4.08555C16.289 4.01812 16.1053 4.05503 15.9852 4.17868C15.8607 4.29821 15.8235 4.48262 15.8921 4.64106C15.9135 4.6933 15.9452 4.74086 15.9852 4.78089L15.9852 4.78089Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button className={style.circle}>
            <AiOutlineHeart className={style.icon} size={28} />
          </button>
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
