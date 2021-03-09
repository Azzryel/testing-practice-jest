// takes an array of numbers and returns an object

function analyze(array) {
    let obj = {};
    let sortedArray = sortArray(array);

    obj.average = calculateAverage(array);
    obj.min = sortedArray[0];
    obj.max = sortedArray[array.length-1];
    obj.length = array.length;

    return obj;
}

function calculateAverage(array) {
    let avg = array.reduce( (total, cur) => {
        return total + cur;
    }) / array.length ;
    return avg;
}

function sortArray(array) {
    return array.sort((a, b) => {return a-b});
}

export { analyze }