export const getTotal = (items) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  items.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  return { totalPrice, totalQuantity };
};
