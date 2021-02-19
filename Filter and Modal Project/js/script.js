//array con los datos de los items
let items_data = [
  {
    imagen: `url(img/cake-1.jpeg) no-repeat center center/cover`,
    item: "Cake 1",
    categoria: "Cakes",
    precio: 2.99,
    chart: "",
  },
  {
    imagen: `url(img/cake-2.jpeg) no-repeat center center/cover`,
    item: "Cake 2",
    categoria: "Cakes",
    precio: 5.99,
    chart: "",
  },
  {
    imagen: `url(img/cake-3.jpeg) no-repeat center center/cover`,
    item: "Cake 3",
    categoria: "Cakes",
    precio: 2.49,
    chart: "",
  },
  {
    imagen: `url(img/cupcake-1.jpeg) no-repeat center center/cover`,
    item: "Cupcake 1",
    categoria: "Cupcakes",
    precio: 7.99,
    chart: "",
  },
  {
    imagen: `url(img/cupcake-2.jpeg) no-repeat center center/cover`,
    item: "Cupcake 2",
    categoria: "Cupcakes",
    precio: 2.45,
    chart: "",
  },
  {
    imagen: `url(img/cupcake-3.jpeg) no-repeat center center/cover`,
    item: "Cupcake 3",
    categoria: "Cupcakes",
    precio: 4.99,
    chart: "",
  },
  {
    imagen: `url(img/sweets-1.jpeg) no-repeat center center/cover`,
    item: "Sweets 1",
    categoria: "Sweets",
    precio: 1.99,
    chart: "",
  },
  {
    imagen: `url(img/sweets-2.jpeg) no-repeat center center/cover`,
    item: "Sweets 2",
    categoria: "Sweets",
    precio: 1.55,
    chart: "",
  },
  {
    imagen: `url(img/sweets-3.jpeg) no-repeat center center/cover`,
    item: "Sweets 3",
    categoria: "Sweets",
    precio: 1.85,
    chart: "",
  },
  {
    imagen: `url(img/doughnut-1.jpeg) no-repeat center center/cover`,
    item: "Doughnut 1",
    categoria: "Doughnuts",
    precio: 2.99,
    chart: "",
  },
  {
    imagen: `url(img/doughnut-2.jpeg) no-repeat center center/cover`,
    item: "Doughnut 2",
    categoria: "Doughnuts",
    precio: 6.99,
    chart: "",
  },
  {
    imagen: `url(img/doughnut-3.jpeg) no-repeat center center/cover`,
    item: "Doughnut 3",
    categoria: "Doughnuts",
    precio: 8.99,
    chart: "",
  },
];

//array con la grilla
let grid = document.querySelector(".grid");
let items_grid = grid.querySelectorAll(".item");

//array de todas las categorias
let categorias = document.querySelector(".categorias").querySelectorAll("a");
mostrar(items_data);

categorias.forEach((categoria) => {
  categoria.addEventListener("click", (filtrar_categoria) => {
    let items_mostrar=[];
    for (i = 0; i < items_data.length; i++) {
      if (categoria.textContent == items_data[i].categoria) { // lo encuentra
        
        items_mostrar.push(items_data[i]);
        
        // items_grid[i].querySelector(".item-name").textContent = items_data[i].item; // nombre
        // items_grid[i].querySelector(".item-price").textContent = `$${items_data[i].precio}`; // precio
        // items_grid[i].querySelector(".item-img").style.background = items_data[i].imagen; // imagen

      
      
      } else { items_grid[i].style.display = "none"; } // los demas se ocultan

      if (categoria.textContent == "All") {
        items_mostrar = items_data; // muestra todos
      }
    }
    mostrar(items_mostrar);
    console.log(items_mostrar);
  });
});

function mostrar(items) {
  for (i = 0; i < items.length; i++) {
    items_grid[i].style.display = "block";
    items_grid[i].querySelector(".item-name").textContent = items[i].item;
    items_grid[i].querySelector(".item-price").textContent = `$${items[i].precio}`;
    items_grid[i].querySelector(".item-img").style.background = items[i].imagen;
  }
}
