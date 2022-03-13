var Links = {
  Home: document.querySelector(".home"),
  Generate: document.querySelector(".generate"),
  About: document.querySelector(".about"),
};
var inputData = document.querySelector('input#qrCodeData');
var qr = document.querySelector('#qrcode');

const generate = () => {
  console.log("generate");
  Links["Generate"].click();
};

const changeActive = (path) => {
  let pathName = path.split("#")[1];
  document.title = "QR Code Generator - " + pathName;
  document.querySelectorAll(".active").forEach((a) => {
    a.classList.remove("active");
  });
  Links[pathName].classList.add("active");
};

window.onload = function () {
    if(!window.location.hash)
        Links['Home'].click();
};

window.onhashchange = function () {
  let path = window.location.hash;
  changeActive(path)
};

const generateQrCode = () => {
    qr.innerHTML = null;
    if(!inputData.value){
        alert('Please enter a text or url');
        inputData.focus();
        return
    }
    var qrcode = new QRCode("qrcode", {
        text: inputData.value,
        width: 256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}