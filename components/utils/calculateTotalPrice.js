export default function(cart) {
  return cart.reduce((acc, cartItem) => {
    if (!cartItem.item) return acc;
    return acc + cartItem.quantity * cartItem.item.price;
  }, 0);
}
