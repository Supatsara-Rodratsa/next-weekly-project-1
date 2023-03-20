import { ICON } from "@src/constants/constants";
import { MovieDTO } from "@src/types/types";

export function countingRating(score: number): string[] {
  const starItem = [];
  let totalScore = (score * 5) / 10;
  let fullScore = 5;

  while (fullScore > 0) {
    if (Math.trunc(totalScore) > 0) {
      starItem.push(ICON.FULL_STAR);
    } else if (totalScore >= 0.5) {
      starItem.push(ICON.HALF_STAR);
    } else {
      starItem.push(ICON.EMPTY_STAR);
    }
    totalScore -= 1;
    fullScore--;
  }
  return starItem;
}

export function getCurrentMovieId(movie: MovieDTO) {
  return movie.imdb_url.substring(7, 16);
}

export function sortedByKey(filterMovie: MovieDTO[], sortedBy: string) {
  switch (sortedBy) {
    case "Name":
      return filterMovie.sort((a: MovieDTO, b: MovieDTO) =>
        a.name.localeCompare(b.name)
      );
    case "Rating":
      return filterMovie.sort(
        (a: MovieDTO, b: MovieDTO) => b.rating - a.rating
      );
    case "Year":
      return filterMovie.sort((a: MovieDTO, b: MovieDTO) => b.year - a.year);
    default:
      return filterMovie;
  }
}

export function filterMovieBySearching(
  currentMovies: MovieDTO[],
  key: string
): MovieDTO[] {
  return currentMovies.filter((movie: MovieDTO) =>
    movie.name.toLowerCase().includes(key.toLowerCase())
  );
}

export function filterMovieByGenres(
  currentMovies: MovieDTO[],
  selectedGenres: string[]
): MovieDTO[] {
  return currentMovies.filter((movie: MovieDTO) => {
    return selectedGenres.some((genre: string) => movie.genre.includes(genre));
  });
}

export function setGenres(currentMovies: MovieDTO[]): Set<string> {
  const temp = new Set<string>();
  currentMovies.forEach((movie: MovieDTO) =>
    movie.genre.forEach((genre: string) => {
      temp.add(genre);
    })
  );
  return temp;
}
