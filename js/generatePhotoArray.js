import getRandomNumber from './getRandomNumber.js';

import generateComment from './generateComment.js';

const generatePhotoArray = () => {
  const photoArray = [];
  const usedIds = new Set();
  const usedUrls = new Set();

  for (let i = 1; i <= 25; i++) {
    const id = getRandomNumber(1, 25);
    if (usedIds.has(id)) {
      i--;
      continue;
    }
    usedIds.add(id);

    let url;
    do {
      url = `photos/${getRandomNumber(1, 25)}.jpg`;

    } while (usedUrls.has(url));
    usedUrls.add(url);

    const photo = {
      id: id,
      url: url,
      description: 'Описание фотографии ' + i,
      likes: getRandomNumber(15, 200),
      comments: []
    };

    const numOfComments = getRandomNumber(1, 5);
    for (let j = 0; j < numOfComments; j++) {
      photo.comments.push(generateComment(j + 1));
    }

    photoArray.push(photo);
  }

  return photoArray;
};

export {generatePhotoArray};
