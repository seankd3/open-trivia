# OpenTrivia

OpenTrivia is a simple trivia game that allows users to test their knowledge across various categories and difficulty levels. The game dynamically loads questions and keeps track of the user's score and progress.

## Features

- Multiple categories and difficulty levels
- Dynamic question loading
- Score tracking
- Dark and light theme toggle
- Local storage for saving game state

## Getting Started

### Prerequisites

To run this project, you need a web browser that supports HTML5 and JavaScript.

### Installation

1. Clone the repository or download the ZIP file.
2. Extract the contents to a directory of your choice.

### Running the Game

1. Open the `index.html` file in your web browser.
2. Click the "Start Game" button to begin the game.

## Game Mechanics

- Answer multiple-choice questions to earn points.
- The difficulty level increases as you answer questions correctly.
- Your score and progress are saved in the browser's local storage.

## Customization

You can customize the questions by editing the `questions.js` file. Add your own questions and categories to enhance the game.

### Adding Questions

To add questions, follow these steps:

1. Open the `questions.js` file.
2. Add your questions in the following format:
    ```javascript
    const questions = [
      {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris",
        explanation: "Paris is the capital and most populous city of France.",
        category: "Geography",
        difficulty: "Highschool"
      },
      // Add more questions here
    ];
    ```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by various trivia games and quizzes.
- Special thanks to all contributors and users.

