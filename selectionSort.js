var array = [5,4,3,2,1];

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  
  function selectionSort(array) {
    for(var i = 0; i < array.length; i++) {
      var min = i;
      for(var j = i + 1; j < array.length; j++) {
        if(array[j] < array[min]) {
          min = j;
        }
      }
      if(i !== min) {
        swap(array, i, min);
      }
    }
    return array;
  }
  
  console.log(selectionSort(array));