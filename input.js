const inputField = document.getElementById('inputfield');
const inputUrl = document.getElementById('inputurl');
const button = document.getElementById('buttonxd');

function updateButtonLink() {
    button.textContent = inputField.value;
    button.href = inputUrl.value;
}

inputField.addEventListener('input', updateButtonLink);
inputUrl.addEventListener('input', updateButtonLink);

document.getElementById('copyButton').addEventListener('click', function () {
    navigator.clipboard.writeText(document.getElementById('cssOutput').value);
    alert('Your button code was successfully copied');
});
