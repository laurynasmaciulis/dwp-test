import './styles.scss';
import {expand, collapse} from './accordion';

document.addEventListener('DOMContentLoaded', () => {
  collapse();

  document.querySelector('#accordion').addEventListener('click', (event) => {
    const isExpanded = document.querySelector('#icon-expanded').classList.contains('hidden');

    if(isExpanded) {
      collapse();
    } else {
      expand();
    }

    event.preventDefault();
  })
});
