

import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector(`.gallery`)

const galleryPicture =  makeGallery(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryPicture);


function makeGallery(galleryItems) {
    return galleryItems
    .map(galleryItem => {
        return `
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      alt="${galleryItem.description}"
    />
  </a>
`
    }).join('');
}

new SimpleLightbox('.gallery a', {
    captionsData : 'alt',
    captionDelay : 250
});

console.log(galleryItems);
