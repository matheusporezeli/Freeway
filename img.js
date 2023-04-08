//imagens
let imagemEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

//sond
let somTrilha;
let somColisao;
let somPonto;

function preload(){
  imagemEstrada = loadImage("img/estrada.png");
  imagemAtor = loadImage("img/ator-1.png");
  imagemCarro1 = loadImage("img/carro-1.png");
  imagemCarro2 = loadImage("img/carro-2.png");
  imagemCarro3 = loadImage("img/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
  somTrilha = loadSound("sound/trilha.mp3");
  somColisao = loadSound("sound/colidiu.mp3");
  somPonto = loadSound("sound/pontos.wav");
}