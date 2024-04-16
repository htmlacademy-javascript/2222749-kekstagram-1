function isPalindrome(str) {
  const cleanStr = str.toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}


function extractDigits (string) {
  massiveOfNums = []
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(string[i]) === true ){
  massiveOfNums.push(string[i]);
    }
  }
  return Number(massiveOfNums.join('').replace(' ', ''));
}

//не смог сделать без padStart

function addPadding(original, minLength, padding) {
  if (original.length >= minLength) {
    return original;
  }else {
    let changedString;
    changedString = original.padStart(minLength, padding)
    return changedString;
  }
}

function checkStringLength (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  else {
    return false;
  }
}

//работа над ошибками

const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i <= string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))){
      result += string.at(i);
    }

  }
  return parseInt(result, 10);
}
