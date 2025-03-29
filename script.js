
const codeInputs = document.querySelectorAll('.code');

codeInputs.forEach((input, index) => {

  input.addEventListener('input', () => {
    if (input.value) {
      if (index < codeInputs.length - 1) {
        codeInputs[index + 1].focus();
      }
    }
  });
  input.addEventListener('keyup', (event) => {
    if (event.key === 'Backspace') {
      if (!input.value && index > 0) {
        codeInputs[index - 1].focus();
      }
    }
  });
});

