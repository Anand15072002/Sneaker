function changeImage(src) {
    document.querySelector(".img1").src = src;
}

let quantity = 0;
document.getElementById("increase").onclick = function () {
    quantity++;
    document.getElementById("quantity").textContent = quantity;
};
document.getElementById("decrease").onclick = function () {
    if (quantity > 0) {
        quantity--;
        document.getElementById("quantity").textContent = quantity;
    }
};

const addToCartBtn = document.querySelector(".cart button");
const cartContent = document.querySelector("#cart-content");
const quantityElement = document.querySelector("#quantity");
const cartIcon = document.querySelector('.right img[src="/images/icon-cart.svg"]');
const cartSection = document.getElementById('cart-section');
const price = 125.00;

cartIcon.addEventListener("click", () => {
    cartSection.classList.toggle("hidden");
});

addToCartBtn.addEventListener("click", function () {
    const qty = parseInt(quantityElement.textContent);

    if (qty > 0) {
        cartContent.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                <img src="images/image-product-1-thumbnail.jpg" style="width: 50px; border-radius: 5px;">
                <div style="flex: 1;">
                    Fall Limited Edition Sneakers<br>
                    $${price} x ${qty} <strong>$${(price * qty).toFixed(2)}</strong>
                </div>
                <img src="images/icon-delete.svg" class="delete-item" style="cursor:pointer;">
            </div>
             <button class="checkout-btn">Checkout</button>
        `;
    } else {
        cartContent.innerHTML = `<p>Your cart is empty.</p>`;
    }
});

cartContent.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-item")) {
        cartContent.innerHTML = `<p>Your cart is empty.</p>`;
        quantity = 0;
        document.getElementById("quantity").textContent = quantity;
    }
    if (e.target.classList.contains("checkout-btn")) {
        alert("Proceeding to checkout...");
    }
});


 const imagesList = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg"
];

let currentIndex = 0;

function changeImage(src) {
    document.querySelector(".img1").src = src;
    currentIndex = imagesList.indexOf(src);
}

function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox-img").src = imagesList[currentIndex];
    document.getElementById("lightbox").classList.remove("hidden");
}

function closeLightbox() {
    document.getElementById("lightbox").classList.add("hidden");
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % imagesList.length;
    document.querySelector(".img1").src = imagesList[currentIndex];
    document.getElementById("lightbox-img").src = imagesList[currentIndex];
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + imagesList.length) % imagesList.length;
    document.querySelector(".img1").src = imagesList[currentIndex];
    document.getElementById("lightbox-img").src = imagesList[currentIndex];
}

document.querySelector(".img1").addEventListener("click", () => openLightbox(currentIndex));
document.querySelector(".close").addEventListener("click", closeLightbox);
document.querySelector(".arrow.left").addEventListener("click", showPrevImage);
document.querySelector(".arrow.right").addEventListener("click", showNextImage);
document.querySelector(".arrow-mobile.left").addEventListener("click", showPrevImage);
document.querySelector(".arrow-mobile.right").addEventListener("click", showNextImage);

document.querySelectorAll(".thumbnails img").forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
        changeImage(imagesList[index]);
    });
});

document.addEventListener("keydown", (e) => {
    const lightbox = document.getElementById("lightbox");
    if (!lightbox.classList.contains("hidden")) {
        if (e.key === "ArrowRight") showNextImage();
        if (e.key === "ArrowLeft") showPrevImage();
        if (e.key === "Escape") closeLightbox();
    }
});

document.getElementById("menu-toggle").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("show");
});    
