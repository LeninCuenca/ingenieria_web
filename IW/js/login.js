// Lista de usuarios con su rol
const users = [
    { email: "doctor@clinica.com", password: "doctor123", role: "doc" },
    { email: "enfermera@clinica.com", password: "enfermera123", role: "enfermera" }
  ];
  
  // Función para redirigir según el rol
  function redirectToRole(role) {
    if (role === 'doc') {
      window.location.href = 'pantalladoctor/dashboard_doctor.html';
    } else if (role === 'enfermera') {
      window.location.href = 'pantallaenfermera/dashboard_enfermera.html';
    }
  }
  
  // Función de validación del formulario de login
  function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    const user = users.find(u => u.email === email && u.password === password);
  
    if (user) {
      redirectToRole(user.role);
    } else {
      alert("Credenciales incorrectas. Por favor, intente nuevamente.");
    }
  }