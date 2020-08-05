var array = [5,4,3,2,1];

function insertionSort(array){
    for(i=0;i<array.length;i++){
        let value = array[i];
        let hole = i;
        while(hole>0 && array[hole-1]>value){
            array[hole] = array[hole-1];
            hole = hole-1;
        }
        array[hole] = value
    }
    return array;
}

console.log(insertionSort(array));