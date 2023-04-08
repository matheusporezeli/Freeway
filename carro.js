//código do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 100, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 66;
let alturaCarro = 36;

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouTela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTela(xCarro) {
  return xCarro < -70;
}
