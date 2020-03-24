const orderButton = document.querySelector(".basket-button");
const order = document.querySelector(".order");
const wrap = document.querySelector(".wrap");
const menuItems = document.querySelectorAll(".menu-item");

if (orderButton)
  orderButton.addEventListener("click", () => {
    if (!orderButton.classList.contains("active")) {
      orderButton.classList.add("active");
      order.classList.add("active");
      order.classList.remove("disabled");

      wrap.classList.add("rotate");
      wrap.classList.remove("rotate-back");
    } else {
      orderButton.classList.remove("active");
      order.classList.remove("active");
      order.classList.add("disabled");

      wrap.classList.remove("rotate");
      wrap.classList.add("rotate-back");
    }
  });

if (menuItems)
  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      console.log("Dodałeś produkt");
    });
  });
