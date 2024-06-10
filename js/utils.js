export function saveToLocalStorage(cart) {
  //* localStorage a veri ekleme
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function getCartFromLocalStorage() {
  //* localStorage da cart adında bir key varsaonları json formatına getirir.
  //* yoksada boş bir dizi döner.
  return JSON.parse(localStorage.getItem("cart")) || [];
}
//* sepetteki ürün miktarnı hesaplar.
export function updateCartIcon(cart) {
  const cartIcon = document.getElementById("cart-icon");
  const i = document.querySelector(".bx-shopping-bag");

  let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  // console.log(totalQuantity);

  i.setAttribute("data-quantity", totalQuantity);

  cartIcon.setAttribute("data-quantity", totalQuantity);
}
export function calculateCartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
