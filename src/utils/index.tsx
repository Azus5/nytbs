const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Only for demo purposes; ideally, we should be able to get the right book cover.
const getRandomBookCoverPath = () => {
  return `/src/assets/bookCovers/cover-${getRandomNumber(1, 22)}.jpeg`
}

export {
  getRandomBookCoverPath,
  getRandomNumber
}
