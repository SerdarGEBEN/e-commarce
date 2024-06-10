export async function fetchProducts() {
  try {
    //* db. json dosyasına fetch ile istek attık
    const response = await fetch("db.json");
    if (!response.ok) {
      //*hata oluşturduk
      throw new Error("URL yanlıs");
    }
    //* gelen cevabı json formatına çevirdik ve dişarıya return ettik
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

//* ürünlerin sayfaya render eden fonksiyonu tanımlıyoruz.
export function renderProducts(products, addToCartCallback) {
  //*HTML dosyasından ürünlerin listeleneceği elementi seçeriz.
  const productList = document.getElementById("productList");
  console.log(products);

  //*ürünlerin HTML formatında listeye eklenmesi için products dizisini dönüp her bir product için ekrana product cartını aktardık.
  productList.innerHTML = products
    .map(
      (product) => `
  
<div class="product">
    <img src="${product.image}"
        alt="" class="product-img" />
    <div class="product-info">
        <h2 class="product-title">${product.title}</h2>
        <p class="product-price">$${product.price}</p>
        <a class="add-to-cart" data-id="${product.id}" >Add to cart</a>
    </div>
</div>
  
  `
    )
    .join("");

  //* add to cart butonları seçiliyor
  const addToCardButtons = document.getElementsByClassName("add-to-cart");
  //* her bi "Add to cart" butonuna tıklama olayı eklenir.
  for (let i = 0; i < addToCardButtons.length; i++) {
    const addToCardButton = addToCardButtons[i];
    addToCardButton.addEventListener("click", addToCartCallback);
  }
}
