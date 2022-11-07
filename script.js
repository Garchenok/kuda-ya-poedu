let reportButton = document.querySelector(".header__report");
let popup = document.querySelector(".popup");
let popupClose = document.querySelector(".popup__close");

function openPopup() {
  popup.classList.add("popup_opened");
}
reportButton.addEventListener("click", openPopup);

function closePopup() {
  popup.classList.remove("popup_opened");
}
popupClose.addEventListener("click", closePopup);

// burger-report
let reportButtonBurger = document.querySelector(".header__burger-report");
let popupBurger = document.querySelector(".popup");
let popupCloseBurger = document.querySelector(".popup__close");

function openPopup() {
  popupBurger.classList.add("popup_opened");
}
reportButtonBurger.addEventListener("click", openPopup);

function closePopup() {
  popupBurger.classList.remove("popup_opened");
}
popupCloseBurger.addEventListener("click", closePopup);
