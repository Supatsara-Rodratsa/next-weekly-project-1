export function countingRating(score: number): string[] {
  let starItem = [];
  let totalScore = (score * 5) / 10;
  let fullScore = 5;

  while (fullScore > 0) {
    if (Math.trunc(totalScore) > 0) {
      starItem.push('<i class="fa fa-star fa-lg text-red">');
    } else if (totalScore >= 0.5) {
      starItem.push('<i class="fa fa-star-half-o fa-lg text-red">');
    } else {
      starItem.push('<i class="fa fa-star-o fa-lg text-red">');
    }
    totalScore -= 1;
    fullScore--;
  }

  return starItem;
}

export function blobToBase64(blob: Blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}
