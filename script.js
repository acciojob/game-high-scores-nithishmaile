const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
  const name = nameInput.value.trim();
  const score = Number(scoreInput.value.trim());

  if (name === "" || isNaN(score)) {
    alert("Please enter valid name and score");
    return;
  }

  let storedScores = JSON.parse(localStorage.getItem("scores")) || [];

  // Add new score
  storedScores.push({ name, score });

  // Sort scores DESCENDING (highest first) – REQUIRED by Cypress
  storedScores.sort((a, b) => b.score - a.score);

  localStorage.setItem("scores", JSON.stringify(storedScores));

  nameInput.value = "";
  scoreInput.value = "";

  showScores();
}

// Show scores in div
function showScores() {
  const storedScores = JSON.parse(localStorage.getItem("scores")) || [];

  if (storedScores.length === 0) {
    scores.innerHTML = "<p>No scores yet</p>";
    return;
  }

  // Sort again on reload
  storedScores.sort((a, b) => b.score - a.score);

  let tableHTML = `
    <table>
      <tr>
        <th>Name</th>
        <th>Score</th>
      </tr>
  `;

  storedScores.forEach((item) => {
    tableHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.score}</td>
      </tr>
    `;
  });

  tableHTML += `</table>`;

  scores.innerHTML = tableHTML;
}
