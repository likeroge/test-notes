export const notesSortByNumber = (a, b) => {
  if (a.number < b.number) {
    return -1;
  }
  if (a.number > b.number) {
    return 1;
  }

  return 0;
};
