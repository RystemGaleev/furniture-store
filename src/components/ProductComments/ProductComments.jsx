import { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './ProductComments.module.scss';
import { pushReviews } from '../../redux/ReviewsSlice';
import { UserReview } from '../UserReview/UserReview';
import { useTranslation } from 'react-i18next';

export const ProductComments = ({ id, reviews }) => {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleCLick = () => {
    if (text.length <= 5) {
      setError('The minimum number of characters must not be less than 5');
      return;
    } else {
      dispatch(pushReviews({ text, id }));
      setText('');
      setError('');
    }
  };

  return (
    <div className={style.comments}>
      <div className={style.controller}>
        <label htmlFor="textarea">{t('comments.title1')}</label>
        {error ? <div className={style.error}> {error}</div> : null}
        <textarea
          type="text"
          name="textarea"
          placeholder={t('comments.comment')}
          className={style.textarea}
          onChange={handleChange}
          value={text}
          maxLength="250"
        />
        <button className={style.send} onClick={handleCLick}>
          {t('comments.sendBtn')}
        </button>
      </div>
      <ul className={style.reviews}>
        {t('comments.title2')}
        {reviews?.map((review, index) => (
          <UserReview text={review.text} key={index} />
        ))}
      </ul>
    </div>
  );
};
