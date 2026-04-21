import { ShareUrlAuto } from './share-url.js';

window.addEventListener('DOMContentLoaded', (event) => {
  // Share links
  ShareUrlAuto();
  
  // Encoded text
  const encodeElements = document.querySelectorAll('.encode');
  for (const item of encodeElements) {
    let decode = atob(item.dataset['encode']);

    if (item.dataset['encodeAttribute']) {
      item.setAttribute(`${item.dataset['encodeAttribute']}`, `${decode}`);
    }
  }
});
