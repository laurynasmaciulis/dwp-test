export function expand() {
  document.querySelector('#icon-expanded').classList.add('hidden');
  document.querySelector('#icon-collapsed').classList.remove('hidden');
  document.querySelector('#feedbackForm').classList.remove('hidden');
}

export function collapse() {
  document.querySelector('#icon-expanded').classList.remove('hidden');
  document.querySelector('#icon-collapsed').classList.add('hidden');
  document.querySelector('#feedbackForm').classList.add('hidden');
}
