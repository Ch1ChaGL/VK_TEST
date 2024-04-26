export const get250BestFilms = (page: number = 1, limit: number = 10) => {
  return `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=${limit}&selectFields=id&selectFields=name&selectFields=description&selectFields=slogan&selectFields=type&selectFields=year&selectFields=rating&selectFields=genres&selectFields=poster&selectFields=logo&lists=top250`;
};
