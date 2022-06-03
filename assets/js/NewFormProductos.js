<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function (e) {
  var miForm = document.getElementById("formulario");
  miForm.onsubmit = function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var jsonData = {};
    for (var [k, v] of formData) {
      jsonData[k] = v;
    }
    console.log(jsonData);
  };
  miForm: JSON.stringify({});
});
=======
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
>>>>>>> b90fd6d23c985473be99f382af2442a8ee26cee2
