# Meteords

[Live Link](https://kliewus.github.io/meteords/)

# MVPS

* Implement enemies (meteors).
* Keep track of typing speed (WPM), scoring, and lives system.

# Techologies
Vanilla Javascript for Game Logic, Webpack for bundling the JS files, and HTML Canvas to render the game.

# Gameplay
Meteors spawn continuously from the top of the screen outside of the canvas view.
Each meteor is randomly spawned based on the number of meteors destroyed.
As more meteors are destroyed, the spawn timer decreases by one second, with a cap at three seconds.

Each meteors has a word attached and upon typing the word correctly, the meteor is destroyed.
In the case of multiple meteors having the same word, the meteor closest to the ground will be deleted.

![Gameplay](https://i.imgur.com/BNUmkdO.jpg)

If the meteors hit the ground, the player loses a life. If all lives are depleted, the player loses and will be greeted with a game over message.

![Game Over](https://i.imgur.com/0PV8CMm.jpg)