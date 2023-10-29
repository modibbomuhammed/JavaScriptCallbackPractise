module.exports = {
    specialMultiply: function (a, b) {
        if (b) return a * b;
        return (b) => a * b;
    },

    guessingGame: function (amount) {
        const answer = Math.floor(Math.random() * 11);
        let guesses = 0;
        return (guess) => {
            if (guess === answer) return "You got it"
            if (guesses === amount) return "Game Over";
            guesses++;
            if (guesses === amount) return "No More Guessing the answer is " + answer;
            if (guess > answer) {
                return "Your Guess is too high!"
            } else if (guess < answer) {
                return "Your guess is too low";
            }
        }
    }
}