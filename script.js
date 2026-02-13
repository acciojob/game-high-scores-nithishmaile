// complete the JS code
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
  // complete the code here
	 const name = nameInput.value.trim();
  const score = scoreInput.value.trim();

  if (name === "" || score === "") {
    alert("Please enter both name and score");
    return;
  }

  // Get existing scores from localStorage
  let storedScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Add new score
  storedScores.push({ name, score });

  // Save back to localStorage
  localStorage.setItem("highScores", JSON.stringify(storedScores));

  // Clear inputs
  nameInput.value = "";
  scoreInput.value = "";

  showScores();
  showScores();
}

// Show scores in div
function showScores() {
  // complete the code
	const storedScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // If no scores
  if (storedScores.length === 0) {
    scores.innerHTML = "<p>No scores yet</p>";
    return;
  }

  // Create table
  let tableHTML = `
    <table border="1" cellpadding="8" cellspacing="0">
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
