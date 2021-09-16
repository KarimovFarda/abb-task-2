let heading = document.getElementById("heading")
const checkSameCountry = (arr, newArr, i, j, totalArrayLength, NumberOfRowElements) => {
    if(newArr[i][j] === -1) return;
    newArr[i][j] = -1;
    if(i+1 < totalArrayLength) {
      if(arr[i+1][j] === arr[i][j]) {
        checkSameCountry(arr, newArr, i+1, j, totalArrayLength, NumberOfRowElements);
      }
    }
    if(i-1 >= 0) {
      if(arr[i-1][j] === arr[i][j]) {
        checkSameCountry(arr, newArr, i-1, j, totalArrayLength, NumberOfRowElements);
      }
    }
    if(j+1 < NumberOfRowElements) {
      if(arr[i][j+1] === arr[i][j]) {
        checkSameCountry(arr, newArr, i, j+1, totalArrayLength, NumberOfRowElements);
      }
    }
    if(j-1 >= 0) {
      if(arr[i][j-1] === arr[i][j]) {
        checkSameCountry(arr, newArr, i, j-1, totalArrayLength, NumberOfRowElements);
      }
    }
  }
  
  const allCountryAmount = (arr) => {
    let sum = 0;
    const totalArrayLength = arr.length;
    const NumberOfRowElements = arr[0].length;
    if (totalArrayLength === 0 || NumberOfRowElements === 0) return 0;
    const newArr = arr.map(inner => inner.slice());
    for (let i=0; i<totalArrayLength; i++) {
      for (let j=0; j<NumberOfRowElements; j++) {
         if (newArr[i][j] >= 0) {
          checkSameCountry(arr, newArr, i, j, totalArrayLength, NumberOfRowElements);
          sum += 1;
        }
      }
    }
    heading.innerHTML = `The number of Total Countries is : ${sum}`
    return sum;
  }

  console.log("The number of countries : ", allCountryAmount([
    [5,4,3,2,3,1,4],
    [4,3,2,2,3,4,1],
    [4,4,4,2,4,4,1]
  
  ]));
  