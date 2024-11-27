// Lógica de redirección para los botones de la sidebar
document.addEventListener('DOMContentLoaded', function() {
  // Manejo de vistas en el dashboard del doctor
  const inicioBtn = document.getElementById("inicio-btn");
  const registroPacienteBtn = document.getElementById("registro-paciente-btn");
  const inicioContent = document.getElementById("inicio-content");
  const registroPacienteContent = document.getElementById("registro-paciente-content");
  const cerrarSesionBtn = document.getElementById("cerrar-sesion");

  if (inicioBtn) {
    inicioBtn.addEventListener("click", function () {
      inicioContent.style.display = "block";
      if (registroPacienteContent) {
        registroPacienteContent.style.display = "none";
      }
    });
  }

  if (registroPacienteBtn) {
    registroPacienteBtn.addEventListener("click", function () {
      if (registroPacienteContent) {
        registroPacienteContent.style.display = "block";
      }
      inicioContent.style.display = "none";
    });
  }

  if (cerrarSesionBtn) {
    cerrarSesionBtn.addEventListener("click", function () {
      window.location.href = "../index.html";
    });
  }
});