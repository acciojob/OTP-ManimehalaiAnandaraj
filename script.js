//your JS code here. If required.
document.body.innerHTML = `
  <h1 id="verification_heading">Verify Your Account</h1>
  <p id="verification_subtext">Please enter the 6-digit code sent to your device.</p>
  <div class="code-container">
    <input type="text" class="code" maxlength="1">
    <input type="text" class="code" maxlength="1">
    <input type="text" class="code" maxlength="1">
    <input type="text" class="code" maxlength="1">
    <input type="text" class="code" maxlength="1">
    <input type="text" class="code" maxlength="1">
  </div>
  <button id="submit">Submit</button>
`;

// JavaScript logic
const codeInputs = document.querySelectorAll('.code');

codeInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value) {
      if (index < codeInputs.length - 1) {
        codeInputs[index + 1].focus();
      }
    }
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
      if (!input.value && index > 0) {
        codeInputs[index - 1].focus();
      }
    }
  });
});
