onst codeInputs = document.querySelectorAll('.code');

codeInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value && index < codeInputs.length - 1) {
      setTimeout(() => codeInputs[index + 1].focus(), 0);
    }
  });
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && !input.value && index > 0) {
      setTimeout(() => codeInputs[index - 1].focus(), 0);
    }
  });
  input.addEventListener('click', () => {
    input.focus();
  });
});