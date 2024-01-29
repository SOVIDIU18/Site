function filterProducts() {
  var selectedProducator = document.getElementById("producator").value;
  var selectedPutere = document.getElementById("putere").value;
  var selectedCombustibil = document.getElementById("combustibil").value;

  var productElements = document.querySelectorAll(".flex-container ul li");

  productElements.forEach(function (element) {
      var elementProducator = element.getAttribute("data-producator");
      var elementPutere = parseInt(element.getAttribute("data-putere"), 10);
      var elementCombustibil = element.getAttribute("data-combustibil");

      var producatorCondition = selectedProducator === "toate" || selectedProducator === elementProducator;
      var putereCondition = selectedPutere === "toate" || selectedPutere === elementPutere.toString();
      var combustibilCondition = selectedCombustibil === "toate" || selectedCombustibil === elementCombustibil;

      if (producatorCondition && putereCondition && combustibilCondition) {
          element.style.display = "block";
      } else {
          element.style.display = "none";
      }
  }); 
}
