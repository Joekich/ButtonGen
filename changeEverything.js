function replaceCssRule(sheet, selector, rule) {
    const rules = sheet.sheet.cssRules;
    for (let i = 0; i < rules.length; i++) {
        if (rules[i].selectorText === selector) {
            sheet.sheet.deleteRule(i);
            sheet.sheet.insertRule(rule, i);
            return;
        }
    }
    sheet.sheet.insertRule(rule, rules.length);
}

document.getElementById('hoverCheckbox').addEventListener('change', function () {
    const button = document.getElementById('buttonxd');
    if (this.checked) {
        button.classList.add('hoverEffect');
    } else {
        button.classList.remove('hoverEffect');
    }
    displayCssCode();
});

function updateButtonStyles() {
    const textColor = document.getElementById('colorPickerInput').value;
    const backgroundColor = document.getElementById('colorPickerInputBackground').value;
    const borderColor = document.getElementById('colorPickerInputBorder').value;

    let styleSheet = document.getElementById('SwitchableStyles');
    if (!styleSheet) {
        styleSheet = document.createElement('style');
        styleSheet.id = 'SwitchableStyles';
        document.head.appendChild(styleSheet);
    }

    const buttonStyle = `.yourButton {
        color: ${textColor};
        background-color: ${backgroundColor};
        border-color: ${borderColor};
        padding: 10px 20px;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        font-size: ${document.getElementById('myRange').value}px;
        border-radius: ${document.getElementById('myRangeBorder').value}px;
        border-width: ${document.getElementById('myRangeBorderThickness').value}px;
        padding-top: ${document.getElementById('myRangeHeight').value}px;
        padding-bottom: ${document.getElementById('myRangeHeight').value}px;
        padding-left: ${document.getElementById('myRangeWidth').value}px;
        padding-right: ${document.getElementById('myRangeWidth').value}px;
    }`;

    replaceCssRule(styleSheet, '.yourButton', buttonStyle);
    displayCssCode();
}

function updateButtonHoverStyles() {
    const hoverTextColor = document.getElementById('colorPickerInputHover').value;
    const hoverBackgroundColor = document.getElementById('colorPickerInputBackgroundHover').value;
    const hoverBorderColor = document.getElementById('colorPickerInputBorderHover').value;

    let styleSheet = document.getElementById('SwitchableStyles');
    if (!styleSheet) {
        styleSheet = document.createElement('style');
        styleSheet.id = 'SwitchableStyles';
        document.head.appendChild(styleSheet);
    }

    const buttonHoverStyle = `.yourButton.hoverEffect:hover {
        color: ${hoverTextColor};
        background-color: ${hoverBackgroundColor};
        border-color: ${hoverBorderColor};
    }`;

    replaceCssRule(styleSheet, '.yourButton.hoverEffect:hover', buttonHoverStyle);
    displayCssCode();
}

function displayCssCode() {
    const textColorDisplay = document.getElementById('colorPickerInput').value;
    const backgroundColorDisplay = document.getElementById('colorPickerInputBackground').value;
    const borderColorDisplay = document.getElementById('colorPickerInputBorder').value;
    const hoverTextColorDisplay = document.getElementById('colorPickerInputHover').value;
    const hoverBackgroundColorDisplay = document.getElementById('colorPickerInputBackgroundHover').value;
    const hoverBorderColorDisplay = document.getElementById('colorPickerInputBorderHover').value;

    const fontSize = document.getElementById('myRange').value;
    const borderRadius = document.getElementById('myRangeBorder').value;
    const borderWidth = document.getElementById('myRangeBorderThickness').value;
    const paddingHeight = document.getElementById('myRangeHeight').value;
    const paddingWidth = document.getElementById('myRangeWidth').value;

    const cssCode = `
<style>
.yourButton {
    color: ${textColorDisplay};
    background-color: ${backgroundColorDisplay};
    border-color: ${borderColorDisplay};
    padding-top: ${paddingHeight}px;
    padding-bottom: ${paddingHeight}px;
    padding-left: ${paddingWidth}px;
    padding-right: ${paddingWidth}px;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-size: ${fontSize}px;
    border-radius: ${borderRadius}px;
    border-width: ${borderWidth}px;
}

${document.getElementById('hoverCheckbox').checked ? `.yourButton:hover {
    color: ${hoverTextColorDisplay};
    background-color: ${hoverBackgroundColorDisplay};
    border-color: ${hoverBorderColorDisplay};
}` : ''}
</style>`;

    const href = document.getElementById('inputurl').value;
    const title = document.getElementById('inputfield').value;

    const buttonHtml = `<a class="yourButton" href="${href}" id="buttonxd" title="${title}"></a>`;

    document.getElementById('cssOutput').value = `${buttonHtml}\n${cssCode}`;
}


document.getElementById('inputfield').addEventListener('input', function () {
    const button = document.getElementById('buttonxd');
    button.title = this.value;
    displayCssCode();
});

document.getElementById('inputurl').addEventListener('input', function () {
    const button = document.getElementById('buttonxd');
    button.href = this.value;
    displayCssCode();
});

document.getElementById('myRange').addEventListener('input', () => {
    const fontSize = document.getElementById('myRange').value;
    document.getElementById('buttonxd').style.fontSize = `${fontSize}px`;
    displayCssCode();
});

document.getElementById('myRangeBorder').addEventListener('input', () => {
    const borderSize = document.getElementById('myRangeBorder').value;
    document.getElementById('buttonxd').style.borderRadius = `${borderSize}px`;
    displayCssCode();
});

document.getElementById('myRangeBorderThickness').addEventListener('input', () => {
    const borderThicknessSize = document.getElementById('myRangeBorderThickness').value;
    document.getElementById('buttonxd').style.borderWidth = `${borderThicknessSize}px`;
    displayCssCode();
});

document.getElementById('myRangeHeight').addEventListener('input', () => {
    const Height = document.getElementById('myRangeHeight').value;
    document.getElementById('buttonxd').style.paddingTop = `${Height}px`;
    document.getElementById('buttonxd').style.paddingBottom = `${Height}px`;
    displayCssCode();
});

document.getElementById('myRangeWidth').addEventListener('input', () => {
    const Width = document.getElementById('myRangeWidth').value;
    document.getElementById('buttonxd').style.paddingRight = `${Width}px`;
    document.getElementById('buttonxd').style.paddingLeft = `${Width}px`;
    displayCssCode();
});

document.getElementById('colorPickerInput').addEventListener('change', updateButtonStyles);
document.getElementById('colorPickerInputBackground').addEventListener('change', updateButtonStyles);
document.getElementById('colorPickerInputBorder').addEventListener('change', updateButtonStyles);

document.getElementById('colorPickerInputHover').addEventListener('change', updateButtonHoverStyles);
document.getElementById('colorPickerInputBackgroundHover').addEventListener('change', updateButtonHoverStyles);
document.getElementById('colorPickerInputBorderHover').addEventListener('change', updateButtonHoverStyles);

updateButtonStyles();
updateButtonHoverStyles();