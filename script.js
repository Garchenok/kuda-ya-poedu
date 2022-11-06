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
