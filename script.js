const codeInputs = document.querySelectorAll('.code');

codeInputs.forEach((input, index) => {
  input.addEventListener('keyup', () => {
    if (input.value && index < codeInputs.length - 1) {
      codeInputs[index + 1].focus();
    }
  });
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && !input.value && index > 0) {
      codeInputs[index - 1].focus();
    }
  });
  input.addEventListener('click', () => {
    input.focus();
  });
});