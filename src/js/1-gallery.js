import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import images from '../gallery.js';

const markup = images.reduce((html, image) => {
  return (html += `<li class="gallery-item">
  <a class="gallery-link" href="${image.original}">
    <img
      class="gallery-image"
      src="${image.preview}"
      alt="${image.description}"
    />
  </a>
</li>`);
}, '');

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});
