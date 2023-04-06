let input2 = document.querySelector('#q2')
const array = [0,1];
let num1, num2 
for( let indice = 2; indice < 20; indice++){
        num1 = array[indice - 1]
        num2 = array[indice - 2]
        array.push(num1+num2)

}

    //No indice limitei para o 20 pois se trata de um sistema infinito, e para impressão isso pesaria muito. 
    const numberr = 4
    //Nessa const define o numero no qual gostaria eu verificasse se existia no Finabocci
    if(array.includes(numberr)){
        document.write('<br>-------Questão-2-------- </br>')
        document.write('O valor está no fibonacci'+ + array +'</br>')
    }else{
        document.write('<br>-------Questão-2-------- </br>')
        document.write('O valor não esta </br>' +  array)

    }
    




