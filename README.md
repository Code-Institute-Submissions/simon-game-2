# The Simon Game

I'm a student at Code Institute and I've reached my second milestone project which was to create this game.

## What is it?

Simon is an electronic game of memory skill invented by Ralph H. Baer and Howard J. Morrison, with software programming by Lenny Cope.
The device creates a series of tones and lights and requires a user to repeat the sequence.
If the user succeeds, the series becomes progressively longer and more complex.
Once the user fails the game is over.

## User Stories

* As a player I want to play so I can click on the ,,New Game" button
* As a player I want to hear and see the notes to be memorized and those start playing after I clicked the ,,New Game" button.
* As a player I want to know when my turn is so there is an indicator for it, which is green when it's my turn and red when I have to listen to the played notes.
* As a player I want to know how good I did so there is score section what shows it to me.
* As a player I want to know when I failed so there is a "Game Over" screen what shows it to me.
* As a player I don't want to be able to play when it's not my turn, so it is.

## Features

Existing Features

    New Game - allows users to start a new game, by having them click on the ,,New Game" button (Green circle)
    Play - allows users to play the notes, by having them click on them.
    Score - allows users to see how many scores they reached, by having them see the ,,Score" (Grey rectangle with a number)
    Indicator - allows users to see when it's their turn to play notes, by having them see the ,,Your Turn" circle (Green or red circle in the center of the game)
    Game Over - allows users to see when they failed, by having them see the ,,Game Over" screen (Black screen with "Game Over" text)

## Features Left to Implement

    Top Score - To show to the players in all the games what was their maximum score.
    Time Left - To show to the players how may seconds left in the given round to chose the next note.

## Technologies Used

    Javascript
        P5JS libary - https://p5js.org/
            The project uses P5JS to create the whole game. 

## Testing

I tested the project on PC and mobile phone.
* PC: browser Mozilla Firefox, Microsoft Edge and Google Chrome.
* Mobile: Huawei P20
```
    New Game:
        Try to start a new game while the previous game's notes are under playing you are not able to do it
    Play Notes:
        Try to play notes while the mouse in not on them you are not able to do it
        Try to click on notes and playing them while the notes from memory are under playing you are not able to do it
```

I should mention I discovered a bug on Microsoft Edge when I'm resizing the windows the drawing of the game is poor, pixelated and notes and the inner circle are fading each other.
An other bigger bug is in Internet Explorer the whole project won't load in.

## Deployment

This project was created on [C9.IO](https://c9.io/) and was deployed to [GitHub](https://github.com/).

If you would like to run this code locally, you should download all the files and put them into the same folder,
then you should open the "index.html" file.

## Credits

### Media

    The sounds used in this project were obtained from [TimelessReader1](https://www.youtube.com/channel/UCWLXnsQdFoLTmsHOyG_Qwkw) on youtube.

### Acknowledgements

    I received inspiration for this project from Code Institute, from [David Shiffman](https://www.youtube.com/user/shiffman) on youtube and from [Wikipedia](https://en.wikipedia.org/wiki/Simon_(game)).
