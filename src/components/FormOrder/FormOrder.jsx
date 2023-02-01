import { useForm } from 'react-hook-form';
import CustomModal from '../CustomModal/CustomModal';

import { TfiHeart } from 'react-icons/tfi';
import style from './FormOrder.module.scss';
import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../redux/CartSlice';
import { addToOrders } from '../../redux/OrderSlice';
import { useTranslation } from 'react-i18next';

export const FormOrder = ({ setModalOpenForm }) => {
  const { t } = useTranslation();
  const { modalOpen, setModalOpen } = useContext(ModalContext);
  const { cart } = useSelector((state) => state.cart);
  const { orders } = useSelector((state) => state.orders);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    reset();
    setModalOpen({ ...modalOpen, thanksModal: true });
    startTimer();

    dispatch(addToOrders(cart));
    dispatch(clearCart());
  };

  const startTimer = () => {
    const timer = setTimeout(() => {
      setModalOpen({ ...modalOpen, thanksModal: false });

      setModalOpenForm();
    }, 4000);
    return () => clearTimeout(timer);
  };

  return (
    <>
      <CustomModal
        isOpen={modalOpen.thanksModal}
        handleClose={() => setModalOpen({ ...modalOpen, thanksModal: false })}
        style={{
          width: '500px',
          left: '50%',
          top: '50%',
          height: '220px',
          transform: 'translate(-50%, -50%)',
          color: 'white',
        }}
      >
        <div className="popup__title">
          Thanks for the purchase <TfiHeart className="popup__icon" size={30} />
        </div>
        <div className="popup__descr">
          You can view your purchases on the page "My orders"
        </div>
      </CustomModal>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={modalOpen.thanksModal ? style.formOpacity : style.form}
      >
        <div className={style.title}>{t('form.title')}</div>
        <div className={style.wrapper}>
          <div className={style.column}>
            <div className={style.inputBlock}>
              <label htmlFor="CardNumber">{t('form.card')}</label>
              <input
                className={errors.CardNumber ? style.inputCardError : style.inputCard}
                placeholder="0000 0000 0000 0000"
                type="number"
                name="cardNumber"
                maxLength="16"
                {...register('CardNumber', {
                  required: 'The field must be filled in',
                  maxLength: 19,
                  pattern:
                    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                })}
              />
              {errors?.CardNumber && (
                <p className={style.errorText}>
                  {errors?.CardNumber?.message || t('form.cardErr')}
                </p>
              )}
            </div>
            <div className={style.blockLeft}>
              <div className={style.inputBlock}>
                <label htmlFor="Expiration Date">{t('form.date')}</label>
                <input
                  className={
                    errors.ExpirationDate ? style.inputSmallError : style.inputSmall
                  }
                  type="number"
                  name="ExpirationDate"
                  step="0.01"
                  placeholder="MM/YY"
                  {...register('ExpirationDate', {
                    required: 'The field must be filled in',
                    minLength: 4,
                    maxLength: 4,
                  })}
                />
                {errors?.ExpirationDate && (
                  <p className={style.errorText}>
                    {errors?.ExpirationDate?.message || t('form.dateErr')}
                  </p>
                )}
              </div>
              <div className={style.inputBlock}>
                <label htmlFor="CVV">CVV</label>
                <input
                  className={errors.CVV ? style.inputSmallError : style.inputSmall}
                  type="number"
                  name="CVV"
                  step="0.01"
                  placeholder="123"
                  {...register('CVV', {
                    required: 'The field must be filled in',
                    minLength: 3,
                    maxLength: 3,
                  })}
                />
                {errors?.CVV && (
                  <p className={style.errorText}>
                    {errors?.CVV?.message || t('form.codeErr')}
                  </p>
                )}
              </div>
            </div>
            <div className={style.block}>
              <button disabled={!isValid} className={style.pay}>
                {t('form.payBtn')}
              </button>
              <div className={style.descr}>{t('form.policy')}</div>
            </div>
          </div>
          <div className={style.columnRight}>
            <div className={style.block}>
              <div className={style.inputBlock}>
                <label htmlFor="Сountry">{t('form.country')}</label>
                <input
                  className={errors.Сountry ? style.inputSmallError : style.inputSmall}
                  type="text"
                  name="Сountry"
                  step="0.01"
                  placeholder={t('form.countryPl')}
                  {...register('Сountry', {
                    required: 'The field must be filled in',
                    minLength: 3,
                    maxLength: 20,
                  })}
                />
                {errors?.Сountry && (
                  <p className={style.errorText}>
                    {errors?.Сountry?.message || t('form.countryErr')}
                  </p>
                )}
              </div>
            </div>
            <div className={style.inputBlock}>
              <label htmlFor="City">{t('form.city')}</label>
              <input
                className={errors.City ? style.inputSmallError : style.inputSmall}
                type="text"
                name="City"
                step="0.01"
                placeholder={t('form.cityPl')}
                {...register('City', {
                  required: 'The field must be filled in',
                  minLength: 3,
                  maxLength: 20,
                })}
              />
              {errors?.City && (
                <p className={style.errorText}>
                  {errors?.City?.message || t('form.cityErr')}
                </p>
              )}
            </div>

            <div className={style.block}>
              <div className={style.inputBlock}>
                <label htmlFor="Street">{t('form.street')}</label>
                <input
                  className={errors.Street ? style.inputSmallError : style.inputSmall}
                  type="text"
                  name="Street"
                  step="0.01"
                  placeholder={t('form.streetPl')}
                  {...register('Street', {
                    required: 'The field must be filled in',
                    minLength: 3,
                    maxLength: 20,
                  })}
                />
                {errors?.Street && (
                  <p className={style.errorText}>
                    {errors?.Street?.message || t('form.streetErr')}
                  </p>
                )}
              </div>
              <div className={style.inputBlock}>
                <label htmlFor="Apartment">{t('form.apartment')}</label>
                <input
                  className={errors.Apartment ? style.inputSmallError : style.inputSmall}
                  type="number"
                  name="Apartment"
                  step="0.01"
                  placeholder={t('form.apartmentPl')}
                  {...register('Apartment', {
                    required: 'The field must be filled in',
                    maxLength: 5,
                  })}
                />
                {errors?.Apartment && (
                  <p className={style.errorText}>
                    {errors?.Apartment?.message || t('form.apartmentErr')}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
