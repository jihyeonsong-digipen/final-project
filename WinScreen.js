// Jihyeon Song
// Final Project
// CS099
// Spring 2020

class WinScreen {
  constructor() {
    this.Mainmenu = new Button(400, 3 * height / 4, "Main Menu");
  }

  update() {
   if (this.Mainmenu.DidClickButton()) {
      CurrentScene = BASIC_SCREEN;
    }
  }

  draw() {
    fill(0,100,100);
    textSize(70);
    textFont(story);
    text("You win", width / 3 - 10, 200);
    fill(255);
    textSize(45);
    text("Your fish is the biggest!", width / 3 - 150, 320);

    textSize(30);
    textFont(menu);
    textStyle(BOLD);
    this.Mainmenu.DrawButton();
  }
}