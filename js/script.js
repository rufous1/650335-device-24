var writeUs = document.querySelector(".write-us-link");
var modalWriteUs = document.querySelector(".modal-write-us");
var close = modalWriteUs.querySelector(".modal-close");
var form = modalWriteUs.querySelector(".write-us-form");
var userName = modalWriteUs.querySelector(".fieldback-user-name");
var userEmail = modalWriteUs.querySelector(".fieldback-user-email");
var userMessage = modalWriteUs.querySelector(".fieldback-user-message");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

writeUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalWriteUs.classList.add("modal-show");
  if (storageName && storageEmail) {
    userName.value = storageName;
    userEmail.value = storageEmail;
    userMessage.focus();
  } else {
    userName.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove("modal-show");
  modalWriteUs.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!userName.value || !userEmail.value || !userMessage.value) {
    evt.preventDefault();
    modalWriteUs.classList.remove("modal-error");
    modalWriteUs.offsetWidth = modalWriteUs.offsetWidth;
    modalWriteUs.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalWriteUs.classList.contains("modal-show")) {
      modalWriteUs.classList.remove("modal-show");
      modalWriteUs.classList.remove("modal-error");
    }
  }
});



var map = document.querySelector(".map");
var modalMap = document.querySelector(".modal-map");
var closeMap = modalMap.querySelector(".modal-close");

map.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalMap.classList.contains("modal-show")) {
      modalMap.classList.remove("modal-show");
    }
  }
});
