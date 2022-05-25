function addItem(item) {
  const itemHTML =
    '<div class="card" style="width: 18rem;">\n' +
    '    <img src="' +
    item.img +
    '" class="card-img-top" alt="image">\n' +
    '    <div class="card-body">\n' +
    '        <h5 class="card-title">' +
    item.name +
    "</h5>\n" +
    '        <p class="card-text">' +
    item.description +
    "</p>\n" +
    '        <a href="#" class="btn btn-primary">Add</a>\n' +
    "    </div>\n" +
    "</div>\n" +
    "<br/>";
  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;
}

addItem({
  name: "Ejemplo 1",
  img: "https://quarry.vteximg.com.br/arquivos/ids/367249-500-500/QC241126BC-1.jpg?v=637726831445970000",
  description: "Playera blanca basica", 
});

addItem({
  name: "Ejemplo 2",
  img: "https://quarry.vteximg.com.br/arquivos/ids/361314-500-500/QC240999AM-1.jpg?v=637644007229170000",
  description: "Cheese & Onion Chips",
});
addItem({
  name: "Ejemplo 3",
  img: "https://quarry.vteximg.com.br/arquivos/ids/367249-500-500/QC241126BC-1.jpg?v=637726831445970000",
  description: "Orange and Apple juice fresh and delicious",
});
addItem({
  name: "Ejemplo 4",
  img: "https://quarry.vteximg.com.br/arquivos/ids/361314-500-500/QC240999AM-1.jpg?v=637644007229170000",
  description: "Cheese & Onion Chips",
});
addItem({
  name: "Ejemplo 5",
  img: "https://quarry.vteximg.com.br/arquivos/ids/367249-500-500/QC241126BC-1.jpg?v=637726831445970000",
  description: "Orange and Apple juice fresh and delicious",
});

addItem({
  name: "Ejemplo 6",
  img: "https://quarry.vteximg.com.br/arquivos/ids/361314-500-500/QC240999AM-1.jpg?v=637644007229170000",
  description: "Cheese & Onion Chips",
});
addItem({
  name: "Ejemplo 7",
  img: "https://quarry.vteximg.com.br/arquivos/ids/367249-500-500/QC241126BC-1.jpg?v=637726831445970000",
  description: "Orange and Apple juice fresh and delicious",
});
addItem({
  name: "Ejemplo 8",
  img: "https://quarry.vteximg.com.br/arquivos/ids/361314-500-500/QC240999AM-1.jpg?v=637644007229170000",
  description: "Cheese & Onion Chips",
});
addItem({
  name: "Ejemplo 9",
  img: "https://quarry.vteximg.com.br/arquivos/ids/367249-500-500/QC241126BC-1.jpg?v=637726831445970000",
  description: "Orange and Apple juice fresh and delicious",
});

addItem({
  name: "Ejemplo 10",
  img: "https://quarry.vteximg.com.br/arquivos/ids/361314-500-500/QC240999AM-1.jpg?v=637644007229170000",
  description: "Cheese & Onion Chips",
});

