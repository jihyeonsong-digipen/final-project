// Jihyeon Song
// Final Project
// CS099
// Spring 2020

class GameOverScreen {
  constructor() {
    this.Play = new Button(width / 3, 3 * height / 4, "Try Again");
    this.Mainmenu = new Button(2 * width / 3, 3 * height / 4, "Main Menu");
  }

  update() {
    if (this.Play.DidClickButton()) {
      console.log("Play!");
      CurrentScene = PLAY_SCREEN;
    } else if (this.Mainmenu.DidClickButton()) {
      CurrentScene = BASIC_SCREEN;
    }
  
  }

  draw() {
    fill(200,0,0);
    textSize(70);
    textFont(story);
    text("Game Over", width / 3 - 60, 200);
    fill(255);
    textSize(45);
    text("Your fish was eaten... ", width / 3 - 110, 320);

    textSize(30);
    textFont(menu);
    textStyle(BOLD);
    this.Play.DrawButton();
    this.Mainmenu.DrawButton();
  }
}