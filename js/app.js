// ---------- Firebase V9 (Modular) ----------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// 🔥 Tu configuración correcta
const firebaseConfig = {
  apiKey: "AIzaSyDjttg0cvyf7IdJnxnRzMSRb2nMyqW1sPI",
  authDomain: "login-webhector.firebaseapp.com",
  projectId: "login-webhector",
  storageBucket: "login-webhector.appspot.com",  // CORREGIDO
  messagingSenderId: "857936222330",
  appId: "1:857936222330:web:cecde93b6eac0614c2c3c3",
  measurementId: "G-E8TMJHCTWB"
};

// Iniciar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Formulario
const loginForm = document.getElementById('loginForm');
const mensaje = document.getElementById('mensaje');

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener valores
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    mensaje.innerText = "";

    // Login
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = 'home.html';
      })
      .catch(error => {
        console.error(error);
        mensaje.innerText = "⚠️ " + error.message;
      });
  });
}
