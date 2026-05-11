# Higher or Lower

A sleek, interactive "Higher or Lower" number guessing game built with **React Native** and **Expo**. Test your intuition and see how long you can keep your streak alive!

---

## Game Logic

- **The Start:** You are presented with a starting number between 1 and 100.
- **The Goal:** Predict if the next hidden number is **Higher** or **Lower**.
- **The Streak:** If you guess correctly, the hidden number becomes the new displayed number, your score goes up, and a new secret number is generated.
- **Game Over:** One wrong move and the game ends! Reset to try and beat your high score.

## Getting Started

1. **Install Dependencies**

   ```bash
   npm install

   ```

2. **Start Game**

   ```bash
   npx expo start

   ```

3. **Open on Device**
   - Scan the QR code with **Expo Go** (Android) or your **Camera** (iOS).
   - Press `i` for iOS Simulator or `a` for Android Emulator.

## Tech Stack

- **Framework:** [Expo](https://expo.dev/) (React Native)
- **Language:** TypeScript (Strictly typed, no `any`)
- **Theme:** Custom centralized color palette for easy UI branding.

## Folder Structure

- `app/` - Contains the main game screens and file-based routing.
- `themes/` - UI design tokens like colors and spacing.
- `assets/` - Game icons and splash screens.

## Key Features

- **Smart Randomization:** Logic ensures the next number is never identical to the current one.
- **Strict Typing:** Robust TypeScript implementation for cleaner, bug-free code.
- **Haptic Feedback Ready:** Clean UI with clear success/failure messaging.

---

**Enjoy the game!**
