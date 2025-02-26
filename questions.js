const questionBank = {
    "Engineering Mathematics": [
        { question: "Find the eigenvalues of the matrix...", options: ["1", "2", "3", "4"], answer: "2", type: "MCQ" },
        { question: "Evaluate the integral...", answer: "3.14", type: "NAT" }
    ],
    "Strength of Materials": [
        { question: "What is the bending stress formula?", options: ["σ = My/I", "σ = P/A", "σ = FL/E"], answer: "σ = My/I", type: "MCQ" }
    ],
    "Structural Analysis": [
        { question: "Determine the degree of static indeterminacy...", options: ["1", "2", "3", "4"], answer: "3", type: "MCQ" }
    ],
    "RCC": [
        { question: "What is the minimum grade of concrete for RCC structures?", options: ["M15", "M20", "M25", "M30"], answer: "M20", type: "MCQ" }
    ],
    "Steel Structures": [
        { question: "What is the yield strength of structural steel (Fe 415)?", options: ["250 MPa", "415 MPa", "500 MPa"], answer: "415 MPa", type: "MCQ" }
    ],
    "Building Materials": [
        { question: "Which of the following is a good fire-resistant material?", options: ["Timber", "Brick", "Plastic", "Glass"], answer: "Brick", type: "MCQ" }
    ],
    "Geotechnical Engineering": [
        { question: "Find the coefficient of permeability for...", answer: "0.005", type: "NAT" }
    ],
    "Fluid Mechanics": [
        { question: "What is the equation of continuity?", options: ["A1V1 = A2V2", "ρgH", "τ = μ du/dy"], answer: "A1V1 = A2V2", type: "MCQ" }
    ],
    "Environmental Engineering": [
        { question: "What is the permissible limit of fluoride in drinking water?", options: ["0.5 mg/L", "1.0 mg/L", "1.5 mg/L", "2.0 mg/L"], answer: "1.5 mg/L", type: "MCQ" }
    ],
    "Transportation Engineering": [
        { question: "What is the standard width of a single-lane highway?", options: ["3.0 m", "3.5 m", "4.0 m", "4.5 m"], answer: "3.5 m", type: "MCQ" }
    ],
    "Surveying": [
        { question: "Which instrument is used for measuring horizontal angles?", options: ["Dumpy level", "Total station", "Theodolite", "Plane table"], answer: "Theodolite", type: "MCQ" }
    ],
    "Hydrology & Irrigation": [
        { question: "What is the duty of water in irrigation?", options: ["Hectares per cumec", "Cumec per hectare", "Litres per second"], answer: "Hectares per cumec", type: "MCQ" }
    ],
    "PERT & CPM": [
        { question: "What is the critical path in a network?", options: ["Longest path", "Shortest path", "Average path"], answer: "Longest path", type: "MCQ" }
    ],
    "Project Management": [
        { question: "Which method is used for project scheduling?", options: ["Gantt Chart", "CPM", "Both A and B"], answer: "Both A and B", type: "MCQ" }
    ]
};

function generateTest() {
    const testQuestions = [];
    const subjectDistribution = {
        "Engineering Mathematics": 7,
        "Strength of Materials": 4,
        "Structural Analysis": 5,
        "RCC": 5,
        "Steel Structures": 4,
        "Building Materials": 4,
        "Geotechnical Engineering": 6,
        "Fluid Mechanics": 6,
        "Environmental Engineering": 5,
        "Transportation Engineering": 5,
        "Surveying": 4,
        "Hydrology & Irrigation": 4,
        "PERT & CPM": 3,
        "Project Management": 3
    };

    for (const subject in subjectDistribution) {
        const requiredCount = subjectDistribution[subject];
        if (questionBank[subject].length >= requiredCount) {
            testQuestions.push(...questionBank[subject].slice(0, requiredCount));
        } else {
            testQuestions.push(...questionBank[subject]);
        }
    }

    return testQuestions;
}
