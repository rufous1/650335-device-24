var writeUs = document.querySelector(".write-us-link");
var modalWriteUs = document.querySelector(".modal-write-us");
var close = modalWriteUs.querySelector(".modal-close");
var form = modalWriteUs.querySelector(".write-us-form");
var userName = modalWriteUs.querySelector("[name=user-name]");
var userEmail = modalWriteUs.querySelector("[name=user-email]");
var userMessage = modalWriteUs.querySelector("[name=user-message]");

var isStorageSupport = true;
var storageName = '';
var storageEmail = '';

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

writeUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalWriteUs.classList.add("modal-show");

  if (storageName) {
  	userName.value = storageName;
  	userEmail.focus();
  } else {
  	userName.focus();
  }
  if (storageName && storageEmail) {
  	userName.value = storageName;
  	userEmail.value = storageEmail;
  	userMessage.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove("modal-show");
});

form.addEventListener("submite", function(evt) {
  if (!userName.value || !userEmail.value || !userMessage.value) {
    evt.preventDefault();
    if (!userName.value) {
      userName.classList.add("modal-invalid");
    }
    if (!userEmail.value) {
      userEmail.classList.add("modal-invalid");
    }
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", userName.value);
      localStorage.setItem("email", userEmail.value);
    }
  }
});


window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    modalWriteUs.classList.remove('modal-show');
  }
});
