import { ICON } from "@src/constants/constants";
import { MovieDTO } from "@src/types/types";

export function countingRating(score: number): string[] {
  let starItem = [];
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
