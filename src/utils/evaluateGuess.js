
export const evaluateGuess = (guess, solution) => {
    const length = guess.length;
    const result = Array(length).fill(null).map(() => ({
        letter: "",
        status: "absent",
    }));

    const solutionArr = solution.split("");
    const guessArr = guess.split("");

    // para letra correcta
    for (let i = 0; i < length; i++) {
        if (guessArr[i] === solutionArr[i]) {
            result[i] = {
                letter: guessArr[i],
                status: "correct"
            }
            solutionArr[i] = null;
            guessArr[i] = null;
        }
    }

    // para letra presente
    for (let i = 0; i < length; i++) {
        if (guessArr[i] && solutionArr.includes(guessArr[i])) {
            result[i] = {
                letter: guessArr[i],
                status: "present"
            }
            const index = solutionArr.indexOf(guessArr[i]);
            solutionArr[index] = null;
        } else if (guessArr[i]) {
            result[i] = {
                letter: guessArr[i],
                status: "absent"
            }
        }
    }

    return result;
}