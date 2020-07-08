// Jihyeon Song
// Final Project
// CS099
// Spring 2020

class OptionsScreen {
  constructor() {
    this.Background = new Button(width / 3, height / 2 - 50, "Random Background");
    this.User = new Button(2 * width / 3, height / 2 - 50, "Random Sea Color");
    this.Music = new Button(width / 3, 3 * height / 4 - 50, "Change Music");
    this.Mainmenu = new Button(2 * width / 3, 3 * height / 4 - 50, "Main Menu");

  }

  update() {
    if (this.Background.DidClickButton()) {
      BackgroundR = random(255);
      BackgroundG = random(255);
      BackgroundB = random(255);
    } else if (this.User.DidClickButton()) {
      SeaColorR = random(255);
      SeaColorG = random(255);
      SeaColorB = random(255);
    } else if (this.Music.DidClickButton()) {
      playingmusic1.stop();
      playingmusic2.loop();
    } else if (this.Mainmenu.DidClickButton()) {
      CurrentScene = BASIC_SCREEN;
    }
  }

  draw() {

    fill(255);
    textSize(100);
    textFont(title);
    text("Options", width / 3 + 40, 130);

    textSize(20);
    textFont(menu);
    this.Background.DrawButton();
    this.User.DrawButton();

    textSize(25);
    this.Music.DrawButton();
    this.Mainmenu.DrawButton();

    noStroke();
    fill(SeaColorR, SeaColorG, SeaColorB);
    rect(2 * width / 3 - 7, height / 2 - 40, 80, 8)
  }

}