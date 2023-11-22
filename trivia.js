function startQuiz() {
    //Obtén las preguntas de trivia y realiza el llenado del HTML
    getTriviaQuestions().then(questions => {
        let output = [];
        let correctAnswers = 0;

        questions.forEach(question => {
            output.push(`<h2>${decodeURIComponent(question.question)}</h2>`);
            output.push('<ul>');

            question.incorrect_answers.forEach(answer => {
                output.push('<li>', '<button onclick="checkAnswer(this,', question.correct_answer, ')">', decodeURIComponent(answer), '</button>', '</li>');
            });

            output.push('</ul>');
        });

        // Finalmente, llenamos el contenedor HTML con el output
        document.getElementById('quizContainer').innerHTML = output.join('');
    });
}

async function getTriviaQuestions() {
    const apiKey = "Yhttps://opentdb.com/api.php?amount=10"; 
    const apiUrl = `https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple&encode=url3986&token=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    return data.results;
}

function checkAnswer(button, correctAnswer) {
    if (button.textContent === decodeURIComponent(correctAnswer)) {
        correctAnswers++;
    }

    button.disabled = true;

    if (correctAnswers === 10) {
       
        alert(`Puntaje final: ${correctAnswers}/10`);
    }
}