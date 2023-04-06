const distancia = 100; // distância entre Ribeirão Preto e Franca em km
const velocidadeCarro = 110; 
const velocidadeCaminhao = 80; 
const tempoPedagio = 5 / 60; // tempo em horas para o caminhão passar por cada pedágio

const tempoCarro = distancia / velocidadeCarro;

const tempoCaminhao = (distancia / velocidadeCaminhao) + (tempoPedagio * 2);

// se o tempo que o carro leva para chegar ao ponto de cruzamento for menor, então ele estará mais próximo de Ribeirão Preto

document.write('<br>-------Questão-4-------- </br>')
if (tempoCarro < tempoCaminhao) {
  document.write("O carro estará mais próximo de Ribeirão Preto.");
} else {
  document.write("O caminhão estará mais próximo de Ribeirão Preto.");
}
