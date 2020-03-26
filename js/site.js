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
