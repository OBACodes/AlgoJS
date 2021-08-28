function classPhotos(redShirtHeights, blueShirtHeights) {
  sortedRed = redShirtHeights.sort();
  sortedBlue = blueShirtHeights.sort();
  taller =
    Math.max(...sortedBlue) > Math.max(...sortedRed) ? sortedBlue : sortedRed;
  shorter = taller !== sortedRed ? sortedRed : sortedBlue;
  return taller.every((value, index) => value > shorter[index]);
}

classPhotos([1, 2, 3], [2, 2, 1]);
classPhotos([0, 2, 3], [2, 4, 6]);
classPhotos([1, 5, 2], [2, 2, 8]);
