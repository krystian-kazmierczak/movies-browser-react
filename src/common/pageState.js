export const pageState = (pageNumber) => {
  return pageNumber < 1 || pageNumber > 500 ? 1 : pageNumber;
};
