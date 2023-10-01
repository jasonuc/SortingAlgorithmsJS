// Function that generates an array of random numbers in a disorganised version
const tryAgain = (myArr) => {
  let randomNum = Math.floor(Math.random() * 51);
  if (!myArr.includes(randomNum)) {
    myArr.push(randomNum);
  } else {
    tryAgain(myArr);
  }
};

const dissarangedNumbers = (maxNum) => {
  let myArr = [];
  let randomNum;
  for (let i = 0; i <= maxNum; i++) {
    randomNum = Math.floor(Math.random() * maxNum + 1);
    if (!myArr.includes(randomNum)) {
      myArr.push(randomNum);
    } else {
      tryAgain(myArr, randomNum);
    }
  }
  return myArr;
};

module.exports = {
    dissarangedNumbers
}
