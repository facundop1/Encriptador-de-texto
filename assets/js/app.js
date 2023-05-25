const input = document.getElementById("textarea");
const btnEncrypt = document.querySelector(".encriptar");
const btnDecrypt = document.querySelector(".desencriptar");
const doll = document.querySelector(".muneco");
const dollTitle = document.querySelector(".titulo-muneco");
const dollParagraph = document.querySelector(".parrafo-muneco");
const copy = document.querySelector(".copiar");

const letterA = "ai";
const letterE = "enter";
const letterI = "imes";
const letterO = "ober";
const letterU = "ufat";

const validateInput = () => {
  const validate = input.value.replace(/[A-ZÁÉÍÓÚáéíóú]/g, "false");
  const rtn = /false/g.test(validate);
  return rtn;
};

const updateDollText = (text) => {
  dollTitle.textContent = text;
  dollTitle.className = "mensaje-encriptado-desencriptado";
  dollParagraph.textContent = "";
  doll.style.display = "none";
  copy.style.display = "inherit";
};

const encrypt = () => {
  if (input.value === "" || validateInput()) {
    dollTitle.textContent = "Ningun mensaje fue encontrado";
    dollTitle.className = "titulo-muneco";
    dollParagraph.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
    doll.style.display = "inherit";
    copy.style.display = "none";
    input.focus();
  } else {
    let encryptedText = input.value;
    encryptedText = encryptedText.replace(/e/g, letterE);
    encryptedText = encryptedText.replace(/i/g, letterI);
    encryptedText = encryptedText.replace(/a/g, letterA);
    encryptedText = encryptedText.replace(/o/g, letterO);
    encryptedText = encryptedText.replace(/u/g, letterU);
    updateDollText(encryptedText);
    input.value = "";
    input.focus();
  }
};

const decrypt = () => {
  if (input.value === "" || validateInput()) {
    dollTitle.textContent = "Ningun mensaje fue encontrado";
    dollTitle.className = "titulo-muneco";
    dollParagraph.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
    doll.style.display = "inherit";
    copy.style.display = "none";
    input.focus();
  } else {
    let decryptedText  = input.value;
    decryptedText  = decryptedText .replace(/enter/g, "e");
    decryptedText  = decryptedText .replace(/imes/g, "i");
    decryptedText  = decryptedText .replace(/ai/g, "a");
    decryptedText  = decryptedText .replace(/ober/g, "o");
    decryptedText  = decryptedText .replace(/ufat/g, "u");
    updateDollText(decryptedText);
    input.value = "";
    input.focus();
  }
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(dollTitle.innerText);
};

btnEncrypt.addEventListener("click", encrypt);
btnDecrypt.addEventListener("click", decrypt);
copy.addEventListener("click", copyToClipboard);