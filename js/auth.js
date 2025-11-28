import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// 🔥 MISMA CONFIGURACIÓN
const firebaseConfig = {
  apiKey: "AIzaSyDjttg0cvyf7IdJnxnRzMSRb2nMyqW1sPI",
  authDomain: "login-webhector.firebaseapp.com",
  projectId: "login-webhector",
  storageBucket: "login-webhector.appspot.com",
  messagingSenderId: "857936222330",
  appId: "1:857936222330:web:cecde93b6eac0614c2c3c3",
  measurementId: "G-E8TMJHCTWB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 💡 Revisar si hay sesión
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html";
  }
});

// Cerrar sesión
document.getElementById("cerrar").addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
});
