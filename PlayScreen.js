// Jihyeon Song
// Final Project
// CS099
// Spring 2020

class PlayScreen {
  constructor() {
    this.Mainmenu = new Button(100, 25, "Main Menu");
    this.timer = 60;
  }

  update() {
    if (this.Mainmenu.DidClickButton()) {
      console.log("Main Menu!");
      CurrentScene = BASIC_SCREEN;
    }

    if (f.fishSize === 10) {
      console.log("Win!");
      CurrentScene = WIN_SCREEN;
      win.play();
    }

    this.timelimit();
  }

  timelimit() {
    if (this.timer < 0) {
      CurrentScene = GAMEOVER_SCREEN;
      console.log('Time Over!');
      this.timer = 60;
      lose.play();
    }

    if (frameCount % 60 == 0 && this.timer >= 0) {
      this.timer = this.timer - 1;
    }
  }

  background() {
    fill(SeaColorR, SeaColorG, SeaColorB);
    rect(0, 100, width, height - 100);
    ellipse(50, 100, 150, 80);
    ellipse(350, 100, 150, 80);
    ellipse(650, 100, 150, 80);

    fill(BackgroundR, BackgroundG, BackgroundB);
    ellipse(200, 100, 150, 80);
    ellipse(500, 100, 150, 80);
    ellipse(800, 100, 150, 80);

    let s = new seaweed();
    s.draw();

    for (let p of particles) {
      p.update();
      p.draw();
    }
  }

  draw() {

    for (let e of enemies) {
      e.enemyMove();
      e.draw();
    }

    f.x = mouseX;
    f.y = mouseY;
    f.draw();
    f.eyeMove();

    for (let i = enemies.length - 1; i >= 0; --i) {
      if (this.DidClickFish(enemies[i])) {
        enemies.splice(i, 1);

        if (f.fishSize >= enemies[i].fishSize) {
          f.fishSize++;
          eat.play();
          for (var j = 0; j < numParticles; j += 1) {
          particles.push(new particle(mouseX, mouseY, random(5, 10), random(0, TWO_PI)));}
        } 
        if (f.fishSize < enemies[i].fishSize) {
          CurrentScene = GAMEOVER_SCREEN;
          console.log('Game Over!');
          lose.play();
        }

      }

    }
    push();
    textSize(30);
    textFont(menu);
    this.Mainmenu.DrawArrow();
    pop();
  }

  DidClickFish(fish) {

    let d = dist(mouseX, mouseY, fish.x, fish.y);
    let r = 10 * fish.fishSize;
    return mouseIsPressed && d <= r;
  }

}