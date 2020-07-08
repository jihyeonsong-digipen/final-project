// Jihyeon Song
// Final Project
// CS099
// Spring 2020

class CreditsScreen {
  constructor() {
    this.Mainmenu = new Button(width / 2, height - 50, "Main Menu");
  }

  update() {
    if (this.Mainmenu.DidClickButton()) {
      console.log("Main Menu!");
      CurrentScene = BASIC_SCREEN;
    }
  }

  draw() {
    fill(255);

    push();
    textSize(100);
    textFont(title);
    text("Credits", width / 3 + 40, 130);
    pop();

    textFont(menu);
    this.Mainmenu.DrawButton();

    textSize(30);
    text("CS099 Final Project", width / 3 + 15, height / 2 - 30);
    text("Made by Jihyeon Song", width / 3 + 5, height / 2 + 50);
    text("Thanks to Rudy Castan", width / 3, height / 2 + 130);
  }
}