import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { Layout } from '../../Layout/Layout';
import { MotionBasketCard } from '../../components/BasketCard/BasketCard';
import { clearCart } from '../../redux/CartSlice';
import CustomModal from '../../components/CustomModal/CustomModal';
import { InformationBlock } from '../../components/InformationBlock/InformationBlock';
import { FormOrder } from '../../components/FormOrder/FormOrder';

import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { getTotal } from '../../utils';

import {
  AnimationContainerLong,
  AnimationLeftX,
  AnimationPage,
  AnimationTopY,
  PageTranstition,
} from '../../Animations/Animation';
import { motion } from 'framer-motion';
import { TfiShoppingCart } from 'react-icons/tfi';
import { useTranslation, Trans } from 'react-i18next';
import './Cart.scss';

export const CartPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { cart } = useSelector((state) => state.cart);
  const [isShowModal, setShowModal] = useState(false);

  const totalQuantity = getTotal(cart).totalQuantity;
  const price = Math.round(getTotal(cart).totalPrice);
  const discount = Math.round(price * 0.15);
  const totalPrice = Math.round(price - discount);

  const removeAllItem = () => {
    toast.error(t('notification.removeAll'), {
      autoClose: 2000,
      icon: <TfiShoppingCart size={30} color={'#e74c3c'} />,
    });
    dispatch(clearCart());
  };
  const toggleModal = () => {
    setShowModal((prev) => !prev);
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
      <CustomModal isOpen={isShowModal} close handleClose={toggleModal}>
        <FormOrder toggleModal={toggleModal} />
      </CustomModal>

      <motion.section
        className="cart"
        initial="exit"
        animate="show"
        exit="exit"
        transition={PageTranstition}
        variants={AnimationPage}
      >
        <div className="container">
          <motion.h2
            variants={AnimationLeftX}
            initial="hidden"
            whileInView={'show'}
            transition={{ duration: 0.5 }}
            className="title__h2"
          >
            {t('cart.title')}
          </motion.h2>
          <motion.div
            variants={AnimationContainerLong}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="cart__wrapper"
          >
            <motion.div className="cart__items">
              {cart.length > 0 ? (
                cart?.map((card, index) => (
                  <MotionBasketCard
                    variants={AnimationTopY}
                    custom={index}
                    key={card.id}
                    {...card}
                  />
                ))
              ) : (
                <InformationBlock />
              )}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              variants={AnimationTopY}
              transition={{ delay: 1 }}
              className="cart__information"
            >
              <div className="cart__information-block">
                <div className="cart__information-title"> {t('cart.priceList')}</div>
                <div className="cart__information-products">
                  <Trans i18nKey="cart.quantity">{{ totalQuantity }}</Trans>
                </div>
              </div>
              <div className="cart__checkout">
                <div className="cart__checkout-block">
                  <div className="cart__checkout-descr">{t('cart.price')}</div>
                  <div className="cart__checkout-price">${price}</div>
                </div>
                <div className="cart__checkout-block">
                  <div className="cart__checkout-descr">{t('cart.discount')}</div>
                  <div className="cart__checkout-price">${discount}</div>
                </div>
                <div className="cart__checkout-block">
                  <div className="cart__checkout-descr">{t('cart.totalPrice')}</div>
                  <div className="cart__checkout-price">${totalPrice}</div>
                </div>
                <div className="cart__checkout-btns">
                  <button
                    onClick={toggleModal}
                    className="cart__checkout-buy"
                    disabled={cart.length < 1}
                  >
                    {t('cart.orderBtn')}
                    <AiOutlineCheck className="icon" size={22} />
                  </button>
                  <button
                    onClick={removeAllItem}
                    className="cart__checkout-remove"
                    disabled={cart.length < 1}
                  >
                    {t('cart.clearBtn')}
                    <AiOutlineClose className="icon" size={22} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
};
