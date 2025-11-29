const correctAnswers = {
    q1: "b",
    q2: "b",
    q3: "b",
    q4: "c",
    q5: "a",
    q6: "b"
};

const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const resultDiv = document.getElementById("result");
const form = document.getElementById("quiz-form");

submitBtn.addEventListener("click", function () {
    let score = 0;
    let total = Object.keys(correctAnswers).length;
    for (let key in correctAnswers) {
        const radios = document.getElementsByName(key);
        let userAnswer = null;
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                userAnswer = radios[i].value;
                break;
            }
        }
        if (userAnswer === correctAnswers[key]) {
            score++;
        }
    }
    const pourcentage = Math.round((score / total) * 100);
    let message = `Tu as ${score} / ${total} (${pourcentage}%). `;


    resultDiv.className = ""; 

    if (pourcentage === 100) {
        message += "Excellent ! 🔥";
        resultDiv.classList.add("result-good");
    } else if (pourcentage >= 60) {
        message += "Pas mal, continue à t'entraîner ! 💪";
        resultDiv.classList.add("result-medium");
    } else {
        message += "Tu peux réviser encore un peu 😉";
        resultDiv.classList.add("result-bad");
    }

    resultDiv.textContent = message;
});

// bouton pour tout réinitialiser
resetBtn.addEventListener("click", function () {
    form.reset();
    resultDiv.textContent = "";
    resultDiv.className = "";
});