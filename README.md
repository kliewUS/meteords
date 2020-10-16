# Meteords

[Live Link](https://kliewus.github.io/meteords/)

# MVPS

* Implement enemies (meteors).
* Keep track of typing speed (WPM), scoring, and lives system.

# Techologies
Vanilla Javascript for Game Logic, Webpack for bundling the JS files, and HTML Canvas to render the game.

# Gameplay

Upon entering the game page, the user is greeting with an intro screen. The user can then click on the game screen to start the game.

![Intro](https://gist.githubusercontent.com/kliewUS/049d8cfda828ab0fe5a9caaf7270c6aa/raw/6d0136341e93a864f13d5ba4fa5128933b2f846f/61gsj0IAzt.jpg)

Meteors will spawn continuously from the top of the screen outside of the canvas view.
As more meteors are destroyed, the spawn timer will decrease and the speed of the meteors will increase, gradually increasing the diffculty of the game.

Each meteors has a word attached and upon typing the word correctly, the meteor is destroyed.
In the case of multiple meteors having the same word, the meteor closest to the ground will be deleted.

![Gameplay](https://gist.githubusercontent.com/kliewUS/049d8cfda828ab0fe5a9caaf7270c6aa/raw/6d0136341e93a864f13d5ba4fa5128933b2f846f/firefox_4I4Zlj62GB.jpg)

The user has three lives. If the meteors hit the ground, the user loses a life. 

Upon losing all lives, the user will be greeted with a game over screen, displaying the user's score and WPM and given the option to play again.
If the user has reached a new record score and/or WPM, the user will be notified in the game over screen.

![Game Over](https://gist.githubusercontent.com/kliewUS/049d8cfda828ab0fe5a9caaf7270c6aa/raw/6d0136341e93a864f13d5ba4fa5128933b2f846f/firefox_pHUI8slXTE.jpg)