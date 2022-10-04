
function getRandomIntInclusive(min, max) {
  if (min < 0 || max < 0 || min == '' || max == '' || min == undefined || max == undefined || min == Infinity || max == -Infinity) {
    return NaN;
  }
  min = Number.isInteger(min);
  max = Number.isInteger(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomIntInclusive();

function isStringLengthValid(currentComment, maxComentLength) {
  return currentComment.length <= maxComentLength;
}
isStringLengthValid();
