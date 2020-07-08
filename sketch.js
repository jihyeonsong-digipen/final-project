// Jihyeon Song
// Final Project
// CS099
// Spring 2020

function preload() {
  playingmusic1 = loadSound('Sound/music1.mp3');
  playingmusic2 = loadSound('Sound/music2.mp3');
  lose = loadSound('Sound/gameover.wav');
  win = loadSound('Sound/clapping.wav');
  click = loadSound('Sound/click.wav');
  eat = loadSound('Sound/eating.mp3');

  backimage = loadImage('Image/sea.jpg');
  sample = loadImage('Image/fish.png');
  mouse = loadImage('Image/mouse.png');
  arrow = loadImage('Image/arrow.png');
  
  title = loadFont('Font/CROOKED.otf');
  menu = loadFont('Font/BOKEH.otf');
  story = loadFont('Font/I AM A PLAYER.otf');
}

let CurrentScene = BASIC_SCREEN;

let MainMenuScene;
let PlayScene;
let HowToPlayScene;
let OptionsScene;
let CreditsScene;
let GameOverScene;
let WinScene;

let BackgroundR = 148;
let BackgroundG = 171;
let BackgroundB = 199;
let SeaColorR = 173;
let SeaColorG = 216;
let SeaColorB = 230;

let f = new fish();
let enemies = [];

var particles = [];
var numParticles = 50;

function setup() {
  createCanvas(800, 600);
  MainMenuScene = new MainMenu();
  PlayScene = new PlayScreen();
  HowToPlayScene = new HowToPlayScreen();
  OptionsScene = new OptionsScreen();
  CreditsScene = new CreditsScreen();
  GameOverScene = new GameOverScreen();
  WinScene = new WinScreen();

  playingmusic1.loop();

  for (let i = 0; i <= 10; ++i) {
    let en = new fish();
    en.fishSize = int(random(10))
    en.x = random(width)
    en.y = random(height)
    enemies.push(en);
  }

}

function draw() {
  background(BackgroundR, BackgroundG, BackgroundB);

  noStroke();
  switch (CurrentScene) {
    case BASIC_SCREEN:
      MainMenuScene.update();
      MainMenuScene.draw();
      break;
    case PLAY_SCREEN:
      PlayScene.update();
      PlayScene.background();
      PlayScene.draw();
      break;
    case HOWTOPLAY_SCREEN:
      HowToPlayScene.update();
      HowToPlayScene.draw();
      break;
    case OPTIONS_SCREEN:
      OptionsScene.update();
      OptionsScene.draw();
      break;
    case CREDITS_SCREEN:
      CreditsScene.update();
      CreditsScene.draw();
      break;
    case GAMEOVER_SCREEN:
      GameOverScene.update();
      GameOverScene.draw();
      break;
    case WIN_SCREEN:
      WinScene.update();
      WinScene.draw();
      break;
  }

}