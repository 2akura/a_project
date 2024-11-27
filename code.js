document.addEventListener('DOMContentLoaded', () => {
  const outputDiv = document.getElementById('output');
  const commandInput = document.getElementById('commandInput');

  // Function to process command
  function processCommand(command) {
    if (command == 'hi') {
      return 'Hello, World!';
    } else {
      return `Unknown command: ${command}`;
    }
  }

  // Event listener for input
  commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const command = commandInput.value.trim();
      if (command) {
        // Display the command
        outputDiv.innerHTML += `<div>#R1&gt; ${command}</div>`;
        // Display the result
        const result = processCommand(command);
        outputDiv.innerHTML += `<div>${result}</div>`;
        // Scroll to the bottom
        outputDiv.scrollTop = outputDiv.scrollHeight;
      }
      commandInput.value = '';
    }
  });
});
