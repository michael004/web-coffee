document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        //item coffee
        id: 1,
        name: "KOSUKA - Kopi Susu Kara 250ml",
        img: "KOSUKA.jpeg",
        price: 20000,
        category: "coffee",
      },
      {
        id: 2,
        name: "KOSUKA - Kopi Susu Kara 500ml",
        img: "KOSUKA.jpeg",
        price: 35000,
        category: "coffee",
      },
      {
        id: 3,
        name: "KOSUKA - Kopi Susu Kara 1 liter",
        img: "KOSUKA.jpeg",
        price: 70000,
        category: "coffee",
      },
      {
        id: 4,
        name: "Americano 250ml",
        img: "Mocachino-01.jpg",
        price: 15000,
        category: "coffee",
      },
      {
        id: 5,
        name: "Americano 500ml",
        img: "smoothie.jpeg",
        price: 30000,
        category: "coffee",
      },
      {
        id: 6,
        name: "Americano 1 liter ",
        img: "Affogato.jpg",
        price: 65000,
        category: "coffee",
      },
      {
        id: 7,
        name: "Espresso Cair Consentrate 1 liter ",
        img: "Affogato.jpg",
        price: 75000,
        category: "coffee",
      },
      //item snack
      {
        id: 8,
        name: "Pang-Pang",
        img: "Pangpang.png",
        price: 15000,
        category: "snack",
      },
      {
        id: 9,
        name: "Kripik talas",
        img: "talas.png",
        price: 15000,
        category: "snack",
      },
      {
        id: 10,
        name: "Kripik Singkong Opak",
        img: "opak.png",
        price: 15000,
        category: "snack",
      },
    ],
    selectedItem: {},
    showDetails(id) {
      this.selectedItem = this.items.find((item) => item.id === id);
      console.log(this.selectedItem.name);
    },
    getCoffeeItems() {
      return this.items.filter((item) => item.category === "coffee");
    },
    getSnackItems() {
      return this.items.filter((item) => item.category === "snack");
    },
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      //check if there's the same item in the cart
      const cartItem = this.items.find((item) => item.id === newItem.id);
      //if there is no item or the cart still empty
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        //if the item is added, check if the purchase item is the same or different within the cart
        this.items = this.items.map((item) => {
          //if the item is different
          if (item.id !== newItem.id) {
            return item;
          } else {
            //if the item is added, add quantity and total
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      // obtain the item that wants to remove based on the ID
      const cartItem = this.items.find((item) => item.id === id);

      //if the item is more than one
      if (cartItem.quantity > 1) {
        //observed 1 by 1
        this.items = this.items.map((item) => {
          // if not the cliked item
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // if there's only one purchased item left
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

//form validation
const checkoutButton = document.querySelector(".checkout-button");
checkoutButton.disabled = true;

const form = document.querySelector("#checkoutForm");

form.addEventListener("keyup", function () {
  let allFilled = true;

  for (let i = 0; i < form.elements.length; i++) {
    if (
      form.elements[i].type !== "submit" &&
      form.elements[i].value.length === 0
    ) {
      allFilled = false;
      break;
    }
  }

  if (allFilled) {
    checkoutButton.disabled = false;
    checkoutButton.classList.remove("disabled");
  } else {
    checkoutButton.disabled = true;
    checkoutButton.classList.add("disabled");
  }
});

//send data if checkout button clicked
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = new URLSearchParams(formData);
  const objData = Object.fromEntries(data);
  const message = formatMessage(objData);
  //console.log(objData);
  window.open("http://wa.me/6289658071244?text=" + encodeURIComponent(message));
});

//what'sapp message format
const formatMessage = (obj) => {
  return `Data Customer
  Nama: ${obj.name}
  Email : ${obj.email}
  No HP: ${obj.phone}
Data Pesanan:
  ${JSON.parse(obj.items).map(
    (item) => `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`
  )}
TOTAL: ${rupiah(obj.total)}

Terima Kasih.`;
};

//converse to Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
