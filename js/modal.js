// MODAL
function modal() {
  const modal = document.querySelector(".modal-section"),
    btns = document.querySelector(".btn-modal"),
    close = document.querySelector(".close-modal");

  btns.addEventListener("click", openModal);

  function openModal() {
    modal.style.display = "block";
  }
  function closeModal() {
    modal.style.display = "none";
  }
  close.addEventListener("click", closeModal);
}
// ! MODAL
