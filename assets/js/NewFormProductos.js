function guardarProducto() {
  localStorage.nombre = document.getElementById("productNameInput").value;
  localStorage.image = document.getElementById("productImageURLInput").value;
  localStorage.price = document.getElementById("productPriceInput").value;
  localStorage.description = document.getElementById("productDescriptionInput").value;
  localStorage.category = document.getElementById("productCategoryInput").value;
}
