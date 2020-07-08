# Programming Concepts Document

// Jihyeon Song

// Final Project

// CS099

// Spring 2020


### 1. Shapes

I learned many kinds of shapes that I could draw. There are rect(), square(), quad(), circle(), ellipse(), arc(), triangle(), line() and point() in two-dimensional drawing.
I was intersted in drawing part of an ellipse using arc(). I drew arc() with degrees or radians and it was great for making various shapes.
In addition, I could change location based on ellipseMode() and rectMode(). I think it is similar to translate(), but it is only demanded on ellipse and rect. And, I learned strokeJoin() and strokeCap(), too. We can use strokeJoin() for any shapes but strokeCap() is only for line.
Then, I also learned about vertex(). I could make a peculiar spaces with using beginShape(),endShape() and it.
I think shapes are very important becasue it is base of coding. 

I will use various shapes in my game "**Raising Fish** :fish:". But, I will use a lot of circle because of their googly eyes. And this is a small code snippet in my game.

	noStroke();
	fill(255);
	ellipse(this.eyesPos.x - this.eyesDistance, this.eyesPos.y, this.eyeballSize);
	ellipse(this.eyesPos.x + this.eyesDistance, this.eyesPos.y, this.eyeballSize);

	fill(0);
	ellipse(this.eyeballsPos.x - this.eyesDistance, this.eyeballsPos.y, this.eyeballSize * 0.6);
	ellipse(this.eyeballsPos.x + this.eyesDistance, this.eyeballsPos.y, this.eyeballSize * 0.6);


### 2. Colors

I learned RGB colors. The first parameter for red, the second parameter for green, and the third parameter for blue. There are one more parameter for transparency. We can blending colors with this parameter. It could also be set to ranges between 0 and 255. '0' means transparency 100 percent and '255' means transparency 0 percent. I could change shape's color with fill() and line's color with stroke(). Also, I could paint randomly color with using random(), map(), etc. If I use Loop(), it could be more colorful.

I think colorful visual is very important in game. Because I think colorful screens attract people's attention. Even a simple game will look more fun if you decorate it in various colors.

So, I will use various colors in my game "**Raising Fish** :fish:". And this is a small code snippet in my game.

	
	let BackgroundR = 148;
	let BackgroundG = 171;
	let BackgroundB = 199;

	function draw()
	{
	background(BackgroundR, BackgroundG, BackgroundB);
	}


### 3. Variables

I learned how to define variables. There are var, let and const for define method. But there are diffrent features among them. Var has a function scope. This means that the effective range of the var is within the function. And we can redefine it and reassign it. Unlike var, let and const were not allow to redefine. But, let can be reassign.
At first, each suitable situation was difficult to understand. But, it is useful because we can choose depending on the situation.

I will use variables to define game scenes. This is a small code snippet in my game "**Raising Fish** :fish:".

	let MainMenuScene;
	let PlayScene;
	let HowToPlayScene;
	let OptionsScene;
	let CreditsScene;
	let GameOverScene;
	let WinScene;


### 4. Conditional Statements

I learned many different Conditional Statements. First, if() statement is executed when the conditions contained in () are true. And else() statement can be used when the condition is false. However, it is used behind if() statement and it cannot be used alone. Third, if else() statement is also use with if() statement but it have a diffrent thing. I will explain with code.
		
		if (condition 1) {
		//It will be executed when the condition 1 is true.
		} else if (condition 2) {
		//It will be executed when the condition 1 is false and condition 2 is true.
		} else {
		//It will be executed when the condition 1 and condition 2 are false.
		}

Finally, there are switch statement. It is useful when there are many conditions. And if you don't use 'break', it will be all executed, so be careful.

Of these, I will use 'switch()' to change game scenes. This is a small code snippet in my game "**Raising Fish** :fish:".

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


### 5. Loops

I learned two kinds of Loops in Javascript. There are while() and for(). To explain it in detail, for loop is a repeat of the set number. On the other hand, while loop repeats while the conditions are met. So I have been using for() more often because while() can be an infinite loop.

I will use nested loop to remove other fishes and increase the size of user fish. This is a small code snippet in my game "**Raising Fish** :fish:".

	for (let i = enemies.length - 1; i >= 0; --i) {
      if (this.DidClickFish(enemies[i])) {
        enemies.splice(i, 1);
        if (f.fishSize >= enemies[i].fishSize) {
          f.fishSize++;
          eat.play();
          for (var j = 0; j < numParticles; j += 1) {
          particles.push(new particle(mouseX, mouseY, random(5, 10), random(0, TWO_PI)));
	}
	} 
	}
	}


### 6. Functions

I learned that function() is binding codes together. So, I think function() is very useful to draw complex things like animals. his is because if you draw many animals individually and then change some variables, it can make an error. But when we use a function, everything that corresponds to a variable changes, so there is no problem. Also, we can set function name that we want. We can use number, alphbet, _ and $ same as a variable's name.

I will use many functions in classes. This is a small code snippet in my game "**Raising Fish** :fish:".

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
	    fill(255);
	    textSize(100);
	    textStyle(BOLD);
	    textFont(title);
	    text("Raising Fish", 140, 150);
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



### 7. Classes

I learned class is an encapsulation. If you use class, you can be easily implemented. Before I learned this, I usually use only function(). But we can use function() in classes without defining function(). We usually use constructor(), update() and draw()./

So, I will use Classes with setting game scenes. This is a small code snippet in my game "**Raising Fish** :fish:".

    class MainMenu {
    }
    class PlayScreen {
    }
    class HowToPlayScreen {
    }
    class OptionsScreen {
    }
    class CreditsScreen {
    }
    class GameOverScreen {
    }
    class WinScreen {
    }


### 8. Arrays

I learned arrays most recently. Array is list of variables. We can make a list with using []. We can also put array in array. We can use array with declaring and setting values to each element. It is very useful to use too many variables such as making game.

I will use arrays to draw particles for visual effect. This is a small code snippet in my game "**Raising Fish** :fish:".

	var particles = [];
	var numParticles = 100;

	for (let p of particles) {
   	 p.update();
   	 p.draw();
	  }
	}

