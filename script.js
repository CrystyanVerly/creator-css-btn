const _controls = document.forms.controls;
const _cssText = document.querySelector(".css");
const _btn = document.querySelector(".btn");

_controls.addEventListener("input", handleChange);

const _handleStyle = {
  element: _btn,
  text(value) {
    this.element.textContent = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = `${value}px`;
  },
  width(value) {
    this.element.style.width = `${value}px`;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = `${value}px`;
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = `${value}rem`;
  },
};

function handleChange(event) {
  const _inputName = event.target.name;
  const _inputValue = event.target.value;

  _handleStyle[_inputName](_inputValue);
  saveValues(_inputName, _inputValue);

  showCss();
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const _properties = Object.keys(localStorage);

  _properties.forEach((prop) => {
    _handleStyle[prop](localStorage[prop]);
    _controls.elements[prop].value = localStorage[prop];
  });
  showCss();
}
setValues();

function showCss() {
  _cssText.innerHTML = `<span>${_btn.style.cssText
    .split("; ")
    .join(`;</span><span>`)}`;
}
