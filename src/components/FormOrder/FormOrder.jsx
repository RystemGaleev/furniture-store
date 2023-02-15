import { useForm } from 'react-hook-form';
import { TfiHeart } from 'react-icons/tfi';
import style from './FormOrder.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../redux/CartSlice';
import { addToOrders } from '../../redux/OrderSlice';
import { useTranslation } from 'react-i18next';

export const FormOrder = ({ toggleModal }) => {
  const { t } = useTranslation();
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = () => {
    reset();
    startTimer();
    dispatch(addToOrders(cart));
    dispatch(clearCart());
  };

  const startTimer = () => {
    const timer = setTimeout(() => {
      toggleModal();
    }, 5000);
    return () => clearTimeout(timer);
  };

  return (
    <>
      {isSubmitted ? (
        <div className={style.thanks}>
          <TfiHeart size={30} className={style.thanks_icon} />
          <div className={style.thanks_title}>{t('modal.titleThanks')}</div>
          <div className={style.thanks_descr}>{t('modal.descrThanks')}</div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <div className={style.title}>{t('form.title')}</div>
          <div className={style.wrapper}>
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
            <div className={style.input_group}>
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
        </form>
      )}
    </>
  );
};
