function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    //  if(array2Item === undefined || array1Item < array2Item){
    //    mergedArray.push(array1Item);
    //    array1Item = array1[i];
    //    i++;
    //  }   
    //  else {
    //    mergedArray.push(array2Item);
    //    array2Item = array2[j];
    //    j++;
    //  }


    if (array2Item === undefined) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else if (array1Item === undefined) {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }else if(array1Item < array2Item){
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    }else{
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]))


