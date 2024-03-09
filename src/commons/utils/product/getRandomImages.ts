import _ from 'lodash';
const CATEGORIES = ['album', 'fashion', 'ai', 'calendar'];

const getRandomImages = (): string => {
  const category = _.sample(CATEGORIES);
  return `https://api.lorem.space/image/${category}?w=340&h=340&r=${Math.floor(
    Math.random() * 350
  )}`;
};

export default getRandomImages;
