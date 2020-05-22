export default class Accordion {
  constructor({elementSelector} = {}) {
    const element = document.querySelector(elementSelector);
    const anchorElement = element.querySelector('a');
    const contentElement = element.querySelector('div');

    this.anchorElement = anchorElement;
    this.contentElement = contentElement;
    this.isExpanded = null;
    this.collapse();

    element.addEventListener('click', event => {
      if (this.isExpanded) {
        this.collapse();
      } else {
        this.expand();
      }

      event.preventDefault();
    });
  }

  expand() {
    const {anchorElement, contentElement} = this;

    anchorElement.classList.add('expanded');
    anchorElement.classList.remove('collapsed');
    anchorElement.setAttribute('aria-expanded', 'true');
    contentElement.classList.remove('hidden');
    contentElement.setAttribute('aria-hidden', 'false');
    this.isExpanded = true;
  }

  collapse() {
    const {anchorElement, contentElement} = this;

    anchorElement.classList.add('collapsed');
    anchorElement.classList.remove('expanded');
    anchorElement.setAttribute('aria-expanded', 'false');
    contentElement.classList.add('hidden');
    contentElement.setAttribute('aria-hidden', 'true');
    this.isExpanded = false;
  }
}
