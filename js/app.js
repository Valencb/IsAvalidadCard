
function isValidtarjeta(tarjeta) {
//Se coloca una variable numerica para poder hacer las operaciones
  var numero = 0;
//Ingresar los datos, si tiene espacios o esta vacio y si no son numeros regresar a prompt
  tarjeta = prompt ('Ingresa un número de tarjeta');
    if (tarjeta === null || (isNaN(tarjeta) === true) ){
      alert('Ingrese un número de tarjeta válido');
      return isValidtarjeta(tarjeta);
      }
//Se van a iterar caracter numerico por caracter
  for (var j= 0; j< tarjeta.length; j++){
    if (isNaN(tarjeta.charAt(j)) === true)
    numero++
  }
  if (numero > 0){
    alert('El número de tarjeta contiene letras o carácteres especiales, ingrese un número de tarjeta válido.');
    return isValidtarjeta(tarjeta);
  }
  //Despues de validar si los digitos con correcto
  /*Se estara iterando numero a numero, con un array inverso, se estaran sumando y invirtiendo el array
  con los numeros pares*/
    var sum     = 0,
        alt     = false,
        i       = tarjeta.length-1,
        num;
//Si el numero de caracteres de la tarjeta proporcionada son menores a 13 o mayores a 19
//la tarjeta se regresa al prompt
    if (tarjeta.length < 13 || tarjeta.length > 19){
        alert('El número de tarjeta tiene que ser mayor a 13 y menor a 19 dígitos.');
      return isValidtarjeta(tarjeta);
    }
//Mientras los numeros sea mayo o igual a 0 se estara tomando cada caracter
    while (i >= 0){
//Se estaran tomando cada caracter numerico enteros ingresado en tarjeta
        num = parseInt(tarjeta.charAt(i), 10);
        //Valida que el número sea válido
        if (isNaN(num)){
            return false;
        }
        //Válida el bit true o false de imparidad
        if (alt) {
            num *= 2;
            if (num > 9){
                num = (num % 10) + 1;
            }
        }
        //Voltea el bit de paridad
        alt = !alt;
        //Agrega el número
        sum += num;
        //Continúa con el siguiente dígito
        i--;
    }
    //Determina si la tarjeta es válida
    if (sum % 10 === 0){
      return ('Tarjeta válida');
    }
      else{
      return ('Tarjeta inválida');
      }


}

isValidtarjeta();
document.getElementById('boldStuff2').innerHTML = userInput
