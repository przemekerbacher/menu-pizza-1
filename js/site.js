const orderButton = document.querySelector(".basket-button");
const order = document.querySelector(".order");

if (orderButton)
  orderButton.addEventListener("click", () => {
    if (!orderButton.classList.contains("active")) {
      orderButton.classList.add("active");
      order.classList.add("active");
      order.classList.remove("disabled");
    } else {
      orderButton.classList.remove("active");
      order.classList.remove("active");
      order.classList.add("disabled");
    }
  });
