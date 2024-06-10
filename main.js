import { addToCart, displayCartTotal, renderCartItems } from "./js/cart.js";

import { fetchProducts, renderProducts } from "./js/products.js";

//*olay izleyicisi ikledik.
document.addEventListener("DOMContentLoaded", async () => {
  if (window.location.pathname.includes("card.html")) {
    renderCartItems();
    displayCartTotal();
  } else {
    //* eğer sayfa cart.html sayfasında değilse ürünleri al.
    const products = await fetchProducts();
    //* ürünleri render et ve addToCartCallback fonksiyonu tanımla
    renderProducts(products, (event) => addToCart(event, products));
  }
});
