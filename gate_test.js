// gate_test.js - Fetching and displaying questions properly

// Load questions from questions.js
import { questionBank } from './questions.js';

// GATE Civil Engineering subject-wise question distribution
const gatePattern = {
    "Engineering Mathematics": { total: 7, MCQ: 4, NAT: 3, MSQ: 0 },
    "Structural Analysis": { total: 4, MCQ: 2, NAT: 2, MSQ: 0 },
    "Strength of Materials": { total: 4, MCQ: 2, NAT: 2, MSQ: 0 },
    "RCC": { total: 3, MCQ: 2, NAT: 1, MSQ: 0 },
    "Steel": { total: 2, MCQ: 1, NAT: 1, MSQ: 0 },
    "Geotechnical Engineering": { total: 7, MCQ: 4, NAT: 3, MSQ: 0 },
    "Environmental Engineering": { total: 6, MCQ: 4, NAT: 2, MSQ: 0 },
    "Fluid Mechanics": { total: 5, MCQ: 3, NAT: 2, MSQ: 0 },
    "Hydrology": { total: 3, MCQ: 2, NAT: 1, MSQ: 0 },
    "Irrigation": { total: 3, MCQ: 2, NAT: 1, MSQ: 0 },
    "Transportation Engineering": { total: 4, MCQ: 3, NAT: 1, MSQ: 0 },
    "Surveying": { total: 3, MCQ: 2, NAT: 1, MSQ: 0 },
    "Building Materials": { total: 2, MCQ: 1, NAT: 1, MSQ: 0 },
    "PERT & CPM and Project Management": { total: 2, MCQ: 1, NAT: 1, MSQ: 0 }
};

// Function to get random questions from question bank
function getRandomQuestions() {
    let selectedQuestions = [];
    let pastGateQuestions = [];

    // Ensure at least 5 past GATE questions
    let pastQuestionsPool = questionBank.filter(q => q.isPastGate);
    pastGateQuestions = pastQuestionsPool.sort(() => 0.5 - Math.random()).slice(0, 5);
    selectedQuestions.push(...pastGateQuestions);

    // Select remaining questions based on GATE pattern
    for (let subject in gatePattern) {
        let subjectQuestions = questionBank.filter(q => q.subject === subject);
        let { total, MCQ, NAT, MSQ } = gatePattern[subject];
        
        let mcqs = subjectQuestions.filter(q => q.type === 'MCQ').sort(() => 0.5 - Math.random()).slice(0, MCQ);
        let nats = subjectQuestions.filter(q => q.type === 'NAT').sort(() => 0.5 - Math.random()).slice(0, NAT);
        let msqs = subjectQuestions.filter(q => q.type === 'MSQ').sort(() => 0.5 - Math.random()).slice(0, MSQ);

        selectedQuestions.push(...mcqs, ...nats, ...msqs);
    }

    return selectedQuestions.slice(0, 65);
}

// Function to display questions in HTML
document.addEventListener("DOMContentLoaded", function() {
    const testContainer = document.getElementById("test-questions");
    let questions = getRandomQuestions();

    questions.forEach((question, index) => {
        let questionHTML = `
            <div class="question">
                <p><strong>Q${index + 1}:</strong> ${question.text}</p>
                ${getOptionsHTML(question)}
            </div>
        `;
        testContainer.innerHTML += questionHTML;
    });
});

// Function to generate options for MCQ and MSQ questions
function getOptionsHTML(question) {
    if (question.type === "MCQ" || question.type === "MSQ") {
        return question.options.map((opt, i) => `
            <label>
                <input type="${question.type === "MCQ" ? "radio" : "checkbox"}" name="q${question.id}" value="${opt}">
                ${opt}
            </label><br>
        `).join('');
    } else if (question.type === "NAT") {
        return '<input type="number" step="0.01" name="q' + question.id + '" placeholder="Enter numeric answer">';
    }
    return '';
}
