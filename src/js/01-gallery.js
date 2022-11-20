// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryLink = document.querySelector('.gallery__link');
const galleryEl = document.querySelectorAll('.gallery__image');

const markupGallery = galleryItems.map(({ preview, original, description }) => {
    return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>
    `
}).join('');
gallery.innerHTML = `${markupGallery}`;

let lightbox = new SimpleLightbox('.gallery a');

console.log(galleryItems);