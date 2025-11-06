// Entradas del blog
const posts = {
  glaseado: {
    title: "Donut Glaseado",
    img: "https://images.unsplash.com/photo-1612197527762-7b84d1b9e3ad?auto=format&fit=crop&w=800&q=80",
    content: `
      El clásico de los clásicos 🍩.  
      Su glaseado brillante y textura suave lo hacen irresistible.  
      Perfecto para acompañar con un café por la mañana o para un antojo dulce a cualquier hora.
    `
  },
  chocolate: {
    title: "Donut de Chocolate",
    img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80",
    content: `
      Para los amantes del cacao 🍫.  
      Cubierto con una capa generosa de chocolate y, a veces, chispas.  
      Es el favorito de los más golosos y una tentación difícil de resistir.
    `
  },
  fresa: {
    title: "Donut de Fresa",
    img: "https://images.unsplash.com/photo-1590080875832-48e62a57a0a5?auto=format&fit=crop&w=800&q=80",
    content: `
      Dulce, colorido y delicioso 🍓.  
      Su cobertura rosa y sabor afrutado lo convierten en el donut más alegre del mostrador.  
      Ideal para quienes buscan algo fresco y bonito.
    `
  }
};

// Contenedor principal
const container = document.getElementById("post-container");

// Función para mostrar un post
function mostrarPost(postId) {
  const post = posts[postId];
  if (!post) return;

  container.innerHTML = `
    <h2>${post.title}</h2>
    <img src="${post.img}" alt="${post.title}">
    <p>${post.content}</p>
  `;
}

// Mostrar el primero por defecto
mostrarPost("glaseado");

// Manejar clics en botones
document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const postId = btn.getAttribute("data-post");
    mostrarPost(postId);
  });
});
