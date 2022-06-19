import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

let markup = "";

for (let picture of galleryItems) {

    markup +=  `<a class="gallery__item" href="${picture.original}">
                    <img
                        class="gallery__image"
                        src="${picture.preview}"
                        data-source="${picture.original}"
                        alt="${picture.description}"
                    />
                </a>`;
  }

gallery.insertAdjacentHTML("beforeend", markup); //А как же то, что в <ul> дети могут быть только <li>?

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt', captionDelay: 250, captionPosition: 'bottom'});
