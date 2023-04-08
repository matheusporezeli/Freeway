//ator
let xAtor = 250;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 25, 25);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeAndar()){
    yAtor += 5;
    }
  }
}

function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 20);
    if (colisao) {
      voltaAtor();
      somColisao.play();
      if (verificaPontos()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtor() {
  yAtor = 370;
  xAtor = 250;
}

function podeAndar(){
  return yAtor < 366;
}

//Pontos

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtor();
    somPonto.play();
  }
}

function verificaPontos(){
  return meusPontos > 0;
}


