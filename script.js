// Datos de cada donut
const posts = {
  glaseado: {
    title: "Donut Glaseado Clásico",
    img: "https://images.unsplash.com/photo-1612197527762-7b84d1b9e3ad?auto=format&fit=crop&w=800&q=80",
    content: `
      El donut glaseado clásico nació en Estados Unidos a mediados del siglo XIX, cuando los inmigrantes holandeses popularizaron las rosquillas fritas.
      Su cobertura de azúcar glas se añadió posteriormente, convirtiéndolo en el emblema de cadenas como Krispy Kreme.
      Suele prepararse con harina, leche, huevos, levadura y mantequilla, y se fríe hasta quedar dorado antes de bañarse en glaseado.
      Es el donut más tradicional y reconocido en todo el mundo.
    `
  },
  chocolate: {
    title: "Donut de Chocolate",
    img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80",
    content: `
      El donut de chocolate surgió como una variación del glaseado tradicional, añadiendo cacao a la masa o una cobertura de chocolate fundido.
      Fue especialmente popularizado en Estados Unidos en la segunda mitad del siglo XX, gracias a su sabor más intenso y su aspecto brillante.
      Los ingredientes principales incluyen cacao en polvo, mantequilla, azúcar y levadura, y suele encontrarse tanto relleno como cubierto.
      Es uno de los sabores preferidos en cafeterías y panaderías modernas.
    `
  },
  cream: {
    title: "Boston Cream Donut",
    img: "https://images.unsplash.com/photo-1607082349566-187342bcedb6?auto=format&fit=crop&w=800&q=80",
    content: `
      Este donut fue creado en Boston, Massachusetts, inspirado en el pastel conocido como Boston Cream Pie.
      Está relleno de una suave crema pastelera y cubierto con una capa de chocolate brillante.
      Se elabora con una masa esponjosa fermentada, frita y luego inyectada con el relleno.
      En 2003 fue declarado oficialmente el donut representativo del estado de Massachusetts, y sigue siendo un clásico de las pastelerías estadounidenses.
    `
  },
  jelly: {
    title: "Jelly Donut",
    img: "https://images.unsplash.com/photo-1617196034796-5f6c6f34e77f?auto=format&fit=crop&w=800&q=80",
    content: `
      El jelly donut, también conocido como donut relleno de mermelada, tiene sus raíces en Europa Central, particularmente en Alemania y Polonia, donde se conocen como Berliner o Pączki.
      Llegó a Estados Unidos con los inmigrantes europeos y se popularizó en el siglo XX.
      Está relleno de mermelada de fresa, frambuesa o mora, y se espolvorea con azúcar glas.
      Es especialmente tradicional durante la festividad judía de Hanukkah.
    `
  },
  cronut: {
    title: "Cronut",
    img: "https://images.unsplash.com/photo-1628831318213-7c33984b0a53?auto=format&fit=crop&w=800&q=80",
    content: `
      El cronut es una invención moderna creada en 2013 por el chef Dominique Ansel en Nueva York.
      Combina la técnica del croissant francés con la forma y fritura del donut.
      Su masa hojaldrada se fríe y se rellena con cremas de sabores variados, como vainilla o limón.
      El cronut causó gran sensación en su lanzamiento, generando largas filas en la pastelería de Ansel y extendiéndose rápidamente por todo el mundo como un fenómeno gastronómico.
    `
  },
  simpson: {
    title: "Simpson Donut",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    content: `
      El donut de los Simpson se hizo mundialmente famoso gracias a la serie de televisión creada por Matt Groening.
      Aunque visualmente destaca por su cobertura rosa y virutas de colores, está inspirado en los donuts tradicionales americanos de los años cincuenta.
      Su receta habitual incluye una masa básica frita cubierta con glaseado de vainilla teñido de rosa.
      A lo largo de los años se ha convertido en un símbolo de la cultura pop, asociado con el personaje de Homer Simpson.
    `
  }
};

// Aquí muestro contenido dinámico...

const container = document.getElementById("post-container");

function mostrarPost(postId) {
  const post = posts[postId];
  if (!post) return;

  container.innerHTML = `
    <h2>${post.title}</h2>
    <img src="${post.img}" alt="${post.title}">
    <p>${post.content}</p>
  `;
}

mostrarPost("glaseado"); // Mostrar el primero por defecto

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const postId = btn.getAttribute("data-post");
    mostrarPost(postId);
  });
});
