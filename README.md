# **Wordle**
Wordle is a web-based word game created and developed by the software engineer Josh Wardle. It is owned and published by The New York Times Company since 2022. You can check out and play the original game here:

[Original Wordle - The New York Times](https://www.nytimes.com/games/wordle/index.html)

### Gameplay
The player has six attempts to guess a five-letter word, with feedback given for each guess in the form of colored tiles indicating when letters match or occupy the correct position. The player wins, if all five letters were guessed correctly. If the player does not guess all five letters correctly within the six tries, the game will be lost. In this case the searched word will be revealed and the player does not get any points. 

### How to play
To play the game simply type on your `keyboard` or use the keyboard displayed in the browser to enter a letter.
You can type up to 5 letters and sumbit your answer by pressing `enter` on your keyboard. 
Typos or any spelling mistakes can be corrected by pressing `backspace`. Note: Once submitted, you cannot go back and change your answer!
After every guess, each letter is marked as either green, yellow or gray: 
- green indicates that letter is correct and in the correct position
- yellow means it is in the answer but not in the right position
- gray indicates it is not in the answer at all.

Example:

![image info](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Wordle_196_example.svg/311px-Wordle_196_example.svg.png)

*Source: [Game #196 complete in 4 guesses - Wikipedia](https://en.wikipedia.org/wiki/File:Wordle_196_example.svg)*

### Project-Documentation (german)
[Projektdokumentation](docs/Projektdokumentation.pdf)

### Database for german words
> Source: [OpenThesaurus](https://www.openthesaurus.de/)

- Total amount of words: **193.223**
- words with length of 5: **4.702**
- unique words with length of 5: **2.734**

Amount of words after cleanup: **2.412**

cleanup means:
- changing characters like: "ä, ö, ü, ß" to: "ae, oe, ue, ss"
- removing special character like: ".", "-", "!", "?"
- removing words, which contains multiple words like: "zu je", "so so"
- removing abbreviations like: "ADOER" (Anstalt des öffentlichen Rechts), 
- removing slang & english words that are uncommon: "AFAIK" (as far as i know)
- removing names like: "Adele", "VW AG"
- removing words with numbers like: "AMD64", "AK-47"

I created a second wordlist with potential solution-words. This wordlist contains 808 potential solution words.

word descriptions are mostly taken from here:
> Source: [Digitales Wörterbuch der deutschen Sprache](https://www.dwds.de/)

### Credit
[Josh Wardle](https://powerlanguage.co.uk/)

[OpenThesaurus](https://www.openthesaurus.de/)


## Icons

[App-icon](https://icon-icons.com/de/symbol/grid-x/184932)
[Button-icons](https://fontawesome.com/icons)


#### Bonus information about the game & the creator's story
Excerpt from [Wikipedia](https://en.wikipedia.org/wiki/Josh_Wardle#Wordle):

In 2013, while working at Reddit, Josh Wardle made a prototype of word game Wordle, a play on his last name.

In January 2021, he returned to his 2013 prototype to create a word game for his partner, Palak Shah. During the COVID-19 pandemic, he and Shah had played many New York Times games including Spelling Bee, and he wanted to make a new word game that they could play together. Shah played a vital role in the game's development before it went public. She reviewed the English language's 12,000 five-letter words and narrowed them down to 2,500 commonly-known words that could be used in the daily puzzle.

At first, only Wardle's family played Wordle, until Wardle made it widely available in October 2021 by posting it on his own website, powerlanguage.co.uk. Wordle had no advertisements and Wardle's goal was not to make money. Despite Wordle's success, Wardle did not want it to become his full-time job.

The game had 90 players by 1 November, within a month of Wardle making it public. Three months later the game had 300,000 daily players, which rose to two million by the following week.

In January 2022, The New York Times Company announced that it had acquired Wordle "for an undisclosed price in the low-seven figures".

28. September, 2022 - Darwin Becker
