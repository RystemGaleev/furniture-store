export const getTotal = (items) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  items.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  return { totalPrice, totalQuantity };
};

export const catchAuthError = (error, setError) => {
  switch (error.code) {
    case 'auth/invalid-email':
      setError('Enter a valid email');
      break;
    case 'auth/email-already-in-use':
      setError('This mail is already in use');
      break;
    case 'auth/internal-error':
      setError('All fields are required');
      break;
    case 'auth/weak-password':
      setError('The password must contain more than 8 characters');
      break;
    case 'auth/user-not-found':
      setError('This user does not exist');
      break;
    case 'auth/wrong-password':
      setError('Enter the correct password');
      break;
    case 'auth/missing-email':
      setError('Enter your email');
      break;

    default:
      setError(error.message);
      break;
  }
};
