// Define sample products
const products = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 1299,
    image: "assets/earbuds1.jpg",
    category: "Electronics",
    description: "High-quality wireless earbuds with noise cancellation and long battery life.",
    rating: 4.5
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2299,
    image: "assets/smartwatch.jpg",
    category: "Accessories",
    description: "Stylish smartwatch with health tracking and Bluetooth calling support.",
    rating: 4.3
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1899,
    image: "assets/speaker.jpg",
    category: "Electronics",
    description: "Portable Bluetooth speaker with deep bass and 12-hour battery life.",
    rating: 4.6
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: 799,
    image: "assets/laptopstand.jpg",
    category: "Accessories",
    description: "Adjustable aluminum laptop stand for better posture and airflow.",
    rating: 4.2
  },
  {
    id: 5,
    name: "Gaming Mouse",
    price: 999,
    image: "assets/gamingmouse.jpg",
    category: "Electronics",
    description: "Ergonomic gaming mouse with RGB lighting and DPI control.",
    rating: 4.4
  },
  {
    id: 6,
    name: "Notebook Combo Set",
    price: 349,
    image: "assets/notebookcombo.jpg",
    category: "Stationery",
    description: "Pack of 5 designer notebooks for school and office.",
    rating: 4.2
  },
  {
    id: 7,
    name: "Phone Tripod Stand",
    price: 499,
    image: "assets/tripod.jpg",
    category: "Accessories",
    description: "Lightweight tripod stand for mobile photography.",
    rating: 4.1
  },
  {
    id: 8,
    name: "Portable Charger 10000mAh",
    price: 899,
    image: "assets/powerbank.jpg",
    category: "Electronics",
    description: "Fast-charging power bank with dual USB output.",
    rating: 4.6
  },
  {
    id: 9,
    name: "Desk Lamp with Touch Control",
    price: 749,
    image: "assets/desklamp.jpg",
    category: "Home",
    description: "LED desk lamp with 3 brightness modes and touch panel.",
    rating: 4.3
  },
  {
    id: 10,
    name: "Fitness Resistance Bands Set",
    price: 599,
    image: "assets/resistancebands.jpg",
    category: "Fitness",
    description: "Set of 5 latex resistance bands for home workouts.",
    rating: 4.4
  },
  {
    id: 11,
    name: "Neon Wall Clock",
    price: 1299,
    image: "assets/wallclock.jpg",
    category: "Home",
    description: "Vintage neon wall clock for bedroom or office decor.",
    rating: 4.5
  },
  {
    id: 12,
    name: "Bluetooth Neckband",
    price: 1099,
    image: "assets/neckband.jpg",
    category: "Electronics",
    description: "Comfortable neckband with deep bass and 18-hour battery.",
    rating: 4.3
  },
  {
    id: 13,
    name: "Portable Laptop Table",
    price: 899,
    image: "assets/laptoptable.jpg",
    category: "Accessories",
    description: "Foldable laptop table with cup holder and drawer.",
    rating: 4.2
  },
  {
    id: 14,
    name: "Water Bottle 1L",
    price: 299,
    image: "assets/waterbottle.jpg",
    category: "Fitness",
    description: "Leak-proof BPA-free water bottle with motivational quotes.",
    rating: 4.6
  },
{
  id: 15,
  name: "Mini Plant Pot Set",
  price: 499,
  image: "assets/plantpots.jpg",
  category: "Home",
  description: "Set of 3 ceramic plant pots perfect for succulents and office desks.",
  rating: 4.4
},
{
  id: 16,
  name: "LED String Lights",
  price: 399,
  image: "assets/stringlights.jpg",
  category: "Home",
  description: "Warm white LED string lights ideal for room decoration and festivals.",
  rating: 4.5
},
{
  id: 17,
  name: "Touchscreen Gloves",
  price: 299,
  image: "assets/gloves.jpg",
  category: "Accessories",
  description: "Winter gloves compatible with all smartphones and tablets.",
  rating: 4.2
},
{
  id: 18,
  name: "USB Table Fan",
  price: 649,
  image: "assets/tablefan.jpg",
  category: "Electronics",
  description: "Portable USB-powered fan with adjustable speed settings.",
  rating: 4.3
},
{
  id: 19,
  name: "Reusable Shopping Bags (Pack of 5)",
  price: 199,
  image: "assets/shoppingbags.jpg",
  category: "Home",
  description: "Eco-friendly, foldable grocery bags with vibrant prints.",
  rating: 4.6
},
{
  id: 20,
  name: "Yoga Mat (6mm)",
  price: 999,
  image: "assets/yogamat.jpg",
  category: "Fitness",
  description: "Non-slip, lightweight yoga mat for workouts and meditation.",
  rating: 4.7
},
{
  id: 21,
  name: "Magnetic Phone Holder for Car",
  price: 449,
  image: "assets/phoneholder.jpg",
  category: "Accessories",
  description: "360° rotatable magnetic mount for safe driving experience.",
  rating: 4.4
},
{
  id: 22,
  name: "Portable USB LED Light",
  price: 149,
  image: "assets/usbled.jpg",
  category: "Electronics",
  description: "Plug-and-play LED light for laptops, keyboards, or power banks.",
  rating: 4.1
},
{
  id: 23,
  name: "Noise Isolating Wired Earphones",
  price: 299,
  image: "assets/wiredearphones.jpg",
  category: "Electronics",
  description: "Stereo sound wired earphones with mic and tangle-free cable.",
  rating: 4.3
},
{
  id: 24,
  name: "Hand Grip Strengthener",
  price: 379,
  image: "assets/handgrip.jpg",
  category: "Fitness",
  description: "Adjustable resistance hand gripper for strength training.",
  rating: 4.5
}
];

// Load products to the shop page
window.onload = function () {
  const productList = document.getElementById("product-list");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  function renderProducts(filteredProducts) {
    productList.innerHTML = "";

    if (filteredProducts.length === 0) {
      productList.innerHTML = "<p>No products match your search.</p>";
      return;
    }

    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" onclick="goToProduct(${product.id})" style="cursor:pointer;">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(card);
    });
  }

  function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    let filtered = products.filter((p) =>
      p.name.toLowerCase().includes(searchTerm)
    );

    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    renderProducts(filtered);
  }

  // Initial render
  renderProducts(products);

  // Events
  searchInput.addEventListener("input", filterProducts);
  categoryFilter.addEventListener("change", filterProducts);
};


// Add to cart and store in localStorage
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products.find(p => p.id === productId);

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}


// Display cart items
function loadCart() {
  const cartContainer = document.getElementById("cart-items");
  const summaryContainer = document.getElementById("cart-summary");
  if (!cartContainer) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    summaryContainer.innerHTML = "";
    return;
  }

  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>Price: ₹${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
      </div>
      <div class="cart-item-actions">
        <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
        <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
      </div>
    `;
    cartContainer.appendChild(cartItem);
    total += item.price * item.quantity;
  });

  summaryContainer.innerHTML = `Total: ₹${total}`;
}

// Change quantity
function changeQty(index, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cart[index]) return;

  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// Remove item
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// Auto-run cart loader if on cart page
if (window.location.pathname.includes("cart.html")) {
  window.onload = loadCart;
}


// Checkout logic
function loadCheckoutSummary() {
  const summary = document.getElementById("checkout-summary");
  if (!summary) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  summary.textContent = `Total: ₹${total}`;
}

// Handle checkout form submit
function handleCheckoutForm() {
  const form = document.getElementById("checkout-form");
  const thankYou = document.getElementById("thank-you-message");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    localStorage.removeItem("cart"); // Clear cart
    form.style.display = "none";
    thankYou.style.display = "block";
  });
}

// Auto-run on checkout page
if (window.location.pathname.includes("checkout.html")) {
  window.onload = () => {
    loadCheckoutSummary();
    handleCheckoutForm();
  };
}
// cart count
// Update cart count in navbar
function updateCartCount() {
  const countEl = document.getElementById("cart-count");
  if (!countEl) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  countEl.textContent = totalQty;
}

// Call it on every page load
window.addEventListener("DOMContentLoaded", updateCartCount);

function goToProduct(id) {
  window.location.href = `product.html?id=${id}`;
}



function loadProductPage() {
  const detailEl = document.getElementById("product-detail");
  if (!detailEl) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const product = products.find(p => p.id === id);
  if (!product) {
    detailEl.innerHTML = "<p>Product not found.</p>";
    return;
  }

  const stars = "★".repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? "½" : "");

  detailEl.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="product-info">
      <h2>${product.name}</h2>
      <div class="rating">Rating: ${stars} (${product.rating})</div>
      <p><strong>Price:</strong> ₹${product.price}</p>
      <p>${product.description}</p>
      <button onclick="addToCart(${product.id})" class="btn">Add to Cart</button>
    </div>
  `;
}

// Auto-load product on product.html
if (window.location.pathname.includes("product.html")) {
  window.onload = () => {
    updateCartCount();
    loadProductPage();
  };
}


// Auto-run specific features based on page
if (window.location.pathname.includes("cart.html")) {
  window.onload = loadCart;
}

if (window.location.pathname.includes("checkout.html")) {
  window.onload = () => {
    loadCheckoutSummary();
    handleCheckoutForm();
  };
}

if (window.location.pathname.includes("product.html")) {
  window.onload = () => {
    updateCartCount();   // Optional here, since below covers all
    loadProductPage();
  };
}

// ✅ This runs on every page (home, shop, cart, checkout, etc.)
window.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
});
