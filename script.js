const codeInputs = document.querySelectorAll(‘.code’);

codeInputs.forEach((input, index) => {

input.addEventListener(‘keydown’, (event) => {
if (/\d/.test(event.key)) {
if (index < codeInputs.length - 1) {
setTimeout(() => codeInputs[index + 1].focus(), 10);

  }
}
});
input.addEventListener(‘keyup’, (event) => {

if (event.key === 'Backspace') {
  if (!input.value && index > 0) {
    codeInputs[index - 1].focus();
  }
}
});
input.addEventListener(‘click’, () => {
input.focus();
});
});

