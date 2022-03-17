const getElement = (el) => {
  return document.querySelector(el);
};
var Links = {
  Home: getElement(".home"),
  Generate: getElement(".generate"),
  About: getElement(".about"),
};
var inputData = getElement("input#qrCodeData");
var qr = getElement("#qrcode");

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
  if (!window.location.hash) Links["Home"].click();
};

window.onhashchange = function () {
  let path = window.location.hash;
  changeActive(path);
};

const generateQrCode = () => {
  qr.innerHTML = null;
  if (!inputData.value) {
    alert("Please enter a text or url");
    inputData.focus();
    return;
  }
  const qrcode = new QRCode("qrcode", {
    text: inputData.value,
    width: 256,
    height: 256,
    colorDark: getElement("#colorInput2").value,
    colorLight: getElement("#colorInput1").value,
    correctLevel: QRCode.CorrectLevel.H,
  });
  getElement("#button-download").disabled = false;
};

const downloadQrCode = () => {
  let a = document.createElement("a");
  a.setAttribute("href", getElement("img").src);
  a.setAttribute("download", "QR Code.png");
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
