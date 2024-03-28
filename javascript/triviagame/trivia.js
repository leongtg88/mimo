const question = "What planet is known as the 'Red Planet'?";
const choices = ["Earth", "Mars", "Jupiter", "Saturn"];
const correctAnswer = "Mars";

function displayQuestion() {
document.getElementById('question').innerHTML = question;

for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`choice${i+1}`);
    btn.innerHTML = choices[i];
    btn.value = choices[i];
}
}

function checkAnswer(button) {
if (button.value === correctAnswer) {
    document.getElementById('result').innerHTML = "Correct!";

} else {
    document.getElementById('result').innerHTML = "Wrong!";
}
for (let i = 0; i < 4; i++) {
    const button = document.getElementById(`choice${i+1}`);
    button.disabled= true;
}
}

displayQuestion();