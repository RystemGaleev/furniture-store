import { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './ProductComments.module.scss';
import { pushReviews } from '../../redux/ReviewsSlice';
import { UserReview } from '../UserReview/UserReview';

export const ProductComments = ({ id, reviews }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const trimText = e.target.value;
    trimText.trim();
    setText(trimText.trim());
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
        <label htmlFor="textarea">Leave a review about the product</label>
        {error ? <div className={style.error}> {error}</div> : null}
        <textarea
          type="text"
          name="textarea"
          placeholder="Your comment"
          className={style.textarea}
          onChange={handleChange}
          value={text}
          maxLength="250"
        />
        <button className={style.send} onClick={handleCLick}>
          Send
        </button>
      </div>
      <ul className={style.reviews}>
        Product Reviews
        {reviews?.map((review, index) => (
          <UserReview text={review.text} key={index} />
        ))}
      </ul>
    </div>
  );
};
