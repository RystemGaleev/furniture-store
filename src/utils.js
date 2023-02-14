export const getTotal = (items) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  items.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  return { totalPrice, totalQuantity };
};

export const catchAuthError = (error, setError, t) => {
  switch (error.code) {
    case 'auth/invalid-email':
      setError(t('authError.emailCorrect'));
      break;
    case 'auth/email-already-in-use':
      setError(t('authError.emailUsed'));
      break;
    case 'auth/internal-error':
      setError(t('authError.require'));
      break;
    case 'auth/weak-password':
      setError(t('authError.passLength'));
      break;
    case 'auth/user-not-found':
      setError(t('authError.userUndefined'));
      break;
    case 'auth/wrong-password':
      setError(t('authError.passCorrect'));
      break;
    case 'auth/missing-email':
      setError(t('authError.emailNoSelect'));
      break;

    default:
      setError(error.message);
      break;
  }
};
