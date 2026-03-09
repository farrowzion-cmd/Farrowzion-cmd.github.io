const output = document.getElementById('terminal-output');
const scriptLines = [
    "INITIALIZING SECURE CONNECTION...",
    "ACCESSING DATABASE: users.db",
    "BYPASSING FIREWALL LEVEL 3...",
    "STATUS: DECRYPTION IN PROGRESS...",
    "COMMAND: pseudoapp install Hollywood", // Example of a fake command
    "SEARCHING FOR VULNERABILITIES...",
    "ACCESS GRANTED. WELCOME, OPERATOR."
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
    if (lineIndex < scriptLines.length) {
        const currentLine = scriptLines[lineIndex];
        if (charIndex < currentLine.length) {
            // Append one character at a time
            output.textContent += currentLine[charIndex];
            charIndex++;
            setTimeout(typeLine, 50); // Typing speed
        } else {
            // Move to the next line
            output.textContent += '\n';
            lineIndex++;
            charIndex = 0;
            setTimeout(typeLine, 1000); // Pause before next line
        }
    }
}

// Start the animation when the page loads
typeLine();
