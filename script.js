
const heading = document.createElement('h1');
heading.textContent = "Verify Your Account";
heading.id = "verification-heading";
document.body.appendChild(heading);

const subHeading = document.createElement('p');
subHeading.textContent = "Please enter the 6-digit code sent to your device.";
subHeading.id = "verification-subtext";
document.body.appendChild(subHeading);

// OTP Input Fields
const otpContainer = document.createElement('div');
otpContainer.classList.add('otp-container');
document.body.appendChild(otpContainer);

const inputFields = [];

for (let i = 0; i < 6; i++) {
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.maxLength = 1;
    inputField.classList.add('code');
    otpContainer.appendChild(inputField);
    inputFields.push(inputField);

    inputField.addEventListener('input', function() {
        if (this.value) {
            if (i < 5) {
                inputFields[i + 1].focus();
            }
        }
    });

    inputField.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace') {
            if (!this.value && i > 0) {
                inputFields[i - 1].focus();
            }
        }
    });
}

inputFields[0].focus();

