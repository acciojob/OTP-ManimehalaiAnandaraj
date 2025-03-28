

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
  </div><br><br>
  <p id="submit">This is design only.we didn't actually send you an email
  as we don't have your email,right</p>
`;

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
cy.wait()