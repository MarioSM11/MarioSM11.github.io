"use strict"

const almacen=[
    {
        "id":"FR-01",
        "nombre":"Aguacate",
        "Kilos_disponibles":23.5,
        "precio_kilo":2.0
    },
    {
        "id":"FR-02",
        "nombre":"Pera",
        "Kilos_disponibles":150.0,
        "precio:kilo":1.20
    },
    {
        "id":"FR-03",
        "nombre":"Piña",
        "Kilos_disponibles":30.0,
        "precio:kilo":0.75    
    }
]

document.write(almacen[0]["precio:kilo"]+"<br>");
document.write(almacen[2]["nombre"]+"<br>");
// let persona = {
//     "nombre": "Juan",
//     "apellido": "García",
//     "edad": 36,
//     "dni":"12345678H",
//     "estado_civil":"soltero",
//     "direccion":"C/Aqui al lado nº3",
//     "telefono":"958845432"
// }

// for(let atributo in persona){
//     document.write(`${atributo}--->${persona[atributo]}`);
// }

// const sueldos={
//     "María":1780,
//     "Antonio":2200,
//     "Roberto":1300,
//     "Fermín":1650,
//     "Francisco":3000
// }

// let suma=0;
// for(let empleado in sueldos){
//     suma+=sueldos[empleado];
// }

// document.write(`La empresa paga en sueldos un total de ${suma}`);

//document.write(persona,nombre+"<br>");
//document.write(persona["nombre"]+"<br>");
//document.write(persona["edad"]+"<br>");

//let dato= prompt("Que campo quieres ver?");
//document.write(persona[dato]+"<br>");

//persona.nombre="Martín";
//persona["edad"]=26;
//document.write(persona["edad"]+"<br>");