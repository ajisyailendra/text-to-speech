// import { PDFViewerApplication } from "./viewer.mjs";

let btn_speech = document.getElementById("btn_speech");

document.addEventListener("selectionchange", function () {
  var selectedText = window.getSelection().toString();
  if (selectedText) {
    btn_speech.style.display = "block";
  } else {
    btn_speech.style.display = "none";
  }
});

btn_speech.addEventListener("click", function () {
  var selectedText = window.getSelection().toString();
  var utterance = new SpeechSynthesisUtterance(selectedText);

  utterance.lang = 'id-ID';

  window.speechSynthesis.speak(utterance);
});

document.addEventListener("beforecopy", function (event) {
  // Menghentikan default action yang diambil saat menyalin
  event.preventDefault();

  const maxCharacters = 50;
  const selection = document.getSelection();
  const selectedText = selection.toString();

  if (selectedText.split(/\s+/).length > maxCharacters) {
    event.preventDefault();
    alert("Anda hanya bisa menyalin 50 kata.");
    selection.removeAllRanges();
  }
});