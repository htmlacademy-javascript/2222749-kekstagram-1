// Функция для генерации случайного числа в заданном диапазоне
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для создания случайного комментария
const generateComment = (id) => {
  const avatars = ['img/avatar-1.svg', 'img/avatar-2.svg', 'img/avatar-3.svg', 'img/avatar-4.svg', 'img/avatar-5.svg', 'img/avatar-6.svg'];
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  return {
    id: id,
    avatar: avatars[getRandomNumber(0, 5)],
    message: messages[getRandomNumber(0, 5)],
    name: 'Пользователь' + getRandomNumber(1, 100)
  };
}

// Функция для создания массива из 25 объектов фотографий
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
}

// Создание массива из 25 объектов фотографий
const photos = generatePhotoArray();
console.log(photos);
