import { useDispatch, useSelector } from 'react-redux';
import { Layout } from '../../assets/Layout/Layout';
import { BasketCard } from '../../components/BasketCard/BasketCard';
import { clearCart } from '../../redux/CartSlice';

import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { getTotal } from '../../utils';

import './Cart.scss';
import { InformationBlock } from '../../components/InformationBlock/InformationBlock';

export const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const totalQuantity = getTotal(cart).totalQuantity;
  const price = Math.round(getTotal(cart).totalPrice);
  const discount = Math.round(price * 0.15);
  const totalPrice = Math.round(price - discount);

  return (
    <Layout>
      <div className="cart">
        <div className="container">
          <h2 className="title__h2">Shopping Cart page</h2>
          <div className="cart__wrapper">
            <div className="cart__items">
              {cart.length > 0 ? (
                cart.map((card) => <BasketCard key={card.id} {...card} />)
              ) : (
                <InformationBlock />
              )}
            </div>

            <div className="cart__information">
              <div className="cart__information-block">
                <div className="cart__information-title">Chekcout</div>
                <div className="cart__information-products">
                  There are {totalQuantity} items in your cart
                </div>
              </div>
              <div className="cart__checkout">
                <div className="cart__checkout-block">
                  <div className="cart__checkout-descr">Price</div>
                  <div className="cart__checkout-price">${price}</div>
                </div>
                <div className="cart__checkout-block">
                  <div className="cart__checkout-descr">Discount 15%</div>
                  <div className="cart__checkout-price">${discount}</div>
                </div>
                <div className="cart__checkout-block">
                  <div className="cart__checkout-descr">Total Price</div>
                  <div className="cart__checkout-price">${totalPrice}</div>
                </div>
                <div className="cart__checkout-btns">
                  <button onClick={() => null} className="cart__checkout-buy">
                    Place an order
                    <AiOutlineCheck className="icon" size={22} />
                  </button>
                  <button
                    onClick={() => dispatch(clearCart())}
                    className="cart__checkout-remove"
                  >
                    Clear cart
                    <AiOutlineClose className="icon remove" size={22} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
