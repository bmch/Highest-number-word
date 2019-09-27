
exports.highestScoringWord = word => {
  let words = word.match(/[A-Za-z]+/g);
  let ans = [];
  let reducer = (accum, char) => {
    return accum + char.charCodeAt(0) - 96;
  };

  words.forEach(w => {
    let chars = w.split("");
    ans.push(chars.reduce(reducer, 0));
  });

  return words[ans.indexOf(Math.max(...ans))];
};