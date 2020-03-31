const extraButton = document.querySelector(".buttons .expand");
const addToBasketButtons = document.querySelectorAll(".add-to-basket");

if (extraButton) {
  extraButton.addEventListener("click", function() {
    const extraMenu = document.querySelector(".buttons");
    extraMenu.classList.toggle("active");
  });
}

if (addToBasketButtons) {
  addToBasketButtons.forEach(button => {
    button.addEventListener("click", function(e) {
      e.preventDefault();
      const iconAdd = button.querySelector(".add");
      const iconOk = button.querySelector(".ok");

      button.classList.toggle("active");
      if (iconAdd) iconAdd.classList.toggle("hide");
      if (iconOk) iconOk.classList.toggle("hide");
    });
  });
}

//add collapsible effect
const collasibleElements = document.querySelectorAll(".collapsible");

if (collasibleElements)
  collasibleElements.forEach(element => {
    element.addEventListener("click", function(e) {
      const content = document.querySelector(
        e.currentTarget.getAttribute("data-target")
      );

      e.currentTarget.classList.toggle("active");

      if (content)
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
    });
  });

const reservation = document.querySelector("#reserve");

if (reservation) {
  const moreInformation = document.querySelector(".hidden-form");
  reservation.addEventListener("click", function(e) {
    e.preventDefault();
    moreInformation;
  });
}

//modal
const modalButtons = document.querySelectorAll(".show-modal");
if (modalButtons) {
  modalButtons.forEach(button => {
    button.addEventListener("click", function(e) {
      e.preventDefault();
      let closeModal;
      const modal = document.querySelector(
        e.currentTarget.getAttribute("data-target")
      );

      console.log(e.currentTarget.getAttribute("data-target"));

      console.log(modal);

      if (modal) {
        const closeThisModal = () => {
          modal.style.display = "none";
        };

        modal.style.display = "block";
        closeModal = modal.querySelector(".close");

        window.addEventListener("click", function(e) {
          if (e.target == modal) {
            modal.style.display = "none";
          }
        });

        if (closeModal) {
          closeModal.addEventListener("click", closeThisModal);
        }
      }
    });
  });
}
