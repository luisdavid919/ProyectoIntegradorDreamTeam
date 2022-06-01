function addItem(item) {
    const itemHTML =
      '<div class="card" style="width:400px; height:650px";>\n' +
      '    <img src="' +
      item.img +
      '" class="card-img-top" alt="image" style="width:100%; height:500px";>\n' +
      '    <div class="card-body">\n' +
      '        <h5 class="card-title">' +
      item.name +
      "</h5>\n" +
      '        <p class="card-text">' +
      item.description +
      "</p>\n" +
      '        <a href="#" class="btn btn-primary">Añadir</a>\n' +
      "    </div>\n" +
      "</div>\n" +
      "<br/>";
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
  }
  
  addItem({
    name: "T-Shirt 1",
    img: "./assets/img/shirt-01.jpg",
    description: "Playera estilo de prueba",
  });
  
  addItem({
    name: "T-Shirt 2",
    img: "./assets/img/shirt-02.jpg",
    description: "Playera estilo de prueba",
  });
  
  addItem({
    name: "T-Shirt 3",
    img: "./assets/img/shirt-03.jpg",
    description: "Playera estilo de prueba",
  });
  
  addItem({
    name: "T-Shirt 4",
    img: "./assets/img/shirt-04.jpg",
    description: "Playera estilo de prueba",
  });
  
  addItem({
    name: "T-Shirt 5",
    img: "./assets/img/shirt-05.jpg",
    description: "Playera estilo de prueba",
  });
  
  addItem({
    name: "T-Shirt 6",
    img: "./assets/img/shirt-06.jpg",
    description: "Playera estilo de prueba",
  });
  
  addItem({
    name: "T-Shirt 7",
    img: "./assets/img/shirt-07.jpg",
    description: "Playera estilo de prueba",
  });
  
  addItem({
    name: "T-Shirt 8",
    img: "./assets/img/shirt-08.jpg",
    description: "Playera estilo de prueba",
  });
  
  addItem({
    name: "T-Shirt 9",
    img: "./assets/img/shirt-09.jpg",
    description: "Playera estilo de prueba",
  });
  
  addItem({
    name: "T-Shirt 10",
    img: "./assets/img/shirt-10.jpg",
    description: "Playera estilo de prueba",
  });