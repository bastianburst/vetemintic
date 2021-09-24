//Archivo js
//REQUERIMIENTO 3
/*
El formulario cuenta con un <input> cuyo id es
“contrasena_usuario”. Debe implementar una función de
JS validar_contrasena que recibe un parámetro tipo string,
la función realiza las siguientes validaciones para el string:
• Debe tener 6 o más caracteres.
• Solo puede contener caracteres alfanuméricos. Es
decir, letras de la A a la Z y los números del 0 al 9.
• Debe contener por lo menos una letra minúscula,
una letra mayúscula y un número.
En caso de cumplir las condiciones retorna verdadero,
de lo contrario retorna falso.*/

function validar_contrasena(string) {

    //console.log(string);
    //validar numero de caracteres
    let numcaracteres = string.length;
    //console.log(numcaracteres);



    //Variables
    let numeros = "0123456789";
    let letrasmayus = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let letrasminus = "abcdefghijklmnñopqrstuvwxyz";
    let alfanumeric = numeros + letrasmayus + letrasminus;
    //booleanos
    let isAlfanumeric;
    let isNumhere;
    let isMayusHere;
    let isMinusHere;

    //validar si hay números y letras
    for (var i = 0; i < string.length; i++) {
        if (alfanumeric.indexOf(string.charAt(i), 0) != -1) {
            isAlfanumeric = true;
        } else {
            isAlfanumeric = false;
            break;
        }
        //console.log(i);
        //console.log("Es alfanumerico: " + isAlfanumeric);
    }
    //console.log("Alfa num: " + isAlfanumeric);

    //Validar un número.
    for (var i = 0; i < string.length; i++) {
        if (numeros.indexOf(string.charAt(i), 0) != -1) {
            isNumhere = true;
            break;
        } else {
            isNumhere = false;
        }
        //console.log(i);
        //console.log("Tiene números: " + isNumhere);
    }
    //console.log("Tiene num: " + isNumhere);

    //Validar que Debe contener por lo menos una letra minúscula, una letra mayúscula y un número.

    for (var i = 0; i < string.length; i++) {
        if (letrasmayus.indexOf(string.charAt(i), 0) != -1) {
            isMayusHere = true;
            break;
        } else {
            isMayusHere = false;
        }
        //console.log(i);
        //console.log("Tiene mayusculas: " + isMayusHere);
    }
    //console.log("Hay Mayus: " + isMayusHere);

    //Validar que Debe contener por lo menos una letra minúscula, una letra mayúscula y un número.


    for (var i = 0; i < string.length; i++) {
        if (letrasminus.indexOf(string.charAt(i), 0) != -1) {
            isMinusHere = true;
            break;
        } else {
            isMinusHere = false;
        }
        //console.log(i);
        //console.log("Tiene minusculas: " + isMinusHere);
    }
    //console.log("Hay minus: " + isMinusHere);


    //Condicionales
    /*Aqui retornamos el false o true que pide el ejercicio*/
    if (numcaracteres >= 6) {
        if (isAlfanumeric == true && isNumhere == true && isMayusHere == true && isMinusHere == true) {
            //console.log("Estado interno: " + true);
            //alert("Excelente");
            return true;
        } else {
            //console.log("Estado interno: " + false);
            //alert("Error");

            return false;
        }
    } else {
        //console.log("Estado interno: " + false);
        //alert("Error");

        return false;
    }

}
//Función para probar
//validar_contrasena("Sebas1234");


//REQ 1
/*
El formulario cuenta con un <input> cuyo id es
“nombre_usuario”. Debe implementar una función de
JS validar_nombre_usuario que recibe un parámetro
tipo string, la función realiza las siguientes validaciones
para el string:
• Solo puede contener solo letras de la A a la Z.
• Debe validar que la primera letra sea mayúscula.*/


function validar_nombre_usuario(string) {
    //validar que sea solo letras
    let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz";
    let letrasMayus = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let istexto;
    for (var i = 0; i < string.length; i++) {
        if (letras.indexOf(string.charAt(i), 0) != -1) {
            istexto = true;
        } else {
            istexto = false;
            break;
        }
        //console.log(i);
        //console.log("Tiene minusculas: " + isMinusHere);
    }

    //validar que la primera sea mayuscula
    //Sacamos el primer carácter de la cadena
    let firstMayus = string.charAt(0);
    console.log(firstMayus);
    //Miramos si es mayuscula esa letra comparandola con la lista de letras Mayus
    if (letrasMayus.indexOf(firstMayus.charAt(0), 0) != -1) {
        isFirstMayus = true;
    } else {
        isFirstMayus = false;
    }
    //console.log(i);
    //console.log("Tiene minusculas: " + isMinusHere);

    //Condicionales
    /*Aqui retornamos el false o true que pide el ejercicio*/
    if (isFirstMayus == true && istexto == true) {
        //console.log("Estado interno: " + true);
        return true;
    } else {
        //console.log("Estado interno: " + false);
        //alert("Error");
        return false;
    }
}

//validar_nombre_usuario("EEbasss");


//REQ 2
/*
El formulario cuenta con un <input> cuyo id es
“anoNacimiento_usuario”. Debe implementar una
función de JS validar_anoNacimiento_usuario que
recibe un parámetro, la función realiza las siguientes
validaciones:
• El valor del parámetro es un número.
• El número debe ser positivo.
• El número debe ser igual o mayor a 1900 y menor
que 2022.
En caso de cumplir las condiciones retorna verdadero,
de lo contrario retorna falso.*/

function validar_anoNacimiento_usuario(valor) {
    
    let valorin = valor.toString();
    //validar si es un número

    //Validar si es un número.
    let numeros = "0123456789"
    let isNumhere;
    for (var i = 0; i < valorin.length; i++) {
        if (numeros.indexOf(valorin.charAt(i), 0) != -1) {
            isNumhere = true;
        } else {
            isNumhere = false;
            break;
        }
        //console.log(i);
        //console.log("Tiene números: " + isNumhere);
    }
    //console.log(isNumhere);

    //validar que sean positivos
    let isPositivo;
    if (valor >= 0) {
        isPositivo = true;
    } else {
        isPositivo = false;
    }
    //console.log(isPositivo);

    //validar que esté en el rango
    let isOnRange;
    if (valor >= 1900 && valor <= 2022) {
        isOnRange = true;
    } else {
        isOnRange = false;
    }
    //console.log(isOnRange);

    //Condicionales
    /*Aqui retornamos el false o true que pide el ejercicio*/
    if (isOnRange == true && isPositivo == true == isNumhere ==true) {
        //console.log("Estado interno: " + true);
        return true;
    } else {
        //console.log("Estado interno: " + false);
        //alert("Error");
        return false;
    }
}

//validar_anoNacimiento_usuario(-2000);

//Descomentar esto ultimo al subirlo
//module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario;
//module.exports.validar_contrasena = validar_contrasena;
//module.exports.validar_nombre_usuario = validar_nombre_usuario;