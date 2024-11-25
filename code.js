const inputField = document.getElementById("input");
const outputArea = document.getElementById("output");

const commands = {
    "show project": `
Project 1: <a href="https://your-project1-url.com" target="_blank">View Project</a>
Project 2: <a href="https://your-project2-url.com" target="_blank">View Project</a>
`,
    "about me": `
Hello, I am a Rust and JavaScript developer. I enjoy working on networking projects and building interactive web applications.
`,
    "contact": `
Email: email@email.com
Phone: 0123456789
Twitter: @yourhandle
LinkedIn: https://www.linkedin.com/in/yourprofile/
`
};

inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const command = inputField.value.trim();
        handleCommand(command);
        inputField.value = ""; // Clear input field
    }
});

function handleCommand(command) {
    if (commands[command]) {
        outputArea.innerHTML = commands[command];
    } else {
        outputArea.innerHTML = `Command not recognized. Type ? for help.`;
    }
}
