'use strict';
interface Array<T> {
    shuffle(): T[];
}

Array.prototype.shuffle = function (): any[]{
    let inputArray: any[] = this;
    for (let i: number = inputArray.length - 1; i >= 0; i--){
        var randomIndex: number = Math.floor(Math.random() * (i + 1));
        var itemAtIndex: number = inputArray[randomIndex];

        inputArray[randomIndex] = inputArray[i];
        inputArray[i] = itemAtIndex;
    }
    return inputArray;
}

let tempArray = [1, 2, 3, 4, 5, "Hello"];
tempArray.shuffle();
console.log("Shuffle Array = " + tempArray);

// Good info: http://stackoverflow.com/questions/12802383/extending-array-in-typescript