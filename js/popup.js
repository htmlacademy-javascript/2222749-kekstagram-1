const renderThumbnails = (data) => {
  const picturesContainer = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  data.forEach((photo) => {
    const pictureElement = document.createElement('div');
    pictureElement.classList.add('picture');

    const imageElement = document.createElement('img');
    imageElement.src = photo.url;
    pictureElement.appendChild(imageElement);

    const likesElement = document.createElement('div');
    likesElement.classList.add('picture__likes');
    likesElement.textContent = `Likes: ${photo.likes}`;
    pictureElement.appendChild(likesElement);

    const commentsElement = document.createElement('div');
    commentsElement.classList.add('picture__comments');
    commentsElement.textContent = `Comments: ${photo.comments}`;
    pictureElement.appendChild(commentsElement);

    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
};


const photosData = [
  { url: 'image1.jpg', likes: 10, comments: 5 },
  { url: 'image2.jpg', likes: 15, comments: 7 },
  { url: 'image3.jpg', likes: 20, comments: 3 }
];


renderThumbnails(photosData);


export {renderThumbnails};
