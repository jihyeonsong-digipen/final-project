// Jihyeon Song
// Final Project
// CS099
// Spring 2020

class HowToPlayScreen {
  constructor() {
    this.Mainmenu = new Button(width / 2, height - 50, "Main Menu");
    this.Play = new Button(width / 2, height - 150, "Play Now!");
  }

  update() {
    if (this.Mainmenu.DidClickButton()) {
      console.log("Main Menu!");
      CurrentScene = BASIC_SCREEN;
    } else if (this.Play.DidClickButton()) {
      console.log("Play!");
      CurrentScene = PLAY_SCREEN;
    }
  }

  draw() {
    
    push();
    scale(0.2);
    image(mouse, 2800, 1350)
    pop();
    
    fill(255);
    push();
    textSize(100);
    textFont(title);
    text("How to Play", 250, 130);
    pop();
    
    push();
    textSize(30);
    textFont(menu);
    this.Play.DrawButton();
    this.Mainmenu.DrawButton();
    pop();
    
    fill(0);
    textSize(18);
    text("Growing your fish in the sea! Your fish get bigger as it eat more. You can eat fishes smaller or the same size as your fish. Each fish of the same size has the same color. Then, you should avoid fishes bigger than your fish. Don't click on a fish bigger than your fish.", 120, 180, 600);

    fill(255);
    textSize(25);
    text("Moving:  mouse move", 280, 320, 600);
    text("Eating:  mouse click", 280, 360, 600);
  }

}