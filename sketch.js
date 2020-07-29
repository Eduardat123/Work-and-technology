/* link do video explicativo:https://youtu.be/HGPHEy8OEsg */

let andei=[];
var b=0;
let img;
let educador;
let myfoto;
let chão;
let chão2;
let chão3;
let chão4;
let chão5;
let chão6;
let chão7;
let agri;
let mec;
let pp;
let balão;
var tela = 1;
var x = 200;
var x4= 18;
var x5= 540;
var y = 110;
var y2 = 180;
var y3 = 250;
var y4=  365;
var y5= 360;
var largura = 200;
var largura4= 60;
var altura = 40;
var altura4 = 30;
var paraFrames=0;
var contFrame=0;
var anima;
let pato;
let floresta;
let pet;
let prof;

function preload() {
  img = loadImage('istockphoto-485294452-612x612.jpg');
  floresta=loadImage('OIP (1).jpg');
  pato= loadImage('ave-suja-petroleo.jpg');
  pp= loadImage('Cowboy4_idle without gun_0.png');
  for(i=0;i<4;i++){
    andei[i]=loadImage('Cowboy4_walk without gun_'+i+'.png');
  }
  chão=loadImage('jungle_pack_05.png');
  chão2=loadImage('jungle_pack_05.png');
  chão3=loadImage('jungle_pack_05.png');
  chão4=loadImage('jungle_pack_05.png');
  chão5=loadImage('jungle_pack_05.png');
  chão6=loadImage('jungle_pack_05.png');
  chão7=loadImage('jungle_pack_05.png');
  myfoto=loadImage('29a84fa8-5de7-4343-bbd6-ee873cf8bdd9.jpg');
  balão=loadImage('call-out-box-clipart-4.jpg');
  agri= loadImage('comissao-europeia-lanca-apoios-para-jovens-agricultores-1.jpg');
  mec=loadImage('70A_Marcos_Vergueiro_SecomMT.jpg');
  educador=loadImage('c36bfcd9-7fde-4ef8-9704-acbf2133ff1c.jpg');
  prof=loadImage('OIP (2).jpg');
  pet=loadImage('Petroleo.jpg');
}

function setup() {
  frameRate(30);
  createCanvas(612, 400);
}

function draw() {
  image(img, 0, 0);
  //Menu 
  textStyle(BOLD);
  textSize(30);
  textFont('Cambria');
  if (tela === 1) {

    //Iniciar o jogo
    stroke(20);
    text('Work and technology', 40,60);
    
     if (mouseX > x && mouseX < x + largura && mouseY > y && mouseY < y + altura) {
      stroke(10);
      fill(300);
      rect(x, y, largura, altura);
       if (mouseIsPressed) {
        tela = 2;
      }
     }
      fill(20);
      noStroke();
      text('Iniciar', 250, 140);

      //Informações
      if (mouseX > x && mouseX < x + largura && mouseY > y2 && mouseY < y2 + altura) {
        stroke(10);
        fill(300);
        rect(x, y2, largura, altura);
        if (mouseIsPressed) {
          tela = 3
        }
      }
      fill(20);
      noStroke();
      text('Informações', 220, 210);

      //Créditos
      if (mouseX > x && mouseX < x + largura && mouseY > y3 && mouseY < y3 + altura) {
        stroke(10);
        fill(300);
        rect(x, y3, largura, altura);
        if (mouseIsPressed) {
          tela = 4
        }
      }
      fill(20);
      noStroke();
      text('Créditos', 240, 280);
  }
  // vamos aprender ??
  if(tela===2){
  background(250);
    image(chão,0,300);
    image(chão2,90,300);
    image(chão3,180,300);
    image(chão4,270,300);
    image(chão5,360,300);
    image(chão6,450,300);
    image(chão7,490,300);
    image(pp,30, 250);
    image(balão, 20, 20, 450, 240);
  textStyle(BOLD);
  textSize(20);
  textFont('Cambria');
   // explicando
      fill(20);
      noStroke();
      text('Olá, você já pensou sobre quantas pessoas \n existem no mundo? E sobre a quantidade \n de alimentos que precisam ser produzidos \n para alimentar todas essas pessoas?', 45, 80);
    //voltar para o menu
    if (mouseX > x4 && mouseX < x4 + largura4 && mouseY > y4 && mouseY < y4 + altura4) {
      stroke(10);
      fill(300);
      rect(x4, y4, largura4, altura4);
       if (mouseIsPressed) {
        tela = 1;
      }
     }
      fill(20);
      noStroke();
      text('voltar', 20, 390);
    //pular
    if (mouseX > x5 && mouseX < x5 + largura4 && mouseY > y5 && mouseY < y5 + altura4) {
      stroke(10);
      fill(300);
      rect(x5, y5, largura4, altura4);
       if (mouseIsPressed) {
        tela = 5;
      }}
      fill(20);
      noStroke();
      text('  >>>  ', 545, 380);
  }
  // sobre o jogo
  if(tela===3){
   background('#009900');
    image(img,0,0);
   textStyle(BOLD);
   textSize(20);
   textFont('Cambria');
   fill(10);
   stroke(20);
   text('O jogo foi criado com base na matéria de geografia com o', 40,40);
   text('assunto do 5º ano do ensino fundamental II, em que tecnologia \n e trabalho formam os seguintes setores: primário, secundário \n e terciário; com o intuito de que o aluno possa aprender como \n cada fase do jogo quais são os setores e seus efeitos no meio \n ambiente.\n Habilidade: (EF05GE05) Identificar e comparar as mudanças \n dos tipos de trabalho e desenvolvimento tecnológico na \n agropecuária, na indústria, no comércio e nos serviços.', 20, 60);
    // voltar para o menu
    if (mouseX > x4 && mouseX < x4 + largura4 && mouseY > y4 && mouseY < y4 + altura4) {
      stroke(10);
      fill(300);
      rect(x4, y4, largura4, altura4);
       if (mouseIsPressed) {
        tela = 1;
      }
     }
      fill(20);
      noStroke();
      text('voltar', 20, 390);
    
    
  }
  // créditos
  if(tela===4){
    image(img, 0, 0);
    image(myfoto, 100, 50, 200, 300);
    image(educador, 350, 50, 200, 300);
    textStyle(BOLD);
    textSize(20);
    textFont('Cambria');
    stroke(10);
    fill(300);
    rect(90,350, 220,50);
    rect(340,350, 220,50);
    fill(20);
    noStroke();
    text('Programadora: \n Eduarda Ticiana', 100, 370);
    text('Docente: \n Selma Moreira', 345, 370);
    // voltar para o menu
    if (mouseX > x4 && mouseX < x4 + largura4 && mouseY > y4 && mouseY < y4 + altura4) {
      stroke(10);
      fill(300);
      rect(x4, y4, largura4, altura4);
       if (mouseIsPressed) {
        tela = 1;
      }
     }
      fill(20);
      noStroke();
      text('voltar', 20, 390);
    
    
  }
  //primeira questão
  if(tela===5){
    background(250);
    image(chão,0,300);
    image(chão2,90,300);
    image(chão3,180,300);
    image(chão4,270,300);
    image(chão5,360,300);
    image(chão6,450,300);
    image(chão7,490,300);
    textStyle(BOLD);
    textSize(18);
    textFont('Cambria');
    rect(100, 5, 430,150);
    fill(10);
    stroke(20);
    text('Há cerca de 10 mil anos atrás, as pessoas passaram \n a morar em regiões onde puderam plantar seus \n alimentos, processo chamado sedentarismo, o que \n deu início ao que chamamos de agricultura, clique \n  na imagem que monstra a agricultura tradicional?', 105,30);
      fill(300);
      noStroke();
    image(agri,60, 220, 200, 150);
    image(mec, 350, 220, 200, 150);
    if (mouseX > 60 && mouseX < 260 && mouseY > 220 && mouseY < 360) {
      noStroke();
      fill(300);
      image(agri, 60,220,200,150);      
    if (mouseIsPressed) {
        tela = 6;
      }}
    if (mouseX > 350 && mouseX < 550 && mouseY > 220 && mouseY < 500) {
      stroke(10);
      fill(300);
      image(mec, 350,220,200,150);
      fill(300);
      noStroke();
    if(mouseIsPressed){
      tela=7;
    }}

  }
  //você acertou a primeira questão!
  if(tela===6){
  background(250);
    image(chão,0,300);
    image(chão2,90,300);
    image(chão3,180,300);
    image(chão4,270,300);
    image(chão5,360,300);
    image(chão6,450,300);
    image(chão7,490,300);
    image(pp,30, 250);
    image(balão, 20, 20, 500, 240);
  textStyle(BOLD);
  textSize(60);
  textFont('Cambria');
      fill(20);
      noStroke();
      text(' Certa resposta !', 40, 130);
    if (mouseX > x5 && mouseX < x5 + largura4 && mouseY > y5 && mouseY < y5 + altura4) {
      stroke(10);
      fill(300);
      rect(x5, y5, largura4, altura4);
       if (mouseIsPressed) {
        tela = 9;
      }
     }
      textSize(20);
      fill(20);
      noStroke();
      text('  >>>  ', 545, 380);
    
  }
  //explicação breve sobre questão 1
   if(tela===7){
  background(250);
    image(chão,0,300);
    image(chão2,90,300);
    image(chão3,180,300);
    image(chão4,270,300);
    image(chão5,360,300);
    image(chão6,450,300);
    image(chão7,490,300);
    image(pp,30, 250);
    image(balão, 20, 20, 500, 240);
  textStyle(BOLD);
  textSize(20);
  textFont('Cambria');
   // correção!!
      fill(20);
      noStroke();
      text(' Resposta errada ! A agricultura tradicional é \n mais manual e a agricultura mecanizada utiliza \n tecnologias para aumentar a produção, se \n conseguiu entender aperte aqui, não conseguiu? \n então aperte aqui. ', 45, 70);
     if (mouseX > 170 && mouseX < 230 && mouseY > 155 && mouseY < 175) {
      stroke(10);
      fill(300);
      rect(170,155 , 50, 20);
       if (mouseIsPressed) {
        tela = 10;
      }
     fill(10);
     text('aqui', 170, 170);
     stroke(250);
     fill(300);}
     if (mouseX > 300 && mouseX < 350 && mouseY > 130 && mouseY < 150) {
      stroke(10);
      fill(300);
      rect(300,130 , 50, 20);
       if (mouseIsPressed) {
        tela = 9;
       }
     fill(10);
     text('aqui', 300, 145);}
     
    
    
 }
  //você acertou a segunda questão !
  if(tela===8){ 
    background(250);
    image(chão,0,300);
    image(chão2,90,300);
    image(chão3,180,300);
    image(chão4,270,300);
    image(chão5,360,300);
    image(chão6,450,300);
    image(chão7,490,300);
    image(pp,30, 250);
    image(balão, 20, 20, 500, 240);
  textStyle(BOLD);
  textSize(60);
  textFont('Cambria');
      fill(20);
      noStroke();
      text(' Certa resposta !', 40, 130);
    if (mouseX > x5 && mouseX < x5 + largura4 && mouseY > y5 && mouseY < y5 + altura4) {
      stroke(10);
      fill(300);
      rect(x5, y5, largura4, altura4);
       if (mouseIsPressed) {
        tela = 12;
      }
     }
      textSize(20);
      fill(20);
      noStroke();
      text('  >>>  ', 545, 380);
 
  }
  //segunda questão
  if(tela===9){
   background(250);
    image(chão,0,300);
    image(chão2,90,300);
    image(chão3,180,300);
    image(chão4,270,300);
    image(chão5,360,300);
    image(chão6,450,300);
    image(chão7,490,300);
    textStyle(BOLD);
    textSize(18);
    textFont('Cambria');
    rect(100, 5, 430,150);
    fill(300);
    stroke(10);
    text('O setor primário consiste em matéria-prima, \n  é o estágio em que se dá a produção a partir dos \n recursos naturais existentes para exploração, \n dito isto quais atividades fazem  \n parte desse setor?', 105,30);
      fill(300);
      noStroke();
    if (mouseX > 60 && mouseX < 260 && mouseY > 220 && mouseY < 360) {
      rect(60,220,200,150);
      fill(300);
      stroke(10); 
      if (mouseIsPressed) {tela = 8 }}
      rect(60,220,200,150);
      noStroke();
      textSize(30);
      fill(10);
      text('Agricultura; \n Pecuária; \n Extravismo.', 70, 260)
     
      fill(300);
      noStroke(0);
    if (mouseX > 350 && mouseX < 550 && mouseY > 220 && mouseY < 370) {
      rect(350,220,200,150);
      fill(300);
      stroke(10); 
      if (mouseIsPressed) {tela = 11}}
      rect(350,220,200,150);
      noStroke();
      textSize(30);
      fill(10);
      text('Industrias e \n Construção  \n civil.', 360, 260)
  }
  //explicando melhor!!
  if(tela===10){
    background(250);
    image(chão,0,300);
    image(chão2,90,300);
    image(chão3,180,300);
    image(chão4,270,300);
    image(chão5,360,300);
    image(chão6,450,300);
    image(chão7,490,300);
    image(pp,30, 250);
    image(balão, 20, 20, 500, 240);
  textStyle(BOLD);
  textSize(20);
  textFont('Cambria');
   // correção!!
      fill(20);
      noStroke();
      text(' O setor primário consiste em atividades que se \n dedicam a extração de recursos naturais e à \n obtenção de alimentos e a matérias primas; \n como exemplo, a pesca; a caça; a mineração e \n entre outras atividades. ', 45, 70);
     if (mouseX > x5 && mouseX < x5 + largura4 && mouseY > y5 && mouseY < y5 + altura4) {
      stroke(10);
      fill(300);
      rect(x5, y5, largura4, altura4);
       if (mouseIsPressed) {
        tela = 9;
      }
     }
      textSize(20);
      fill(20);
      noStroke();
      text('  >>>  ', 545, 380);
    
  }
  //explicando segunda questão
  if(tela===11){
    background(250);
    image(chão,0,300);
    image(chão2,90,300);
    image(chão3,180,300);
    image(chão4,270,300);
    image(chão5,360,300);
    image(chão6,450,300);
    image(chão7,490,300);
    image(pp,30, 250);
    image(balão, 20, 20, 500, 240);
  textStyle(BOLD);
  textSize(20);
  textFont('Cambria');
   // correção!!
      fill(20);
      noStroke();
      text('Resposta errada ! O setor primario fornece \n matéria prima para o setor secundário que é o \n setor das industrias, simplificando: \n Setor primário -> matéria prima \n Setor secundário -> industrias', 50, 70);
     if (mouseX > x5 && mouseX < x5 + largura4 && mouseY > y5 && mouseY < y5 + altura4) {
      stroke(10);
      fill(300);
      rect(x5, y5, largura4, altura4);
       if (mouseIsPressed) {
        tela = 12;
      }
     }
      textSize(20);
      fill(20);
      noStroke();
      text('  >>>  ', 545, 380);}
  // terceira questão
  if(tela===12){
     background(250);
    image(chão,0,300);
    image(chão2,90,300);
    image(chão3,180,300);
    image(chão4,270,300);
    image(chão5,360,300);
    image(chão6,450,300);
    image(chão7,490,300);
    textStyle(BOLD);
    textSize(30);
    textFont('Cambria');
    rect(100, 5, 430,150);
    fill(300);
    stroke(200);
    text('Em que consiste \n o setor secundário?', 140,60);
    fill(300);
    noStroke();
    if (mouseX > 60 && mouseX < 260 && mouseY > 220 && mouseY < 360) {
      rect(60,220,200,150);
      fill(300);
      stroke(10); 
      if (mouseIsPressed) {tela = 13 }}
      rect(60,220,200,150);
      noStroke();
      textSize(30);
      fill(10);
      text('plantações \n e pesca', 80, 280)
     
      fill(300);
      noStroke(0);
    if (mouseX > 350 && mouseX < 550 && mouseY > 220 && mouseY < 370) {
      rect(350,220,200,150);
      fill(300);
      stroke(10); 
      if (mouseIsPressed) {tela = 14}}
      rect(350,220,200,150);
      noStroke();
      textSize(22);
      fill(10);
      text('Transformação \n da matéria prima \n em produtos \n industrializados', 360, 260)
  }
  //explicando terceira questão 
  if(tela===13){
    background(250);
    image(chão,0,300);
    image(chão2,90,300);
    image(chão3,180,300);
    image(chão4,270,300);
    image(chão5,360,300);
    image(chão6,450,300);
    image(chão7,490,300);
    image(pp,30, 250);
    image(balão, 20, 20, 550, 240);
  textStyle(BOLD);
  textSize(20);
  textFont('Cambria');
   // correção!!
      fill(20);
      noStroke();
      text('Resposta errada ! O setor secundário transforma \n a matéria prima em produtos, como exemplo, o ferro \n que pode ser transformado em  máquinas, \n automóveis,eletrônicos ou o petróleo que pode ser \n transformado em plástico ', 50, 70);
     if (mouseX > x5 && mouseX < x5 + largura4 && mouseY > y5 && mouseY < y5 + altura4) {
      stroke(10);
      fill(300);
      rect(x5, y5, largura4, altura4);
       if (mouseIsPressed) {
        tela = 15;
      }
     }
      textSize(20);
      fill(20);
      noStroke();
      text('  >>>  ', 545, 380);}
  //acertou a terceira questão
  if(tela===14){
  background(250);
    image(chão,0,300);
    image(chão2,90,300);
    image(chão3,180,300);
    image(chão4,270,300);
    image(chão5,360,300);
    image(chão6,450,300);
    image(chão7,490,300);
    image(pp,30, 250);
    image(balão, 20, 20, 500, 240);
  textStyle(BOLD);
  textSize(60);
  textFont('Cambria');
      fill(20);
      noStroke();
      text(' Certa resposta !', 40, 130);
    if (mouseX > x5 && mouseX < x5 + largura4 && mouseY > y5 && mouseY < y5 + altura4) {
      stroke(10);
      fill(300);
      rect(x5, y5, largura4, altura4);
       if (mouseIsPressed) {
        tela = 15;
      }
     }
      textSize(20);
      fill(20);
      noStroke();
      text('  >>>  ', 545, 380);}
  //impacto ambiental da industria 
  if(tela===15){
    background(250);
    image(chão,0,300);
    image(chão2,90,300);
    image(chão3,180,300);
    image(chão4,270,300);
    image(chão5,360,300);
    image(chão6,450,300);
    image(chão7,490,300);
    textStyle(BOLD);
    textSize(18);
    textFont('Cambria');
    rect(100, 5, 430,150);
    fill(10);
    stroke(10);
    text('O setor secundário é um setor de considerável \n riqueza e base para o desenvolvimento econômico \n dos países, todavia, é também o responsável pela \n maior parte da poluição e degradação ambiental \n do Planeta, qual imagem abaixo demonstra isso?', 105,30);
   fill(300);
      noStroke();
    image(floresta,60, 220, 200, 150);
    image(pato, 350, 220, 200, 150);
    if (mouseX > 60 && mouseX < 260 && mouseY > 220 && mouseY < 360) {
      noStroke();
      fill(300);
      image(floresta,60,220,200,150);      
    if (mouseIsPressed) {
        tela = 16;
      }}
    if (mouseX > 350 && mouseX < 550 && mouseY > 220 && mouseY < 500) {
      stroke(10);
      fill(300);
      image(pato, 350,220,200,150);
      fill(300);
      noStroke();
    if(mouseIsPressed){
      tela=17;
    }}
  }
    // você acertou a questão 4
    if(tela===17){
      background(250);
    image(chão,0,300);
    image(chão2,90,300);
    image(chão3,180,300);
    image(chão4,270,300);
    image(chão5,360,300);
    image(chão6,450,300);
    image(chão7,490,300);
    image(pp,30, 250);
    image(balão, 20, 20, 500, 240);
  textStyle(BOLD);
  textSize(60);
  textFont('Cambria');
      fill(20);
      noStroke();
      text(' Certa resposta !', 40, 130);
      if (mouseX > x5 && mouseX < x5 + largura4 && mouseY > y5 && mouseY < y5 + altura4) {
      stroke(10);
      fill(300);
      rect(x5, y5, largura4, altura4);
       if (mouseIsPressed) {
        tela = 18;
      }
     }
      textSize(20);
      fill(20);
      noStroke();
      text('  >>>  ', 545, 380);}
  //você errou a questão 4
  if(tela===16){ 
    background(250);
    image(chão,0,300);
    image(chão2,90,300);
    image(chão3,180,300);
    image(chão4,270,300);
    image(chão5,360,300);
    image(chão6,450,300);
    image(chão7,490,300);
    image(pp,30, 250);
    image(balão, 20, 20, 550, 240);
  textStyle(BOLD);
  textSize(20);
  textFont('Cambria');
   // correção!!
      fill(20);
      noStroke();
      text('Resposta errada ! A poluição é a basicamente a \n degradação do mundo, o setor secundário é um setor \n transformador e para isso foi necessário a criação de \n industrias , desmatamentos e uma série de fatores \n que influenciam na extinção de muitas espécies.', 50, 70);
     if (mouseX > x5 && mouseX < x5 + largura4 && mouseY > y5 && mouseY < y5 + altura4) {
      stroke(10);
      fill(300);
      rect(x5, y5, largura4, altura4);
       if (mouseIsPressed) {
        tela = 18;
      }
     }
      textSize(20);
      fill(20);
      noStroke();
      text('  >>>  ', 545, 380);}
  //questão 5
  if(tela===18){
      background(250);
    image(chão,0,300);
    image(chão2,90,300);
    image(chão3,180,300);
    image(chão4,270,300);
    image(chão5,360,300);
    image(chão6,450,300);
    image(chão7,490,300);
    textStyle(BOLD);
    textSize(18);
    textFont('Cambria');
    rect(100, 5, 500,120);
    fill(10);
    stroke(10);
    text('Aprendemos que o setor secundário é transformador, \n mas e setor terciário? o que ? O setor terciário é definido \n como o setor de comércios e prestações de serviços, qual \n imagem abaixo exemplica isso?', 105,30);
      fill(300);
      noStroke();
    image(pet,60, 220, 200, 150);
    image(prof, 350, 220, 200, 150);
    if (mouseX > 60 && mouseX < 260 && mouseY > 220 && mouseY < 360) {
      noStroke();
      fill(300);
      image(pet, 60,220,200,150);      
    if (mouseIsPressed) {
        tela = 19;
      }}
    if (mouseX > 350 && mouseX < 550 && mouseY > 220 && mouseY < 500) {
      stroke(10);
      fill(300);
      image(prof, 350,220,200,150);
      fill(300);
      noStroke();
    if(mouseIsPressed){
      tela=20;
    }}
  }
  // errou a questão 5
  if(tela===19){
     background(250);
    image(chão,0,300);
    image(chão2,90,300);
    image(chão3,180,300);
    image(chão4,270,300);
    image(chão5,360,300);
    image(chão6,450,300);
    image(chão7,490,300);
    image(pp,30, 250);
    image(balão, 20, 20, 550, 240);
  textStyle(BOLD);
  textSize(20);
  textFont('Cambria');
   // correção!!
      fill(20);
      noStroke();
      text('Resposta errada ! O setor terciário é o setor do \n comércio em geral, da venda de benefícios como \n educação, saúde segurança, transporte, da prestação \n de serviços bancários e turísticos, das empresas de \n telecomunicações.', 50, 70);
     if (mouseX > x5 && mouseX < x5 + largura4 && mouseY > y5 && mouseY < y5 + altura4) {
      stroke(10);
      fill(300);
      rect(x5, y5, largura4, altura4);
       if (mouseIsPressed) {
        tela = 21;
      }
     }
      textSize(20);
      fill(20);
      noStroke();
      text('  >>>  ', 545, 380);}
  //acertou a questão 5
  if(tela===20){
    background(250);
    image(chão,0,300);
    image(chão2,90,300);
    image(chão3,180,300);
    image(chão4,270,300);
    image(chão5,360,300);
    image(chão6,450,300);
    image(chão7,490,300);
    image(pp,30, 250);
    image(balão, 20, 20, 500, 240);
  textStyle(BOLD);
  textSize(60);
  textFont('Cambria');
      fill(20);
      noStroke();
      text(' Certa resposta !', 40, 130);
    if (mouseX > x5 && mouseX < x5 + largura4 && mouseY > y5 && mouseY < y5 + altura4) {
      stroke(10);
      fill(300);
      rect(x5, y5, largura4, altura4);
       if (mouseIsPressed) {
        tela = 21;
      }
     }
      textSize(20);
      fill(20);
      noStroke();
      text('  >>>  ', 545, 380);}
  if(tela===21){
  image(img,0,0);
  textStyle(BOLD);
  textSize(70);
  textFont('Cambria');
   // FIM!!
      fill(20);
      noStroke();
      text('FIM !', 220, 220);
     if (mouseX > x5 && mouseX < x5 + largura4 && mouseY > y5 && mouseY < y5 + altura4) {
      stroke(10);
      fill(300);
      rect(x5, y5, largura4, altura4);}
  }}
