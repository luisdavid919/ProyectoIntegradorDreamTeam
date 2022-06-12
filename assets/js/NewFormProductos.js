function guardarProducto() {
  localStorage.nombre = document.getElementById("productNameInput").value;
  localStorage.image = document.getElementById("productImageURLInput").value;
  localStorage.price = document.getElementById("productPriceInput").value;
  localStorage.description = document.getElementById("productDescriptionInput").value;
  localStorage.category = document.getElementById("productCategoryInput").value;
}
document.addEventListener("DOMContentLoaded", function (e) {
  var product_form = document.getElementById("product_form");
  product_form.onsubmit = function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var jsonData = {};
    for (var [k, v] of formData) {
      jsonData[k] = v;
    }
    console.log(jsonData);
  };
});
