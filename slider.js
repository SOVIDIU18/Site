document.addEventListener("DOMContentLoaded", function () {
    const fromSlider = document.getElementById("fromSlider");
    const toSlider = document.getElementById("toSlider");
    const fromInput = document.getElementById("fromInput");
    const toInput = document.getElementById("toInput");
  
    function updateProductList() {
      const products = document.querySelectorAll(".flex-container ul li");
  
      products.forEach((product) => {
        const price = parseInt(product.getAttribute("data-pret"), 10);
        product.style.display =
          price >= parseInt(fromInput.value, 10) &&
          price <= parseInt(toInput.value, 10)
            ? "block"
            : "none";
      });
    }
  
    fromSlider.addEventListener("input", function () {
      fromInput.value = fromSlider.value;
      updateProductList();
    });
  
    toSlider.addEventListener("input", function () {
      toInput.value = toSlider.value;
      updateProductList();
    });
  
    fromInput.addEventListener("input", function () {
      fromSlider.value = fromInput.value;
      updateProductList();
    });
  
    toInput.addEventListener("input", function () {
      toSlider.value = toInput.value;
      updateProductList();
    });
  });