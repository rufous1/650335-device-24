var writeUs = document.querySelector(".write-us-link");
var modalWriteUs = document.querySelector(".modal-write-us");
var close = modalWriteUs.querySelector(".modal-close");

writeUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalWriteUs.classList.add("modal-show");
});
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove("modal-show");
});
