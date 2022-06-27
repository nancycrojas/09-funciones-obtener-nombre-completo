//obtenerNombreCompleto(nombre, apellido)
//Crear una función obtenerNombreCompleto que tome //como argumento un nombre y un apellido y devuelva //un string con la unión de ambos valores

//obtenerNombreCompleto('Ada', 'Lovelace') // 'Ada //Lovelace'

const obtenerNombreCompleto = (nombre, apellido) => {
//function obtenerNombreCompleto(nombre, apellido) {
  return nombre + " " + apellido;
}

obtenerNombreCompleto("Ada", "Lovelace");