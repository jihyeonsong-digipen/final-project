// Jihyeon Song
// Final Project
// CS099
// Spring 2020

class MainMenu {
  constructor() {
    this.Play = new Button(width / 3, height / 2, "Play");
    this.HowToPlay = new Button(2 * width / 3, height / 2, "How to play");
    this.Options = new Button(width / 3, 3 * height / 4, "Options");
    this.Credits = new Button(2 * width / 3, 3 * height / 4, "Credits");
  }


  update() {
    if (this.Play.DidClickButton()) {
      console.log("Play!");
      CurrentScene = PLAY_SCREEN;
    } else if (this.HowToPlay.DidClickButton()) {
      console.log("How To Play!");
      CurrentScene = HOWTOPLAY_SCREEN;
    } else if (this.Options.DidClickButton()) {
      console.log("Options!");
      CurrentScene = OPTIONS_SCREEN;
    } else if (this.Credits.DidClickButton()) {
      console.log("Credits!");
      CurrentScene = CREDITS_SCREEN;
    }
  }

  draw() {

    push();
    scale(0.5);
    image(backimage, 0, 0)
    pop();

    push();
    scale(0.2);
    image(sample, 3300, 900)
    image(sample, 100, 900)
    pop();

    push();
    fill(255);
    textSize(130);
    textStyle(BOLD);
    textFont(title);
    text("Raising Fish", 215, 150);
    pop();

    push();
    textSize(30);
    textStyle(BOLD);
    textFont(menu);
    this.Play.DrawButton();
    this.HowToPlay.DrawButton();
    this.Options.DrawButton();
    this.Credits.DrawButton();
    pop();
  }

}