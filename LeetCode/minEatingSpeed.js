/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let [left, right] = [1, Math.max(...piles)];

  while (left < right) {
    const k = Math.floor((left + right) / 2)
    const hrsSpent = piles.reduce((hours, pile) => hours += Math.ceil(pile / k), 0);

    if (h < hrsSpent) {
      left = k + 1;
    } else if (hrsSpent <= h) {
      right = k;
    }

  }
  return right;
};