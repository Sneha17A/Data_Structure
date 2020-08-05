const numbers=[5,4,3,2,1];

function mergeSort(array){
    if(array.length === 1){
        return array
    }
    const length = array.length
    const middle = Math.floor(length/2)
    const left = array.slice(0,middle)
    const right = array.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left,right){
    const result = [];
    let leftindex = 0;
    let rightindex = 0;

    while(leftindex<left.length && rightindex<right.length){
        if(left[leftindex]<right[rightindex]){
            result.push(left[leftindex]);
            leftindex++;
        }else{
            result.push(right[rightindex]);
            rightindex++;
        }
    }
    return result.concat(left.slice(leftindex)).concat(right.slice(rightindex));
}
const answer = mergeSort(numbers);
console.log(answer);