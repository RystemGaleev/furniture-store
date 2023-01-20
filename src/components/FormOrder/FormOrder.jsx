import { useForm } from 'react-hook-form';
import CustomModal from '../CustomModal/CustomModal';

import { TfiHeart } from 'react-icons/tfi';
import style from './FormOrder.module.scss';
import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

export const FormOrder = ({ setModalOpenForm }) => {
  const { modalOpen, setModalOpen } = useContext(ModalContext);

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
        <div className={style.title}>Payment</div>

        <div className={style.inputBlock}>
          <label htmlFor="CardNumber">Card Number</label>
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
              {errors?.CardNumber?.message || 'Enter the correct card number'}
            </p>
          )}
        </div>
        <div className={style.block}>
          <div className={style.inputBlock}>
            <label htmlFor="Expiration Date">Expiration Date</label>
            <input
              className={errors.ExpirationDate ? style.inputSmallError : style.inputSmall}
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
                {errors?.ExpirationDate?.message || 'Enter the correct date'}
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
                {errors?.CVV?.message || 'Enter the correct code'}
              </p>
            )}
          </div>
        </div>
        <button disabled={!isValid} className={style.pay}>
          Pay
        </button>
        <div className={style.descr}>
          Your personal data will be used to process your order, support your experience
          throughout this website, and for other purposes described in our privacy policy.
        </div>
      </form>
    </>
  );
};
