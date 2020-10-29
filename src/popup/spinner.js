export function getSpinnerDiv(context) {
  const divWrapper = document.createElement('div');
  divWrapper.classList.add('spinner');
  divWrapper.classList.add(`spinner-${context}`);

  for (let i = 1; i <= 3; i += 1) {
    const divBounce = document.createElement('div');
    divBounce.classList.add(`bounce${i}`);
    divWrapper.appendChild(divBounce);
  }

  return divWrapper;
}

export function addSpinner(spinnerPlaceholder, context) {
  spinnerPlaceholder.appendChild(getSpinnerDiv(context));
}

export function removeSpinner(spinnerPlaceholder) {
  while (spinnerPlaceholder.firstChild) {
    spinnerPlaceholder.removeChild(spinnerPlaceholder.firstChild);
  }
}
