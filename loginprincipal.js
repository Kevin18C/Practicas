const $btnSignIn = document.querySelector(".sign-in-btn"),
  $btnSignUp = document.querySelector(".sign-up-btn"),
  $signUp = document.querySelector(".sign-up"),
  $signIn = document.querySelector(".sign-in");

document.addEventListener("click", (e) => {
  if (e.target === $btnSignIn || e.target === $btnSignUp) {
    $signIn.classList.toggle("active");
    $signUp.classList.toggle("active");
  }
});

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

// Función para registrar un nuevo usuario
function registerUser(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  // Obtiene los valores de usuario y contraseña del formulario de registro
  const username = registerForm.elements.username.value;
  const email = registerForm.elements.email.value;
  const password = registerForm.elements.password.value;

  function isEmailUsed(email) {
    return localStorage.getItem(email) !== null;
  }

  if (isEmailUsed(email)) {
    alert("Este correo electrónico ya ha sido utilizado!");
  } else {
    // Guarda los valores de usuario y contraseña en un objeto y lo guarda en el almacenamiento local del navegador
    const user = { email, password };
    localStorage.setItem(email, JSON.stringify(user));
    alert("Usuario registrado exitosamente!");
    location.href = "Paginaprincipal.html";
  }
}

// Función para iniciar sesión con un usuario existente
function loginUser(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  // Obtiene los valores de usuario y contraseña del formulario de inicio de sesión
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  // Comprueba si el usuario y la contraseña coinciden con los datos guardados en el almacenamiento local
  const savedUserJSON = localStorage.getItem(email);
  if (savedUserJSON !== null) {
    const savedUser = JSON.parse(savedUserJSON);
    if (savedUser.password === password) {
      alert("Inicio de sesión exitoso!");
      location.href = "Paginaprincipal.html";
    } else {
      alert("Nombre de usuario o contraseña incorrectos!");
    }
  } else {
    alert("Nombre de usuario o contraseña incorrectos!");
  }
}

// Agrega un controlador de eventos para el envío del formulario de registro
registerForm.addEventListener("submit", registerUser);

// Agrega un controlador de eventos para el envío del formulario de inicio de sesión
loginForm.addEventListener("submit", loginUser);
