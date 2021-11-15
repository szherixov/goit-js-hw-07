import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery')

const imgEl = galleryItems.map(img => 
    `<a class="gallery__link" href="#">
        <img
            class="gallery__image"
            src="${img.preview}"
            data-source="${img.original}"
            alt="${img.description}"
        />
    </a>`).join('');
    
galleryListEl.insertAdjacentHTML("afterbegin", imgEl);



galleryListEl.addEventListener('click', (event) => {
    console.log(event.target);
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    const instance = basicLightbox.create(
      `<img src=‘${event.target.dataset.source}>`
    );
    instance.show();
  });
  
  
  
  // console.log(galleryItems);