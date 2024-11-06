//toggle class active for hamburger menu

const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger menu di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//toggle class active for search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//toggle class active for shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};
//klik outside the element

const hmb = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const shc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hmb.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!shc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

//view item menu description

document.addEventListener("DOMContentLoaded", () => {
  const itemDetailModal1 = document.querySelector("#item-detail-modal1");
  const itemDetailButtons1 = document.querySelectorAll(".item-detail-button1");

  const itemDetailModal2 = document.querySelector("#item-detail-modal2");
  const itemDetailButtons2 = document.querySelectorAll(".item-detail-button2");
  const closeIcon = document.querySelector(".close-icon");

  itemDetailButtons1.forEach((btn) => {
    btn.onclick = (e) => {
      itemDetailModal1.style.display = "block";

      e.preventDefault();
    };
  });

  itemDetailButtons2.forEach((btn) => {
    btn.onclick = (e) => {
      itemDetailModal2.style.display = "block";

      e.preventDefault();
    };
  });

  window.onclick = (e) => {
    if (e.target === itemDetailModal1) {
      itemDetailModal1.style.display = "none";
    }
  };

  if (closeIcon) {
    closeIcon.onclick = (e) => {
      itemDetailModal1.style.display = "none";

      e.preventDefault();
    };
  }
});
