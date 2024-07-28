"use scrict";

const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
    qrText.style.border = "1px solid blue";
  } else {
    qrText.classList.add("error");
    qrText.style.border = "2px solid red";
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
