// Datos de cada donut
const posts = {
  glaseado: {
    title: "Donut Glaseado Clásico",
    img: "https://elobradordelceliaco.com/wp-content/uploads/2024/12/donut-glaseada.jpg",
    content: `
      El donut glaseado clásico nació en Estados Unidos a mediados del siglo XIX, cuando los inmigrantes holandeses popularizaron las rosquillas fritas.
      Su cobertura de azúcar glas se añadió posteriormente, convirtiéndolo en el emblema de cadenas como Krispy Kreme.
      Suele prepararse con harina, leche, huevos, levadura y mantequilla, y se fríe hasta quedar dorado antes de bañarse en glaseado.
      Es el donut más tradicional y reconocido en todo el mundo.
    `
  },
  chocolate: {
    title: "Donut de Chocolate",
    img: "https://kitchen335co.com/wp-content/uploads/2023/06/glazed-chocolate-donuts-thumbnail.jpg",
    content: `
      El donut de chocolate surgió como una variación del glaseado tradicional, añadiendo cacao a la masa o una cobertura de chocolate fundido.
      Fue especialmente popularizado en Estados Unidos en la segunda mitad del siglo XX, gracias a su sabor más intenso y su aspecto brillante.
      Los ingredientes principales incluyen cacao en polvo, mantequilla, azúcar y levadura, y suele encontrarse tanto relleno como cubierto.
      Es uno de los sabores preferidos en cafeterías y panaderías modernas.
    `
  },
  cream: {
    title: "Boston Cream Donut",
    img: "https://bakemark.com/wp-content/uploads/2023/05/bostoncreamdonut-scaled.jpg",
    content: `
      Este donut fue creado en Boston, Massachusetts, inspirado en el pastel conocido como Boston Cream Pie.
      Está relleno de una suave crema pastelera y cubierto con una capa de chocolate brillante.
      Se elabora con una masa esponjosa fermentada, frita y luego inyectada con el relleno.
      En 2003 fue declarado oficialmente el donut representativo del estado de Massachusetts, y sigue siendo un clásico de las pastelerías estadounidenses.
    `
  },
  jelly: {
    title: "Jelly Donut",
    img: "https://dinnerthendessert.com/wp-content/uploads/2023/06/1x1-jelly-donuts-1.jpg",
    content: `
      El jelly donut, también conocido como donut relleno de mermelada, tiene sus raíces en Europa Central, particularmente en Alemania y Polonia, donde se conocen como Berliner o Pączki.
      Llegó a Estados Unidos con los inmigrantes europeos y se popularizó en el siglo XX.
      Está relleno de mermelada de fresa, frambuesa o mora, y se espolvorea con azúcar glas.
      Es especialmente tradicional durante la festividad judía de Hanukkah.
    `
  },
  cronut: {
    title: "Cronut",
    img: "https://static.bainet.es/clip/05e7ce35-409d-4652-8fbe-a2a408ec264c_source-aspect-ratio_1600w_0.jpg",
    content: `
      El cronut es una invención moderna creada en 2013 por el chef Dominique Ansel en Nueva York.
      Combina la técnica del croissant francés con la forma y fritura del donut.
      Su masa hojaldrada se fríe y se rellena con cremas de sabores variados, como vainilla o limón.
      El cronut causó gran sensación en su lanzamiento, generando largas filas en la pastelería de Ansel y extendiéndose rápidamente por todo el mundo como un fenómeno gastronómico.
    `
  },
  simpson: {
    title: "Simpson Donut",
    img: "https://cdn.blogsthermomix.es/media/Posts/attachments/bcb1a4b97c3f66692ad4b6187d01a009.jpg",
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
