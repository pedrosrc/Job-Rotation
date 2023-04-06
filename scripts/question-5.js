function inverter(str){
    
    var operador = '';

    for (var tamanho = str.length -1; tamanho >=0; tamanho--){
        operador += str[tamanho]
    }
    return operador;
}
document.write('</br>------Questão-5-------- </br>')

document.write(inverter("Hello World"))