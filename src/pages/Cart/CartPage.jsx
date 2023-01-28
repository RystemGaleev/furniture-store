import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { ToastContainer, toast } from 'react-toastify';

import { Layout } from '../../Layout/Layout';
import { BasketCard } from '../../components/BasketCard/BasketCard';
import { clearCart } from '../../redux/CartSlice';
import CustomModal from '../../components/CustomModal/CustomModal';
import { InformationBlock } from '../../components/InformationBlock/InformationBlock';
import { FormOrder } from '../../components/FormOrder/FormOrder';

import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { getTotal } from '../../utils';

import { frameAnimationY, textAnimation } from '../../Animations/Animation';
import { motion } from 'framer-motion';
import { TfiShoppingCart } from 'react-icons/tfi';
import './Cart.scss';

export const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const totalQuantity = getTotal(cart).totalQuantity;
  const price = Math.round(getTotal(cart).totalPrice);
  const discount = Math.round(price * 0.15);
  const totalPrice = Math.round(price - discount);

  const { modalOpen, setModalOpen } = useContext(ModalContext);

  const removeAllItem = () => {
    toast.error('Deleting all products', {
      autoClose: 2000,
      icon: <TfiShoppingCart size={30} color={'#e74c3c'} />,
    });
    dispatch(clearCart());
  };

  return (
    <Layout>
      <ToastContainer
        closeOnClick={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        position={'top-right'}
        draggable={false}
        limit={7}
        closeButton={false}
      />
      <CustomModal
        isOpen={modalOpen.formModal}
        handleClose={() => setModalOpen({ ...modalOpen, formModal: false })}
        style={{
          width: '600px',
          left: '50%',
          top: '50%',
          height: '550px',
          backgroundColor: '#fff',
          transform: 'translate(-50%, -50%)',
          color: '#1e1e1e',
        }}
      >
        <FormOrder
          setModalOpenForm={() => setModalOpen({ ...modalOpen, formModal: false })}
        />
      </CustomModal>

      <motion.section
        className="cart"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 0.4 } }}
        exit={{ scale: 0, opacity: 0 }}
      >
        <div className="container">
          <motion.h2
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            className="title__h2"
          >
            Shopping Cart page
          </motion.h2>
          <div className="cart__wrapper">
            <div className="cart__items">
              {cart.length > 0 ? (
                cart?.map((card) => <BasketCard key={card.id} {...card} />)
              ) : (
                <InformationBlock />
              )}
            </div>

            <motion.div
              className="cart__information"
              variants={frameAnimationY}
              initial="hidden"
              whileInView="visible"
            >
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
                  <button
                    onClick={() => setModalOpen({ ...modalOpen, formModal: true })}
                    className="cart__checkout-buy"
                  >
                    Place an order
                    <AiOutlineCheck className="icon" size={22} />
                  </button>
                  <button onClick={removeAllItem} className="cart__checkout-remove">
                    Clear cart
                    <AiOutlineClose className="icon remove" size={22} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};
