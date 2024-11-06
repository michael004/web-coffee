//modal box1

const itemDetailModal1 = document.querySelector("#item-detail-modal1");

const itemDetailButtons1 = document.querySelectorAll(".item-detail-button1");

itemDetailButtons1.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal1.style.display = "flex";
    e.preventDefault();
  };
});

//close modal box button1
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal1.style.display = "none";
  e.preventDefault();
};

//modal box2

const itemDetailModal2 = document.querySelector("#item-detail-modal2");

const itemDetailButtons2 = document.querySelectorAll(".item-detail-button2");

itemDetailButtons2.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal2.style.display = "flex";
    e.preventDefault();
  };
});

//modal box3

const itemDetailModal3 = document.querySelector("#item-detail-modal3");

const itemDetailButtons3 = document.querySelectorAll(".item-detail-button3");

itemDetailButtons3.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal3.style.display = "flex";
    e.preventDefault();
  };
});

//modal box4

const itemDetailModal4 = document.querySelector("#item-detail-modal4");

const itemDetailButtons4 = document.querySelectorAll(".item-detail-button4");

itemDetailButtons4.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal4.style.display = "flex";
    e.preventDefault();
  };
});

//modal box5

const itemDetailModal5 = document.querySelector("#item-detail-modal5");

const itemDetailButtons5 = document.querySelectorAll(".item-detail-button5");

itemDetailButtons5.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal5.style.display = "flex";
    e.preventDefault();
  };
});
//modal box6

const itemDetailModal6 = document.querySelector("#item-detail-modal6");

const itemDetailButtons6 = document.querySelectorAll(".item-detail-button6");

itemDetailButtons6.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal6.style.display = "flex";
    e.preventDefault();
  };
});

//click outside modal1

window.onclick = (e) => {
  if (e.target === itemDetailModal1) {
    itemDetailModal1.style.display = "none";
  }

  if (e.target === itemDetailModal2) {
    itemDetailModal2.style.display = "none";
  }
  if (e.target === itemDetailModal3) {
    itemDetailModal3.style.display = "none";
  }
  if (e.target === itemDetailModal4) {
    itemDetailModal4.style.display = "none";
  }
  if (e.target === itemDetailModal5) {
    itemDetailModal5.style.display = "none";
  }
  if (e.target === itemDetailModal6) {
    itemDetailModal6.style.display = "none";
  }
};
