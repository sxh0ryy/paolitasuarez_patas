function enviar() {

    let nombre = document.getElementById("nombre").value;

    let apellidoPaterno = document.getElementById("apellidoPaterno").value;

    let apellidoMaterno = document.getElementById("apellidoMaterno").value;

    let telefono = document.getElementById("telefono").value;

    let direccion = document.getElementById("direccion").value;

    let correo = document.getElementById("correo").value;

    document.getElementById("resultadoNombre").innerHTML =
        "Nombre: " + nombre;

    document.getElementById("resultadoApellidoPaterno").innerHTML =
        "Apellido Paterno: " + apellidoPaterno;

    document.getElementById("resultadoApellidoMaterno").innerHTML =
        "Apellido Materno: " + apellidoMaterno;

    document.getElementById("resultadoTelefono").innerHTML =
        "Telefono: " + telefono;

    document.getElementById("resultadoDireccion").innerHTML =
        "Direccion: " + direccion;

    document.getElementById("resultadoCorreo").innerHTML =
        "Correo Electronico: " + correo;

}