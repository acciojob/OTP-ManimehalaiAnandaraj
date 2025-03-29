document.addEventListener('DOMContentLoaded', function() {
  const codeContainer = document.querySelector('.code-container');
  const inputs = document.querySelectorAll('.code');
	
  inputs.forEach((input, index) => {
    input.addEventListener('input', function(e) {
      if (this.value.length === 1) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }
    });
    
    // Handle backspace
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Backspace' && this.value.length === 0) {
        if (index > 0) {
          inputs[index - 1].focus();
        }
      }
    });
  });
});