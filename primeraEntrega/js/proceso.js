let nombreAlumno = "";
let nota1Alumno = 1;
let nota2Alumno = 1;

function calcularPromedioXAlumno(nota1Alumno, nota2Alumno) {
  return (resultado = (nota1Alumno + nota2Alumno) / 2);
}

function ingresarAlumno() {
  let ingresar = true;
  
  while (ingresar) {
      let nombre1 = document.getElementById("nombre").value;
      let nota1Alumno = parseInt(document.getElementById("nota1").value);
      let nota2Alumno = parseInt(document.getElementById("nota2").value);
      let resultado = calcularPromedioXAlumno(nota1Alumno, nota2Alumno);
    
     let contenedor = document.querySelector('#contenido');
    let boton = document.querySelector('#boton');
    boton.addEventListener('click', ()=>{
      let p = document.createElement('p');
      p.innerText = "Alumno: " + nombre1 + ", Nota 1° Parcial: " + nota1Alumno + ", Nota 2° Parcial: " + nota2Alumno + ", Promedio: " + resultado;
      contenedor.appendChild(p);
    });

    condicion = prompt("¿Quiere agregar otro alumno? y/n");
    if (condicion == n) {
        ingresar = false;
    }
  }
}
