<p align="center">
  <img src="public/Logo.png" alt="Wordle Logo" width="360" />
</p>

<h1 align="center">Wordle – German Edition</h1>

<p align="center">
  A German version of the popular Wordle word game, built with React and TypeScript.
</p>

<p align="center">
  <a href="https://darwinbecker.github.io/wordle/">
    <strong>Play Wordle</strong>
  </a>
</p>

## Overview

This project is a German implementation of Wordle, the popular browser-based word guessing game.

The goal is to guess a hidden five-letter word within six attempts. After each guess, colored tiles provide feedback to help you find the correct answer.

A key part of this project was building and cleaning a German word database to provide a suitable collection of valid words and potential solutions.

## How to Play

The objective is to guess the hidden five-letter word in six attempts.

1. Type a five-letter word using your physical keyboard or the on-screen keyboard.
2. Press **Enter** to submit your guess.
3. Use the colored tiles to figure out which letters are in the solution.
4. Keep guessing until you find the word or run out of attempts.

### Color Indicators

After each guess, every letter is marked with a color:

<table>
  <tr>
    <td align="center" valign="middle">
      <img src="public/Green.png" width="32" height="32" />
    </td>
    <td valign="middle"><strong>Green</strong> – Correct letter and position.</td>
  </tr>
  <tr>
    <td align="center" valign="middle">
      <img src="public/Yellow.png" width="32" height="32" />
    </td>
    <td valign="middle"><strong>Yellow</strong> – Correct letter, wrong position.</td>
  </tr>
  <tr>
    <td align="center" valign="middle">
      <img src="public/Grey.png" width="32" height="32" />
    </td>
    <td valign="middle"><strong>Gray</strong> – Letter is not in the solution.</td>
  </tr>
</table>

**Example:**

The colors provide clues after every guess, helping you narrow down the possible solution.

## Features

- **German Word Database** – A curated collection of German five-letter words.
- **Interactive Gameplay** – Guess the hidden word in up to six attempts.
- **Visual Feedback** – Color-coded tiles indicate correct and misplaced letters.
- **Keyboard Support** – Use your physical keyboard or the on-screen keyboard.
- **Word Definitions** – Word descriptions sourced primarily from the Digitales Wörterbuch der deutschen Sprache.

## Word Database

The word database is based on data from [OpenThesaurus](https://www.openthesaurus.de/).

The original dataset contained approximately 193,223 words. I filtered and cleaned the data to create a suitable collection of five-letter words.

The cleanup process included:

- Converting German special characters (`ä`, `ö`, `ü`, `ß`) into their respective letter combinations (`ae`, `oe`, `ue`, `ss`).
- Removing special characters and punctuation.
- Removing entries containing multiple words.
- Excluding abbreviations, uncommon slang, and uncommon English words.
- Excluding names, company names, and words containing numbers.

After cleaning, the database contained:

| Dataset | Word Count |
|---|---:|
| Valid five-letter words | 2,412 |
| Potential solution words | 808 |

A separate list of 808 words was created to serve as potential puzzle solutions.

## Tech Stack

- **React**
- **TypeScript**
- **GitHub Pages**

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/darwinbecker/wordle.git
cd wordle
```

Install dependencies:

```bash
npm install
```

### Development

Start the local development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

### Production Build

Create an optimized production build:

```bash
npm run build
```

### Deployment

The application is hosted on **GitHub Pages**.

## Credits & Data Sources

- [Josh Wardle](https://powerlanguage.co.uk/) – Original Wordle concept
- [OpenThesaurus](https://www.openthesaurus.de/) – German word database
- [Digitales Wörterbuch der deutschen Sprache (DWDS)](https://www.dwds.de/) – Word descriptions
