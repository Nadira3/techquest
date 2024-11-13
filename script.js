function nextSection(currentSection) {
    // Hide current section and show the next one
    document.getElementById('section' + currentSection).style.display = 'none';
    document.getElementById('section' + (currentSection + 1)).style.display = 'block';
}

function calculateResult() {
    const form = document.getElementById('quizForm');
    const data = new FormData(form);

    // Initialize scores for each specialty
    let scores = {
        "Software Development": 0,
        "AI & Machine Learning": 0,
        "Data Science": 0,
        "Product Management": 0,
        "Developer Relations": 0,
        "Community Management": 0,
        "Product Design": 0,
        "Technical Writing": 0,
        "Game Development": 0,
        "DevOps and Systems Administration": 0
    };

    // Define weighted contributions of each question toward specialties
    const questionWeights = {
        // Section 1: Cognitive and Problem-Solving Style
        "q1": { "Data Science": 0.8, "AI & Machine Learning": 0.2 },
        "q2": { "AI & Machine Learning": 0.6, "Software Development": 0.4 },
        "q3": { "Product Management": 1.0 },
        "q4": { "Data Science": 0.5, "DevOps and Systems Administration": 0.5 },
        "q5": { "Product Management": 0.6, "Software Development": 0.4 },

        // Section 2: Learning Preferences and Adaptability
        "q6": { "Game Development": 0.5, "Product Design": 0.5 },
        "q7": { "Technical Writing": 0.5, "Data Science": 0.5 },
        "q8": { "AI & Machine Learning": 0.7, "Data Science": 0.3 },
        "q9": { "Product Management": 0.4, "DevOps and Systems Administration": 0.6 },
        "q10": { "Software Development": 0.6, "AI & Machine Learning": 0.4 },

        // Section 3: Technical Background and Analytical Skills
        "q11": { "Software Development": 0.7, "Game Development": 0.3 },
        "q12": { "Data Science": 0.6, "AI & Machine Learning": 0.4 },
        "q13": { "Product Design": 1.0 },
        "q14": { "Software Development": 0.5, "AI & Machine Learning": 0.5 },
        "q15": { "DevOps and Systems Administration": 0.6, "Software Development": 0.4 },

        // Section 4: Social and Communication Skills
        "q16": { "Developer Relations": 0.6, "Community Management": 0.4 },
        "q17": { "Community Management": 1.0 },
        "q18": { "Technical Writing": 0.8, "Developer Relations": 0.2 },
        "q19": { "Product Management": 0.5, "Community Management": 0.5 },
        "q20": { "Technical Writing": 0.6, "Developer Relations": 0.4 },

        // Section 5: Personal Strengths and Work Style
        "q21": { "Product Design": 0.5, "Technical Writing": 0.5 },
        "q22": { "Product Management": 0.6, "Developer Relations": 0.4 },
        "q23": { "DevOps and Systems Administration": 0.5, "Software Development": 0.5 },
        "q24": { "Game Development": 0.6, "Product Design": 0.4 },
        "q25": { "Software Development": 0.5, "AI & Machine Learning": 0.5 },

        // Section 6: Creativity and Design Aptitude
        "q26": { "Product Design": 0.7, "Game Development": 0.3 },
        "q27": { "Product Design": 0.8, "Developer Relations": 0.2 },
        "q28": { "Product Design": 0.6, "Community Management": 0.4 },
        "q29": { "Game Development": 0.6, "Software Development": 0.4 },
        "q30": { "Product Design": 0.7, "Technical Writing": 0.3 },

        // Section 7: Writing and Content Creation
        "q31": { "Technical Writing": 1.0 },
        "q32": { "Technical Writing": 0.6, "Developer Relations": 0.4 },
        "q33": { "Technical Writing": 0.7, "Community Management": 0.3 },
        "q34": { "Technical Writing": 0.8, "Developer Relations": 0.2 },
        "q35": { "Technical Writing": 1.0 },

        // Section 8: Strategic Thinking and Product Focus
        "q36": { "Product Management": 0.8, "Product Design": 0.2 },
        "q37": { "Product Management": 0.7, "Community Management": 0.3 },
        "q38": { "Product Management": 0.6, "DevOps and Systems Administration": 0.4 },
        "q39": { "Product Management": 1.0 },
        "q40": { "Product Management": 0.7, "Product Design": 0.3 }
    };

    // Calculate scores based on responses
    for (let [key, value] of data.entries()) {
        let score = parseInt(value);
        if (questionWeights[key]) {
            for (let specialty in questionWeights[key]) {
                scores[specialty] += score * questionWeights[key][specialty];
            }
        }
    }

    // Find the specialty with the highest score
    let bestMatch = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    // Display the result
    document.getElementById('result').innerText = `Your recommended tech specialty is: ${bestMatch}`;
}
// Display the first section by default
document.getElementById('section1').style.display = 'block';
