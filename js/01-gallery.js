import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", selectImage)


let galleryItem;
let link;
let image;

for (let picture of galleryItems) {
    galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery__item");

    link = document.createElement("a");
    link.href = picture.original;
    link.classList.add("gallery__link");
    link.preve

    image = document.createElement("img");
    image.src = picture.preview;
    image.alt = picture.description;
    image.setAttribute("data-source", picture.original);
    image.classList.add("gallery__image"); 

    link.append(image);
    galleryItem.append(link);
    gallery.append(galleryItem);
  }


  function selectImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`, {
        
        onShow: () => {
            
            window.addEventListener("keydown", clickEsc);
        },
        
        onClose: () => window.removeEventListener("keydown", clickEsc)}
        );
        
        function clickEsc(event) {
            if (event.key === "Escape") {
                instance.close();
              }
          }
    instance.show();
  }
