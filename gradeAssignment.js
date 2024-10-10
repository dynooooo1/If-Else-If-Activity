// gradeAssignment.js

// Prompt user for their score
let score = prompt("Please enter your score:");

// Convert input to a number
score = Number(score);

// Check the score and assign grades
if (score >= 90) {
    console.log("Excellent");
} else if (score >= 80 && score < 90) {
    console.log("Good");
} else if (score >= 70 && score < 80) {
    console.log("Fair");
} else {
    console.log("Needs Improvement");
}
