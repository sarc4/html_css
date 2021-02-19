let body = document.querySelector("body");
let anterior = body.querySelector(".fa-chevron-left");
let siguiente = body.querySelector(".fa-chevron-right");
let testimonials = [
  {
    avatar: `url('img/02.jpg')`,
    nombre: "Jonas",
    puntaje: 5,
    opinion:
      "Pase a retirar mi tarjeta y por haber cumplido años este mes me regalaron una bebida! La chica que me atendió super amable y paciente, ya que el sistema no reconocía mi usuario. La verdad, no había ido hasta el momento, pero voy a volver por lo rico y la buena atención",
  },
  {
    avatar: `url('img/03.jpg')`,
    nombre: "Abril",
    puntaje: 4,
    opinion:
      "Los precios elevados, te sale lo mismo o mas que ir al mc donals practicamente. Los cafe calientes no son los mejores pero todos los frappes (cafes frios) son muy buenos y no se encuentran en otros lugares",
  },
  {
    avatar: `url('img/04.jpg')`,
    nombre: "Steve",
    puntaje: 3,
    opinion:
      "La ubicación es privilegiada. La ambientación es agradable. El lugar es espacioso y está limpio. La atención es buena. Los productos son ricos. Le bajo la calificación porque la politica de precios que tienen es incompatible con estos tiempos de Covid y recesión.",
  },
  {
    avatar: `url('img/05.jpg')`,
    nombre: "Mateo",
    puntaje: 4.5,
    opinion:
      "Excelente lugar, un ambiente cálido y confortable, muy tranquilo. Amplia variedad de cafés frío y calientes, además cuentan con muffins, tortas, panificación, etc. Muy rico todo y muy recomendable para visitar.",
  },
];

siguiente.addEventListener("click", mostrar_siguiente);
anterior.addEventListener("click", mostrar_anterior);

let i = 0;
cargar_datos(i);

function mostrar_siguiente() {
  if (i == 3) {
    i = 0;
  } else {
    i++;
  }
  cargar_datos(i);
}

function mostrar_anterior() {
  if (i == 0) {
    i = testimonials.length - 1;
  } else {
    i--;
  }

  cargar_datos(i);
}

function cargar_datos(i) {
  body.querySelector(".nombre").textContent = testimonials[i].nombre;
  body.querySelector(".avatar").style.backgroundImage = testimonials[i].avatar;
  body.querySelector(".descripcion").textContent = testimonials[i].opinion;
  body.querySelector(
    ".rank"
  ).innerHTML = '<i class="fas fa-star fa-2x"></i>'.repeat(
    testimonials[i].puntaje
  );
}
